import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button
} from 'react-native';


export default class ForgottenPassword extends Component {  
    state = {
        email: ''
      }

    render() {
        return (
            <View>
                <Text>
                    Forgot Password
                </Text>
                <TextInput placeholder='Email' value={this.state.email} 
                    onChangeText={email => this.setState({email})}/>
                <Button 
                          onPress={()=>this.props.forgottenPass(false)}  
                          title="Submit"
                      />
                <Text> Send to us new email and we will create a password for you </Text>
                <Button 
                          onPress={()=>this.props.forgottenPass(false)}
                          title="Close"
                      />      
                  </View>)
    }
}