// import lib
import React, {Component} from 'react'
import { View, Image, Text} from 'react-native'

class Header extends Component {
    clearText(fieldName) {
        this.refs[fieldName].setNativeProps({text: ''});
    }
    
    render(){
        return (
            <View style={styles.viewStyling}>
                <Image source={require('../assets/img/icon.png')} style={styles.imageStyling} />
            </View>
        );
    }
}

const styles = {
    SearchInput: {height: 40, 
        width:null, flex: 1,
        backgroundColor:'#e87a6f', 
        marginTop:10, 
        marginLeft:15,
        marginRight:15, 
        padding:5, 
        color:'#fff'},
    buttonStyle: {
        borderWidth: 1,
        borderColor: '#e87a6f',
        borderRadius: 5,
        backgroundColor: '#e78b90',
        marginTop:10,
        height:40
    },
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
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export default Header;