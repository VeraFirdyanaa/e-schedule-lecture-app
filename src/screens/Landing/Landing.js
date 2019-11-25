import React, { Component } from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import { Button, Icon } from "native-base";
import colors from '../../colors';

class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <StatusBar backgroundColor={'transparent'} translucent />
                <View style={{ flex: 1, backgroundColor: colors.green01 }}>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 40, color: 'white', fontWeight: 'bold' }}>e-Scheduler</Text>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 13, color: 'white', fontStyle: 'italic' }}>STMIK Bani Saleh, Automate now</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button block rounded danger style={{ marginHorizontal: 40, backgroundColor: colors.white }} onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{ color: colors.black }}>MASUK</Text>
                        </Button>
                    </View>
                </View>
            </React.Fragment>
        );
    }
}

export default Landing;