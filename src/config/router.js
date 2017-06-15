import React from 'react';
import {Image} from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from '../components/Screen-Home';
import SearchScreen from '../components/Screen-Search';
import UserScreen from '../components/Screen-User';
import ShowDetailScreen from '../components/Screen-ShowDetail';

export const FeedStack = StackNavigator({
  Feed: {
    screen: HomeScreen,
    navigationOptions : {
        title: 'back', 
        header: null,
        tabBarIcon: ({ tintColor }) => (
          <Image
              source={require('../assets/img/ic_home.png')}
              style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
    }
  },
  Details: {
    screen: ShowDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
    }),
  },
});

export const Tabs = TabNavigator({
  Home: { screen: FeedStack },
  Search: { screen: SearchScreen },
  User: { screen: UserScreen },
}, {
    tabBarOptions: {
        labelStyle: {
            fontSize: 1,   
        },
        activeTintColor: '#fff',
        inactiveTintColor:'#eee',
        tabStyle: {
            width: 100,    
        },
        style: {
            backgroundColor: '#e74c3c',
            marginTop: 20,
            elevation:2,
        },
        
    }, tabBarPosition: 'top', animationEnabled:true, swipeEnabled:true
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

const styles = {
  icon: {
    width: 26,
    height: 26,
  },
};