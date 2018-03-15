import React, { Component } from 'react';
import {  StyleSheet, 
          Text, 
          View, 
          Image, 
          TextInput, 
          TouchableOpacity, 
          KeyboardAvoidingView, 
          StatusBar, 
          Button  
        
      } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Logo extends React.Component {

    constructor(props){
    super(props)

    this.state = {
        username: '',
        password: '',
    }
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder= "Email"
                    keyboardType = "email-address"
                    placeholderTextColor = "#FFFFFF"
                    onChangeText={(text) => this.setState({username})}/>

                <TextInput 
                    style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder= "Password"
                    placeholderTextColor = "#FFFFFF"
                    secureTextEntry 
                    onChangeText={(text) => this.setState({password})}/>


                <TouchableOpacity onPress={() => Actions.home()} style={styles.button}>
                    <Text style={styles.buttontext}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
            

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#FFFFFF',
        marginVertical: 10,
        paddingVertical: 12
    },
    buttontext: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF'
    },
    button: {
        backgroundColor: '#1c313a',
        borderRadius: 25,
        width: 300,
        marginVertical: 10,
        alignItems: 'center',
        paddingVertical: 13
    }
});

