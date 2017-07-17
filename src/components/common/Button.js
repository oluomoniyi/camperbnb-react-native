import React from 'react';
import {Text, TouchableOpacity} from 'react-native'

const Button = (props) => {
    const {title} = props
    const {buttonStyle,textStyle} = styles
    return (
        <TouchableOpacity style={buttonStyle}
          accessibilityLabel="See an informative alert"
        >
            <Text style={textStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}


const styles= {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom:10
    },
    buttonStyle: {
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#007aff',
        borderRadius: 5
    }
}

export {Button};