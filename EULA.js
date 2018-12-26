import React, { Component } from 'react';
import {
    View,
    Button
} from 'react-native';
import MyWebView from 'react-native-webview-autoheight';


export default class EULA extends Component {  

    render() {
        return (
            <View>
                <MyWebView source={{uri: 'https://www.pandadoc.com/website-standard-terms-and-conditions-template/'}} 
                startInLoadingState={true}/>

                <Button onPress={this.props.acceptEULA} title="Accept" />
            </View>)
    }
}