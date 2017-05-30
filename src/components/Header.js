// import lib
import React from 'react'
import { View, Image} from 'react-native'

//make component
const Header = (props) => {
    return (
        <View style={styles.viewStyling}>
            <Image source={require('../assets/img/icon.png')} style={styles.imageStyling} />
        </View>
    );
}

const styles = {
    imageStyling:{
        marginLeft: 15, 
        width: 46,
        height:46
    },
    viewStyling: {
        flexDirection: 'row', 
        height: 60, 
        marginTop: 20, 
        elevation: 2, 
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
        marginTop:15,
        marginLeft: 15,
        color: '#000'
    }
}

//make available
export default Header;