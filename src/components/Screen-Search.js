// import lib
import React, {Component} from 'react'
import { View, Image, TextInput, Text, TouchableOpacity} from 'react-native'
import {Button, Hr} from './common'
import {searchStyles} from './styles'

import {connect} from 'react-redux'
import {GET_SEARCH_DATA} from '../config/types'

import {getSearch} from '../actions'

class Search extends Component {
    search (text){
        //this.props.searchText(text)
        this.props.getSearch(text)
        console.log("asda",text)
    }

    

    render(){
        console.log("PROPS SEARCH",this.props, "STATE", this.state)


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
                        value={this.props.text}
                        onChangeText={this.search.bind(this)}
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

const mapStateToProps = (state) => {
    console.log("searchdata",state.searchData)
    const { searchText } = state.searchData;
    return {
        //filteredItems: campgrounds.filter((campground) => campground.startsWith(searchText))
        searchText
    };
}

export default connect(mapStateToProps)(Search);