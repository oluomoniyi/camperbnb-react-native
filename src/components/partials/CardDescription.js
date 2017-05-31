import React from 'react';
import { Text, View} from 'react-native';

const CardDescription = (props) => {
    return (
        <View>
            <Text style={styles.CardDescriptionStyle}>{props.children.substr(0,props.characterLimit)}</Text>
            {(props.children.length > props.characterLimit) ? <Text>...</Text> : null}
        </View>  
    )
}

const styles = {
    CardDescriptionStyle:{
        color: '#666666',
        fontSize: 12
    }
}

export default CardDescription; 