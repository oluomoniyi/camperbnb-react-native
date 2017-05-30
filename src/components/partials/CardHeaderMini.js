import React from 'react';
import {View, Text } from 'react-native';

const CardHeaderMini = (props) => {
    return (
        <View>
            <Text style={styles.CardHeaderMiniStyle}>£{props.children} /per night</Text>
        </View>
    )
}

const styles= {
    CardHeaderMiniStyle:{
        fontSize: 15,
        marginTop: 5,
        marginBottom:5,
        fontWeight:'bold',
        color: '#e74c3c',
        fontFamily: 'Avenir-Light'
    }
}

// margin: 0;
//     padding: 0;
//     color: #e74c3c;
//     font-size: 20px;
//     font-weight: 400;
//     text-align: left;

export default CardHeaderMini; 