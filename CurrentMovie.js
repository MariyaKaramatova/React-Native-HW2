import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Image,
    Dimensions
} from 'react-native';
import MyWebView from 'react-native-webview-autoheight';


export default class CurrentMovie extends Component {  

    render() {
        return (
            <View>
                <Button onPress={()=>this.props.selectCurrentMovie(null)} title="Back" />
                <Text>{this.props.currentMovie.title}</Text>
                <Text>{this.props.currentMovie.artist}</Text>
                <Image style={{width: 200, height: 200}} source={{uri: this.props.currentMovie.image}}/>
                <MyWebView source={{uri: this.props.currentMovie.url}} 
                startInLoadingState={true}/>                
            </View>)
    }
}