import React, { Component } from "react";
import { View, ActivityIndicator, AsyncStorage, Text, StatusBar, ImageBackground } from "react-native";
import { connect } from "react-redux";
import { getUserData } from "./redux/reducers/loginReducer";
import colors from "./colors";
// import * as Animatable from 'react-native-animatable';

class AuthLoadingScreen extends Component {

    constructor() {
        super();
        this.loadApp();
    }

    loadApp = async () => {
        // this.props.dispatch(getUserData());

        const userData = await AsyncStorage.getItem('userData');

        setTimeout(() => {
            this.props.navigation.navigate(userData ? 'App' : 'Auth');
        }, 2000);
    }

    render() {
        return (
            <React.Fragment>
                <StatusBar backgroundColor={'transparent'} translucent />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.green01 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 40, color: 'white', fontWeight: 'bold' }}>e-Scheduler</Text>
                        <ActivityIndicator size="large" color="#fff" />
                    </View>
                </View>
            </React.Fragment>
        )
    }
}

export default AuthLoadingScreen;