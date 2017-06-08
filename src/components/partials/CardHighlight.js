import React from 'react';
import { Text, View } from 'react-native';

const CardHighlight = (props) => {
    return (
        <View style={styles.CardHighlightstyle}>
            <Text style={styles.CardHighlighttextstyle}>
                {props.children.toUpperCase()}
            </Text>
        </View>
    )
}

const styles = {
    CardHighlighttextstyle:{
        color: '#fff',
        fontSize: 12,
        padding:10
    },
    CardHighlightstyle:{
        backgroundColor: 'rgba(231, 76, 60, 0.7)',
        position: 'relative',
        bottom: 30,
        left: 0,
        right: 0,
    }
}

export default CardHighlight; 