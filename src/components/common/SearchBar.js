//https://stackoverflow.com/questions/40342381/react-redux-create-a-search-filter

import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {search} from './actions';
import {GET_SEARCH_DATA} from '../config/types'

class SearchBar extends Component {
  render() {
    const {search, value} = this.props;

    return (
        <View>
            <TextInput
                style={this.props.style}
                placeholder="Search"
                ref={'searchInput'}
                tintColor={'#ddd'}
                autoCorrect={true}
                clearTextOnFocus={true}
                value={this.props.text}
                onChangeText={this.search.bind(this)}
            />
            
            
            <input
              className="form-control"
              placeholder = "Procurar Trabalho"
              onChange={(e) => search(e.target.value)}
              value={value} />
         </View>
    );
  }
} 

function mapStateToProps({works}) {
  return {value: works.value};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({search}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);