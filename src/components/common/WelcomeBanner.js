import React, {Component} from 'react'
import {Image,View,Text} from 'react-native'
import {h1, h4, Home} from '../styles';

const WelcomeBanner = (props) => {
    return (
        <View>
            <Image style={Home.backgroundImage} source={require('../../assets/img/camp1.jpg')}>
                <Image style={Home.logo}
                source={require('../../assets/img/icon.png')}
                />
                <Text style={h1.text}>camperbnb</Text>
                <Text style={h4.text} >your adventure starts here</Text>
                <Text style={h4.text} >CAMPGROUND ✻ LOCATION ✻ ADVENTURE</Text>
            </Image>
        </View>
    )
}

export {WelcomeBanner}