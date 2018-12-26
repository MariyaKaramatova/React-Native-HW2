import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button
} from 'react-native';


export default class Login extends Component {  
    state = {
        username: '',
        password: ''
      }

    render() {
        return (
            <View>
                <Text>
                    Login
                </Text>
                <TextInput placeholder='Username' value={this.state.username} 
                    onChangeText={username => this.setState({username})}/>
                <TextInput placeholder='Password' value={this.state.password} 
                    secureTextEntry={true}
                    onChangeText={password => this.setState({password})}/>
                <Button 
                          onPress={()=>this.props.login(this.state.username, this.state.password)}
                          title="Submit"
                      />
                <Button 
                          onPress={()=>this.props.forgottenPass(true)}
                          title="Forgot password"
                />
            </View>)
    }
}