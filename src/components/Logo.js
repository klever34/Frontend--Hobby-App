import React, { Component } from 'react';
import {  StyleSheet, 
          Text, 
          View, 
          Image, 
          TextInput, 
          ScrollView, 
          KeyboardAvoidingView, 
          StatusBar, 
          Button  
        
      } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Logo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={require('../images/react-native.png')} 
                    style= { styles.logo } />
                <Text style={styles.logoText}>Welcome to my Hobby App.</Text>
            </View>
            

        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
       
        width: 80,
        height: 90
    },
    logoText: {
        marginBottom: 10,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)',
        alignItems: 'center'
    }
});

