// import lib
//https://stackoverflow.com/questions/40342381/react-redux-create-a-search-filter
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
        //this.props.getSearch({value, prop });
        //store.dispatch({type: GET_SEARCH_DATA, searchQuery});
    }

    render(){
        console.log("All props",this.props, "App State", this.state)
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
    //console.log("getAllData state.getAllData.camprgounds",state.getAllData)
    const datamap = function () {
        return JSON.parse(state.getAllData.camprgounds).filter((campground) => {
            return campground.location == 'England'
        })
    }
    console.log("DataMap",datamap())

    return {
        data:state.getAllData,
        //datamap
        // campgroundsSearch () {
        //     return state.getAllData.camprgounds.filter((campground) => {
        //         return campground.location == 'England'
        //     })
        // } 
    }
        
    // state.getAllData.camprgounds.filter((campground) => {
    //     return campground.location == 'England'
    // })
}

export default connect(mapStateToProps)(Search);