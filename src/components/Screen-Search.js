// import lib
import React, {Component} from 'react'
import { View, Image, TextInput, Text, TouchableOpacity} from 'react-native'
import {Button, Hr} from './common'
import {searchStyles} from './styles'

import {connect} from 'react-redux'
import reducers from '../reducers'
import {GET_SEARCH_DATA} from '../config/types'

import {getSearch,apiMiddleware} from '../actions'

class Search extends Component {

    search (searchQuery){
        //this.props
        //this.props.getSearch(text)
        console.log("i am the text", searchQuery)
        //this.props.getAllData
        this.props.apiMiddleware({ GET_SEARCH_DATA, searchQuery });
       // store.dispatch({type: GET_SEARCH_DATA, searchQuery});
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
    console.log("searchdata",state)
    return state.getAllData
}

export default connect(mapStateToProps, {apiMiddleware})(Search);