import React, {Component} from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {Text, View, Image, StyleSheet} from 'react-native'
import Header from './components/Header';
import FadeInView from './components/FadeIn'
import Hr from './components/partials/Hr'
import ItemList from './components/ItemList';
import Avatar from './components/partials/Avatar';

//import HomeScreen from './components/Screen-Home';
import SearchScreen from './components/Screen-Search';
import UserScreen from './components/Screen-User';

class HomeScreen extends React.Component {
    static navigationOptions = {
    title: 'Home',
        tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('./assets/img/ic_home.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
    ),
};



render() {
    const { navigate } = this.props.navigation;
    return (
        <FadeInView style={{width: null, height: 400, flex:1}}>
            {/*<Header/>*/}
            <Hr/>
            <ItemList></ItemList>
            <Avatar></Avatar>
        </FadeInView>
    )
    }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const Navigator = TabNavigator({
  //Home: { screen: HomeScreen },
  Home: { screen: HomeScreen },
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

export default Navigator;