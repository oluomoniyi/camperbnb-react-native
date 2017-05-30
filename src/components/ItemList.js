import React , {Component} from 'react';
import { ScrollView, Text} from 'react-native';
import ItemDetail from './ItemDetail';

import ItemListHeader from './partials/ItemListHeader'
import ItemListHeaderMini from './partials/ItemListHeaderMini'
import Hr from './partials/Hr'

class ItemList extends Component {
    state = { items: []};

    componentWillMount(){
            fetch ('https://camperbnb.herokuapp.com/api/search')
            .then ((response) => response.json ())
            .then ((responseData) => {
            this.setState ({items: responseData})
        })
    }

    renderItems(){
        return this.state.items.map(item => 
            <ItemDetail key={item.name} item = {item}/>
        );
    }
    
    render () {
        return (
            <ScrollView>
                <Hr/>
                <ItemListHeader>{'Campgrounds'}</ItemListHeader>
                <ItemListHeaderMini>There are {this.state.items.count} available campgrounds</ItemListHeaderMini>
                {this.renderItems()}
            </ScrollView>
        );
    }
}

export default ItemList;