import React, { Component } from 'react'
import { View, StatusBar, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native'
import { Icon, Text, Form, Input, Item, Label, Button } from 'native-base';
import { connect } from "react-redux";
import { doLogin } from "../../redux/reducers/loginReducer";
import { showMessage } from "react-native-flash-message";
import colors from "../../colors";

class Login extends Component {

    state = {
        email: null,
        password: null
    }

    handleLogin = () => {
        const { email, password } = this.state;
        this.props.dispatch(
            doLogin({ email, password },
                (response) => {
                    this.props.navigation.navigate('App');
                },
                (err) => {
                    showMessage({
                        message: "Error",
                        description: err.error ? err.error : 'Terjadi sebuah kesalahan saat melakukan login',
                        type: "danger",
                        icon: "danger",
                        duration: 3000
                    });
                }));
    }

    onHandleChange = (e, key) => {
        this.setState({
            [key]: e
        });
    }

    render() {
        return (
            <React.Fragment>
                <StatusBar barStyle="light-content" />
                <View style={{ flex: 1, backgroundColor: colors.green01 }}>
                    <View style={{ flex: 1 }}>
                        <View style={{
                            position: 'absolute',
                            height: 40, width: 40,
                            left: 10, top: 20,
                            zIndex: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 5
                        }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                {/* <Ionicon name="arrow-back" size={30} color="black" /> */}
                                <Icon name="arrow-back" size={30} style={{ color: 'white' }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 2, backgroundColor: colors.green01, borderRadius: 5, maxHeight: 320, marginTop: 120, marginHorizontal: 15 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 15 }}>
                                <Text style={{ fontSize: 25, borderBottomWidth: 2, borderBottomColor: colors.white, color: colors.white }}>MASUK</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Form style={{ paddingRight: 20 }}>
                                    <Item>
                                        <Icon name="mail" type="Ionicons" style={{ color: colors.white }} />
                                        <Input onChangeText={text => this.onHandleChange(text, 'email')} keyboardType="email-address" placeholder="Email" placeholderTextColor={colors.white} style={{ color: colors.white }} />
                                    </Item>
                                    <Item>
                                        <Icon name="key" type="Ionicons" style={{ color: colors.white }} />
                                        <Input onChangeText={text => this.onHandleChange(text, 'password')} secureTextEntry placeholder="Password" placeholderTextColor={colors.white} style={{ color: colors.white }} />
                                    </Item>
                                </Form>
                                <Button iconLeft danger block rounded style={{ marginTop: 35, marginHorizontal: 15, backgroundColor: colors.white }} onPress={this.handleLogin} disabled={this.props.isLoading}>
                                    {this.props.isLoading ? <ActivityIndicator color={colors.black} /> : <Icon name="send" type="Ionicons" style={{ color: colors.black }} />}
                                    <Text style={{ color: colors.black }}>{this.props.isLoading ? 'Mohon Menunggu ...' : 'Masuk'}</Text>
                                </Button>
                            </View>
                        </View>
                    </View>

                </View>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ loginReducer }) => {
    return {
        user: loginReducer.user,
        isLoading: loginReducer.isLoading
    }
}

export default connect(mapStateToProps)(Login);