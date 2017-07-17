import React, {Component} from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, View, ScrollView} from 'react-native';
import {Avatar} from './common'
import { cardStyles, viewFlex } from './styles';

class ShowDetailScreen extends Component {
    constructor(props) {
        super(props);
    }

    state = { items: []};

    componentWillMount() {
        fetch ('https://camperbnb.herokuapp.com/api/searchById?id=' + this.props.navigation.state.params.id)
        .then ((response) => response.json ())
        .then ((responseData) => {
            this.setState ({items: this.state.items.concat(responseData.campgrounds)})
        })
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            throw error;
        });
    }

    fetchImages(){
        return (
            this.state.items.map(item => 
                    <Image style={{width: null, height: 300}}
                    source={{uri: item.image.replace(".webp", ".jpg")}} //fix in mongo db
                    key={i}/>
            )
        )
    }

    renderItem(){
        return this.state.items.map(item => 
            <View key={item._id}>
                <Image style={{width: null, height: 300}}
                    source={{uri: item.image.replace(".webp", ".jpg")}} //fix in mongo db
                />
                <View style={cardStyles.CardHighlightContainer}>
                    <Text style={cardStyles.CardHighlightText}>
                        {item.location.toUpperCase()}
                    </Text>
                </View>
                <View style={cardStyles.Margin}>
                    <Text style={cardStyles.CardHeaderStyle}>{item.name}</Text>
                    <Text style={cardStyles.CardHeaderMiniStyle}>£{item.price}</Text>
                    <Text style={cardStyles.CardDescriptionStyle}>{item.description}</Text>
                </View>      
            </View>
        );
    }

    render(){
        return (
            <ScrollView style={viewFlex.flex} scrollsToTop={false} showsVerticalScrollIndicator={true}>
                {this.renderItem()}
                <Avatar imageURI={require('../assets/img/add.png')} ></Avatar>
            </ScrollView>
        )
    }
}

export default ShowDetailScreen;