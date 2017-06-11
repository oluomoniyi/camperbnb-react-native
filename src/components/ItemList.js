import React , {Component} from 'react';
import { ScrollView, View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import ItemDetail from './ItemDetail';

import Hr from './partials/Hr'

import Loader from './Loading'

class ItemList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { items: []};
    // }
    state = { items: []};

    componentWillMount(){
        fetch ('https://camperbnb.herokuapp.com/api/search/')
        .then ((response) => response.json ())
        .then ((responseData) => {
            this.setState ({items: responseData.campgrounds.slice(0,20)})  
        })
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            throw error;
        });
    }

    renderItems(){
        return this.state.items.map(item => 
            <ItemDetail key={item._id} item = {item}/>
        );
    }
    
    render () {
        return (
            <ScrollView scrollsToTop={false}>
                <Hr/>
                <Text style={styles.ItemListHeader}>{this.state.items.length} available campgrounds</Text>
                {this.renderItems()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    ItemListHeader:{
        fontSize: 23,
        marginLeft: 15,
        marginBottom:5,
        fontWeight:'bold',
        fontFamily: 'Iowan Old Style',
        color: '#000',
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
});

export default ItemList;