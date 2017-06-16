// import lib
import React, {Component} from 'react'
import { View, Image, TextInput, Text, TouchableOpacity} from 'react-native'
import Button from './Button';
import Hr from './partials/Hr';
import {searchStyles} from './styles'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render(){
        return (
            <View style={searchStyles.SearchContainer}>
                <View style={searchStyles.SearchSection}>
                    <Image source={require('../assets/img/location.png')} style={searchStyles.searchIcon}/>
                    <TextInput
                        style={searchStyles.SearchInput}
                        placeholder="Search"
                        ref={'searchInput'}
                        tintColor={'#ddd'}
                        autoCorrect={true}
                        clearTextOnFocus={true}
                    />
                </View>
                <View
                    style={{
                        borderBottomColor: '#ddd',
                        borderBottomWidth: 1,
                    }}>
                </View>
            </View>
        );
    }
}

export default Search;