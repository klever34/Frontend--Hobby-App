import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';

import { Actions } from 'react-native-router-flux';

export default class Routes extends React.Component {
    render(){
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" initial={true}/>
                    <Scene key="signup" component={Signup} title="Signup"/>
                </Stack>
            </Router>
        )
    }
}