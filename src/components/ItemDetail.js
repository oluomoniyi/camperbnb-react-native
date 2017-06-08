import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import CardDescription from './partials/CardDescription'
import CardHeader from './partials/CardHeader'
import CardHighlight from './partials/CardHighlight'
import CardHeaderMini from './partials/CardHeaderMini'
import { defaultStyles } from '../styles';


const ItemDetail = ({item}) => {
    const {name, image, price, description, location} = item
     return (
        <TouchableOpacity style={styles.container}>
            <Image style={{width: null, height: 200}}
            source={{uri: image.replace(".webp", ".jpg")}} //fix in mongo db
            />
            <CardHighlight>{location}</CardHighlight>
            <View style={{ borderRadius:0}}>
                <CardHeader>{name}</CardHeader>
                <CardHeaderMini>{price}</CardHeaderMini>
                <CardDescription characterLimit={300}>{description}</CardDescription>
            </View>
        </TouchableOpacity>
    )
};

var styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    overflow: 'hidden',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});

export default ItemDetail;