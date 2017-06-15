import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Button, ScrollView, TouchableOpacity} from 'react-native'
import FadeInView from './FadeIn'
import TextLimit from './partials/TextLimit'
import Hr from './partials/Hr'
import Avatar from './partials/Avatar';
import {cardStyles, h1} from './styles'

class HomeScreen extends React.Component {

    state = { items: []};

    componentWillMount(){
        fetch ('https://camperbnb.herokuapp.com/api/search/')
        .then ((response) => response.json ())
        .then ((responseData) => {
            this.setState ({items: responseData.campgrounds.slice(0,40)})  
        })
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            throw error;
        });
    }

    renderItems(){
        return this.state.items.map(item => 
            <TouchableOpacity style={cardStyles.container} 
                onPress={() => this.props.navigation.navigate('Details', {  id: item._id, name: item.name })}
                key={item._id}>
                <Image style={{width: null, height: 200}}
                source={{uri: item.image.replace(".webp", ".jpg")}} //fix in mongo db
                />
                <View style={cardStyles.CardHighlightContainer}>
                        <Text style={cardStyles.CardHighlightText}>
                            {item.location.toUpperCase()}
                        </Text>
                </View>
                <View style={cardStyles.Margin}>
                    <TextLimit characterLimit={20} style={cardStyles.CardHeaderStyle}>{item.name}</TextLimit>
                    <Text style={cardStyles.CardHeaderMiniStyle}>£{item.price}</Text>
                    <TextLimit characterLimit={300} style={cardStyles.CardDescriptionStyle}>{item.description}</TextLimit>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <FadeInView style={{width: null, height: 400, flex:1}}>
                <ScrollView scrollsToTop={false}>
                    <Text style={h1.text}>{this.state.items.length} available campgrounds</Text>
                    {this.renderItems()}
                </ScrollView>
                <Avatar imageURI={require('../assets/img/add.png')} ></Avatar>
            </FadeInView>
        )
        }
    }


export default HomeScreen;