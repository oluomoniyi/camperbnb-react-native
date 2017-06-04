//code in here


// import library to help create a component
import React from 'react';
import { AppRegistry} from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import FadeInView from './src/components/FadeIn'
import Hr from './src/components/partials/Hr'
import ItemList from './src/components/ItemList';
import Avatar from './src/components/Avatar';

const SideMenu = require('react-native-side-menu');

//create a component
const App = () => (
  <FadeInView style={{width: null, height: 400, flex:1}}>
    <Header headerText={'Camperbnb'}/>
    <Hr/>
    {/*<Search></Search>*/}
    <ItemList></ItemList>
    <Avatar></Avatar>
  </FadeInView>
);

class Application extends React.Component {
  render() {
    const menu = <Menu navigator={navigator}/>;

    return (
      <SideMenu menu={menu}>
        <ContentView/>
      </SideMenu>
    );
  }
}



//render it to the device
AppRegistry.registerComponent('camperbnb', () => App);
