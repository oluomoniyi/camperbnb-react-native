import React from 'react';
import {Image} from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from '../components/Screen-Home';
import SearchScreen from '../components/Screen-Search';
import UserScreen from '../components/Screen-User';
import ShowDetailScreen from '../components/Screen-ShowDetail';
import ShowFeedScreen from '../components/Screen-Feed';

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
  ShowAll: {
    screen: ShowFeedScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'All Campgrounds',
      tabBarVisible: false,
    })
  },
  Details: {
    screen: ShowDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
      tabBarVisible: false,
    })
  }
});

export const Tabs = TabNavigator({
    Home: { 
      screen: FeedStack,
      navigationOptions : {
        title: 'back', 
        header: null,
        tabBarIcon: ({ tintColor }) => (
          <Image
              source={require('../assets/img/ic_home.png')}
              style={[styles.icon, {tintColor: tintColor}]}
          />
        )
      }
    },
    Search: { 
      screen: SearchScreen ,
      navigationOptions : {
          tabBarLabel: '',
          tabBarIcon: ({ tintColor }) => (
          <Image
              source={require('../assets/img/ic_search.png')}
              style={[styles.icon, {tintColor: tintColor}]}
          />
          ),
      }
    },
    // User: { screen: UserScreen },
  }, {
      tabBarOptions: {
          labelStyle: {
              fontSize: 1,   
          },
          activeTintColor: '#e74c3c',
          inactiveTintColor:'#ddd',
          tabStyle: {
              width: 100,
          },
          style: {
              backgroundColor: '#fff',
              marginTop: 20,
              elevation:2,
              borderBottomColor:'#ddd',
              borderBottomWidth:1,
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