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
          AsyncStorage  
        
      } from 'react-native';
      import {StackNavigator} from 'react-navigation';

import Logo from '../components/Logo';

export default class Home extends React.Component {
    static navigationOptions = {
        title: "Hobby"
      }
constructor(props){
    super(props);
    console.log(props)
};

   
postHobby(){
    var data = {
        "hobby":      this.state.hobby,
        "user_email": this.props.navigation.state.params.u_email,
        "user_phone": this.props.navigation.state.params.u_phone
    } 
        console.log(data)
    
        url = "https://quiet-tor-69736.herokuapp.com/hobby"; 
    
        fetch(url, {  
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': '',
            },
            body: JSON.stringify(data)
        })
        .then(function(response){
            console.log(data)
            return response.json();
        }).then(function(data){
            console.log(data)
        });
        alert('Hobby created.');
        this.textInput.clear()
    }
    logout(){
        AsyncStorage.removeItem('jwt');
        alert('You have been logged out.');
        this.props.navigation.goBack()
    }

    render() {        
        const { state, navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Logo />

                <TextInput ref={input => { this.textInput = input }}
                    style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder= "Add Hobby"
                    placeholderTextColor = "#FFFFFF"
                    onChangeText={(hobby) => this.setState({hobby})}/>


                <TouchableOpacity onPress={() => this.postHobby()} style={styles.button}>
                    <Text style={styles.buttontext}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.logout()} style={styles.logButton}>
                    <Text style={styles.buttontext}>Log out</Text>
                </TouchableOpacity>
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
button: {
    backgroundColor: '#1c313a',
    borderRadius: 25,
    width: 300,
    marginVertical: 10,
    alignItems: 'center',
    paddingVertical: 13
},
buttontext: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF'
},
logButton: {
    marginVertical: 10,
    alignItems: 'center',
    paddingVertical: 13
}

});