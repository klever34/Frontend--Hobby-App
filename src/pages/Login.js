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
          TouchableOpacity,
          FlatList,
          ActivityIndicator,
          AsyncStorage  
      } from 'react-native';
      
import {StackNavigator} from 'react-navigation';
import Logo from '../components/Logo';
import Home from '../components/Home';

import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
    static navigationOptions = {
        title: "Login"
      }

constructor(props){
    super(props);
    this.state ={ 
        
        u_id: '',
        u_email: '',
        u_phone: ''
    }
};


performLoginandSend(){
    if (!this.validateEmail(this.state.email)) {
        alert("Provide valid email")
        
      } else {
        this.getUserData();
      }
   
}
validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };

getUserData(){
    var data = {
        "email":    this.state.email,
        "password": this.state.password
    }
    url = "https://quiet-tor-69736.herokuapp.com/login"; 

    fetch(url, {  
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then((response)=> response.json())
    .then((responseJson)=>{
        if(JSON.stringify(responseJson.response.data.status) == '200'){
            this.props.navigation.navigate("ScreenThree", {
                u_id:     responseJson.response.data.user.id,
                u_email:  responseJson.response.data.user.email,
                u_phone:  responseJson.response.data.user.phone })

                try {
                    AsyncStorage.setItem('jwt', responseJson.response.data.id)
                } catch (error) {
                // Error saving data
                }

        }
        else if(JSON.stringify(responseJson.response.data.status) == '401'){
                alert("Invalid Email or Password")
        }
        
    }).catch((error) => {
        console.error(error);
      })
    
}

    
    render() {
    const { navigate } = this.props.navigation;

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Logo />
                <View>
                <TextInput 
                    style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder= "Email"
                    keyboardType = "email-address"
                    placeholderTextColor = "#FFFFFF"
                    onChangeText={(email) => this.setState({email})}/>

                <TextInput 
                    style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder= "Password"
                    placeholderTextColor = "#FFFFFF"
                    secureTextEntry 
                    onChangeText={(password) => this.setState({password})}/>


                <TouchableOpacity onPress={() => this.performLoginandSend()} style={styles.button}>
                    <Text style={styles.buttontext}>Login</Text>
                </TouchableOpacity>
            </View>
                <View style={styles.signupTextContent}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={() => navigate("ScreenTwo", {screen: "Sign up"})} ><Text style={styles.signupButton}>SignUp</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            
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