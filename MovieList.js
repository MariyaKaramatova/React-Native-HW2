import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';


export default class MovieList extends Component {  
    state = {
        movies: []
    }

    componentWillMount() {
        this.props.fetchMovies().then(movies => this.setState({movies}));
    }

    render() {
        return (
            <View>                
                {this.state.movies.map(m => 
                    <TouchableOpacity key={m.title} onPress={()=>this.props.selectCurrentMovie(m)}>
                        <Image 
                        style={{width: 50, height: 50}}
                        source={{uri: m.thumbnail_image}}/>
                        <Text>{m.title}</Text>         
                    </TouchableOpacity>
                )}
            </View>)
    }
}