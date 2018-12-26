/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//import React, {Component} from 'react';
//import {Platform, StyleSheet, Text, View} from 'react-native';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>IAMACAT!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}*/

import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';
import Login from './Login';
import EULA from './EULA';
import MovieList from './MovieList';
import CurrentMovie from './CurrentMovie';
import ForgottenPassword from './ForgottenPassword';

export default class App extends Component {
  state = {
    isPassForgotten: false,
    isLoggedIn: false,
    acceptedEULA: false,
    currentMovie: null
  }
  
  forgottenPass = (f) => {
    this.setState({isPassForgotten: f});
  }

  login = (username, password) => {
    if (username === 'admin@abv.bg' && password === 'qwerty123'){
      this.setState({isLoggedIn: true});
    }
  }

  acceptEULA = () => {
    this.setState({acceptedEULA: true});
  }

  fetchMovies = () => {
    if(this.moviesPromise) {
      return this.moviesPromise;
    }
    if(!this.movies){
      this.moviesPromise = fetch('http://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
          this.movies = response.json();
          return this.movies;
        }
      )
      return this.moviesPromise;
    } else {
      return new Promise.resolve(this.movies);
    }
  }

  selectCurrentMovie = (m) => {
    this.setState({currentMovie: m})
  }

  render() {
        let page = null;
        if (this.state.isPassForgotten) {
          page = <ForgottenPassword forgottenPass = {this.forgottenPass}/>
        } else if (!this.state.isLoggedIn) {
          page = <Login login = {this.login} forgottenPass = {this.forgottenPass}/>;
        } else if (!this.state.acceptedEULA) {
          page = <EULA acceptEULA = {this.acceptEULA}/>;
        } else if (this.state.currentMovie === null) {
          page = <MovieList fetchMovies = {this.fetchMovies} selectCurrentMovie={this.selectCurrentMovie}/>;
        } else if (this.state.currentMovie !== null) {
          page = <CurrentMovie currentMovie = {this.state.currentMovie} selectCurrentMovie={this.selectCurrentMovie}/>;
        }
        return (
            <ScrollView>
                {page}
            </ScrollView>)
  }
}

/*import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
