import React from 'react';
import { Text } from 'react-native';

const CardHeader= (props) => {
    return (
        <Text style={styles.CardHeaderStyle}>{props.children}</Text>
    )
}

const styles= {
    CardHeaderStyle:{
        fontSize: 20,
        marginTop: 4,
        marginBottom:5,
        fontWeight:'bold',
        fontFamily: 'Iowan Old Style'
    }
}
export default CardHeader; 


// .title-modern {
//     font-family: "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
//     line-height: 1.05em;
