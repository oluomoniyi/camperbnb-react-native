import React from 'react';
import { Text, View} from 'react-native';

const TextLimit = (props) => {
    return (
        <View>
            <Text style={props.style}>{props.children.substr(0,props.characterLimit)}</Text>
            {(props.children.length > props.characterLimit) ? <Text>...</Text> : null}
        </View>  
    )
}

export default TextLimit; 