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
import {StackNavigator} from 'react-navigation';
import { Router, Stack, Scene } from 'react-native-router-flux';


import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

import Home from './src/components/Home';

const App = StackNavigator({
  ScreenOne: { screen: Login},
  ScreenTwo: { screen: Signup},
  ScreenThree: {screen: Home}
});


export default App; 