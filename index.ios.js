//code in here


// import library to help create a component
import React from 'react';
import { AppRegistry} from 'react-native';
import Header from './src/components/Header';
import ItemList from './src/components/ItemList';
import FadeInView from './src/components/FadeIn'
import Search from './src/components/Search'
import Hr from './src/components/partials/Hr'

//create a component
const App = () => (
  <FadeInView style={{width: null, height: 400, flex:1}}>
    <Header headerText={'Camperbnb'}/>

    <Hr/>

    <Search></Search>

    <Hr/>

    {/*<ItemList></ItemList>*/}
  </FadeInView>
);


//render it to the device
AppRegistry.registerComponent('camperbnb', () => App);
