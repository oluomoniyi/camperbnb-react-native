import React from 'react';
import { Text } from 'react-native';

const ItemListHeader = (props) => {
    return (
        <Text style={styles.ItemListHeader}>{props.children}</Text>
    )
}

const styles= {
    ItemListHeader:{
        fontSize: 15,
        marginLeft: 15,
        marginBottom:5,
        fontWeight:'bold',
        fontFamily: 'Iowan Old Style',
        color: '#666666',
    }
}
export default ItemListHeader; 