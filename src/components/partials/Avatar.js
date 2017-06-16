import React from 'react'
import {TouchableOpacity, Image} from 'react-native'

const Avatar = (props) => {
    return (
        <TouchableOpacity style={styles.circle}>
            <Image source={props.imageURI}
                style={{width: 30, height: 30}}/>
        </TouchableOpacity>
    )
}

const styles={
    circle: {
        width: 50,
        height: 50,
        borderRadius: 100/2,
        backgroundColor: 'rgba(231, 76, 60, 0.95)',
        position: 'absolute',
        bottom: 15,
        right: 15,
        shadowColor:'#000',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity:0.4,
        shadowRadius:1.5,
        justifyContent:'center',
        alignItems:'center'
    }
}

export default Avatar;