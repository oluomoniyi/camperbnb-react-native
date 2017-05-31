import React , {Component} from 'react';
import { ScrollView, View} from 'react-native';
import ItemDetail from './ItemDetail';

import ItemListHeader from './partials/ItemListHeader'
import ItemListHeaderMini from './partials/ItemListHeaderMini'
import Hr from './partials/Hr'

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
            this.setState ({items: responseData.campgrounds.slice(0,5)})  
        })
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });
    }

    renderItems(){
        return this.state.items.map(item => 
            <View>
                <ItemDetail key={item.name} item = {item}/>
            </View> 
        );
    }
    
    render () {
        return (
            <ScrollView scrollsToTop={false}>
                <Hr/>
                <ItemListHeader>{'Campgrounds'}</ItemListHeader>
                <ItemListHeaderMini>There are {this.state.items.length} available campgrounds</ItemListHeaderMini>
                {this.renderItems()}
            </ScrollView>
        );
    }
}

export default ItemList;