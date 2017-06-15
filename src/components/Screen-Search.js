// import lib
import React, {Component} from 'react'
import { View, Image, TextInput, Text, TouchableOpacity} from 'react-native'
import Button from './Button';

class Search extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {text: ''};
    // } will add state later

    static navigationOptions = {
        tabBarLabel: '',
        tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../assets/img/ic_search.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
        ),
    };

    clearText(fieldName) {
        this.refs[fieldName].setNativeProps({text: ''});
    }
    
    render(){
        return (
            <View>
                <View style={styles.SearchContainer}>
                    {/*<Image source={require('../assets/img/icon.png')} style={styles.imageStyling} />*/}
                    <TextInput
                    style={styles.SearchInput}
                    placeholder="Search By Location"
                    ref={'searchInput'}
                    tintColor={'white'}
                    />
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.clearText('searchInput')} 
                    accessibilityLabel="See an informative alert"
                    >
                        <Text style={styles.textStyle}>
                            Clear
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    SearchContainer: {backgroundColor:'#e74c3c'},
    SearchInput: {height: 40, backgroundColor:'#e87a6f', marginTop:10, marginLeft:15,marginRight:15, padding:5, color:'#fff'},
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize:12,
        paddingTop: 10,
        paddingBottom:10
    },
    buttonStyle: {
        borderWidth: 1,
        borderColor: '#e87a6f',
        borderRadius: 5,
        marginLeft:15,
        marginRight:15,
        marginTop:10,
        backgroundColor: '#e78b90'
    }
    
}

export default Search;