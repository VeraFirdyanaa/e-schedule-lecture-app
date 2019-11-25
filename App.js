/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from "react-redux";
import FlashMessage from "react-native-flash-message";
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";

import store from "./src/redux/store";
import { Icon } from "native-base";

import AuthLoadingScreen from "./src/AuthLoadingScreen";
import Landing from "./src/screens/Landing/Landing";
import Login from "./src/screens/Login/Login";
import Register from "./src/screens/Register/Register";

import Discover from "./src/screens/Discover/Discover";
import Search from "./src/screens/Search/Search";
import Profile from "./src/screens/Profile/Profile";
import Restaurant from './src/screens/Restaurant/Restaurant';
import SearchResult from './src/screens/Search/SearchResult/SearchResult';
import CreateReservation from './src/screens/Reservation/CreateReservation';
import Home from './src/screens/Home/Home';
import TeachingPlan from './src/screens/TeachingPlan/TeachingPlan';
import colors from './src/colors';
import TeachingPlanForm from './src/screens/TeachingPlan/TeachingPlanForm';

const AppTabNav = createBottomTabNavigator({
  // Search: {
  //   screen: Search,
  //   navigationOptions: {
  //     tabBarLabel: 'CARI',
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon name="search" size={24} color={tintColor} type="Ionicons" />
  //     )
  //   }
  // },
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Beranda',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={24} color={tintColor} type="Ionicons" />
      )
    }
  },
  TeachingPlan: {
    screen: TeachingPlan,
    navigationOptions: {
      tabBarLabel: 'Teaching Plan',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="clock" size={24} color={tintColor} type="Ionicons" />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profil',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="contact" size={24} color={tintColor} type="Ionicons" />
      )
    }
  }
}, {
  lazy: true,
  tabBarOptions: {
    activeTintColor: colors.green01,
    inactiveTintColor: 'grey',
    showLabel: true,
    iconStyle: {
      width: 40,
      height: 40
    },
    style: {
      height: 50,
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
});

const AppStackNavigator = createStackNavigator({
  AppTab: {
    screen: AppTabNav,
    navigationOptions: {
      header: null
    }
  },
  TeachingPlanForm: {
    screen: TeachingPlanForm,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: 'AppTab'
});

const AuthStackNavigator = createStackNavigator({
  Landing: {
    screen: Landing,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: 'Landing'
});

const SwitchNavigator = createSwitchNavigator({
  AuthLoadingScreen: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppStackNavigator
});

const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
        <FlashMessage position="top" />
      </Provider>
    );
  }
}
