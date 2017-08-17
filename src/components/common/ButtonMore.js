import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

const ButtonMore = (props) => {
    return (
    <TouchableOpacity
        onPress={props.navigateTo}
        style={{position: 'absolute', right: 15}}
        >
        <Text style={{fontSize:13,paddingBottom: 10,paddingTop:10,paddingLeft:15}}>More ></Text>
    </TouchableOpacity>
    )
}

export {ButtonMore}