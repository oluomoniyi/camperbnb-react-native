import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import TextLimit from './partials/TextLimit'
import { defaultStyles } from './styles';
import Hr from './partials/Hr'


const ItemDetail = ({item}) => {
    const {name, image, price, description, location} = item
     return (
         <View>
            <TouchableOpacity style={styles.container}>
                <Image style={{width: null, height: 200}}
                source={{uri: image.replace(".webp", ".jpg")}} //fix in mongo db
                />
                <View style={styles.CardHighlightContainer}>
                        <Text style={styles.CardHighlightText}>
                            {location.toUpperCase()}
                        </Text>
                    </View>
                <View style={styles.Margin}>
                    <TextLimit characterLimit={30} style={styles.CardHeaderStyle}>{name}</TextLimit>
                    <Text style={styles.CardHeaderMiniStyle}>£{price}</Text>
                    <TextLimit characterLimit={300} style={styles.CardDescriptionStyle}>{description}</TextLimit>
                </View>
            </TouchableOpacity>
        </View>
    )
};

var styles = StyleSheet.create({
    Margin:{
        marginLeft: 15,
    },
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        overflow: 'hidden',
        marginBottom:20,
        paddingBottom: 10
    },
    CardHeaderStyle:{
        fontSize: 24,
        marginBottom:5,
        fontWeight:'bold',
        ...defaultStyles.text,
    },
    CardHeaderMiniStyle:{
        fontSize: 15,
        marginTop: 5,
        marginBottom:5,
        fontWeight:'bold',
        color: '#e74c3c',
        ...defaultStyles.text,
    },
    CardDescriptionStyle:{
        color: '#666666',
        fontSize: 12,
    },
    CardHighlightText:{
        color: '#fff',
        fontSize: 18,
        width: null,
        height: 50,
        lineHeight: 50,
        marginLeft: 15,
    },
    CardHighlightContainer:{
        backgroundColor: 'rgba(231, 76, 60, 0.9)',
    }
});

export default ItemDetail;