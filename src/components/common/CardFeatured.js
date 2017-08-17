import React, {Component} from 'react'
import {TouchableOpacity, Image, View, Text, TextLimit} from 'react-native'

import {TextLimit} from './TextLimit'

import {horizontalCardStyles} from '../styles';

const CardFeatured = (props) => {
    const {horizontalCardStyles,} = props;
    return (
        <TouchableOpacity style={horizontalCardStyles.container} 
            onPress={() => this.props.navigation.navigate('Details', {  id: item._id, name: item.name })}
            key={item._id}>
            <Image style={horizontalCardStyles.image}
            source={{uri: item.image.replace(".webp", ".jpg")}} //change webp source to jpg, lazy fix instead of node api fix
            />
            <View style={horizontalCardStyles.CardHighlightContainer}>
                <Text style={horizontalCardStyles.CardHighlightText}>
                    {item.location.toUpperCase()}
                </Text>
                <TextLimit characterLimit={20} style={horizontalCardStyles.CardHeaderStyle}>{item.name}</TextLimit>
                <Text style={horizontalCardStyles.CardHeaderMiniStyle}>£{item.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CardFeatured