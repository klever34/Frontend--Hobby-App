import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import {  StyleSheet, 
          Text, 
          View, 
          Image, 
          TextInput, 
          ScrollView,
          KeyboardAvoidingView, 
          StatusBar, 
          Button,
          TouchableOpacity  
        
      } from 'react-native';

import {StackNavigator} from 'react-navigation';
import Logo from '../components/Logo';
import { Actions } from 'react-native-router-flux';

import { Communications } from 'react-native-communications';

export default class Signup extends React.Component {
    static navigationOptions = {
        title: "Sign Up",
        headerStyle: { backgroundColor: '#263238' },
        headerTitleStyle: { color: '#fff' },
      }
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    multipleActions(){
        if (!this.validateEmail(this.state.email)) {
            alert("Provide valid email")
            
          }
          else if(!this.validatePhone(this.state.phone)){
            alert("Email should be in this format +234 (plus 10 digits)")
          } 
          else {
            this.postUserData();
            this.props.navigation.goBack();
          }
       
    }
    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
      };

    validatePhone = (phone) => {
        var phonePattern = /\+234\d{10}$/;
        return phonePattern.test(phone)
    };
    postUserData(){
        var data = {
            "email":    this.state.email,
            "password": this.state.password,
            "confirmPassword": this.state.confirmPassword,
            "phone": this.state.phone
        }

        url = "https://quiet-tor-69736.herokuapp.com/signup"; 

        fetch(url, {  
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(function(response){
            console.log(data)
            return response.json();
        }).then(function(data){
            console.log(data)
        });

        
        this.textInput.clear()
        this.textInput1.clear()
        this.textInput2.clear()
        this.textInput3.clear()
    }
    
    render() {
        const { state, navigate } = this.props.navigation;
        return (
            <ScrollView >
  
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Logo />
                <View>

                <TextInput ref={input => { this.textInput = input }}
                    style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder= "Email"
                    keyboardType = "email-address"
                    placeholderTextColor = "#FFFFFF"
                    autoCapitalize = "none"
                    onChangeText={(email) => this.setState({email})}/>

                <TextInput ref={input => { this.textInput1 = input }}
                    style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder= "Password"
                    placeholderTextColor = "#FFFFFF"
                    secureTextEntry 
                    onChangeText={(password) => this.setState({password})}/>

                <TextInput ref={input => { this.textInput2 = input }}
                    style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder= "Confirm Password"
                    placeholderTextColor = "#FFFFFF"
                    secureTextEntry 
                    onChangeText={(confirmPassword) => this.setState({confirmPassword})}/>

                 <TextInput ref={input => { this.textInput3 = input }}
                    style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder= "Phone e.g +2348132937571"
                    placeholderTextColor = "#FFFFFF" 
                    keyboardType = "numeric"
                    onChangeText={(phone) => this.setState({phone})}/>

                <TouchableOpacity onPress={() => this.multipleActions()} style={styles.button}>
                    <Text style={styles.buttontext}>Sign Up</Text>
                </TouchableOpacity>
            </View>
                <View style={styles.signupTextContent}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} ><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            </ScrollView>
            
        )
    }
}


const styles = StyleSheet.create({
container: {
    backgroundColor:  '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
signupTextContent: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'

},
signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16
},
signupButton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500'
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