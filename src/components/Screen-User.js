import React, {Component} from 'react'
import { View, Image, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Hr from './partials/Hr'
import TextLimit from './partials/TextLimit'
import {defaultStyles} from './styles'

import Avatar from './partials/Avatar';
// import { Icon } from 'react-native-material-design';

class UserScreen extends Component {
  
    static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/img/ic_account_circle.png')}
        style={[{tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
    <View style={styles.container}>
        <View style={styles.userDetail}>
          <View style={styles.circle}>
                <Image source={require('../assets/img/image.png')} style={{width:120, height:120}} />
          </View>
          <Text style={styles.ItemListHeader}>
              Harry Potter
          </Text>
        </View>

        <TouchableOpacity style={styles.NavContainer}>
          <View style={styles.NavItem}>
            <Text>My Campgrounds</Text>
          </View>
          <Image source={require('../assets/img/ic_view_quilt_2x.png')} style={styles.NavIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.NavContainer}>
          <View style={styles.NavItem}>
            <Text>Add a new Campground</Text>
          </View>
          <Image source={require('../assets/img/ic_add_2x.png')} style={styles.NavIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.NavContainer}>
          <View style={styles.NavItem}>
            <Text>Logout</Text>
          </View>
          <Image source={require('../assets/img/ic_exit_to_app_2x.png')} style={styles.NavIcon} />
        </TouchableOpacity>
        
        <Avatar imageURI={require('../assets/img/edit.png')}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    NavContainer: {
      flexDirection: 'row',
      borderBottomColor: '#ddd',
      borderBottomWidth: 0.5,
    },
    NavItem: {
        flex: 1, 
        marginLeft: 15,
        paddingBottom:20,
        paddingTop:20,
    },
    NavItemText: {
        ...defaultStyles.text,
    },
    NavIcon: {
        width: 40,
        height: 40,
        alignSelf:'flex-end',
        justifyContent:'flex-end',
        marginBottom:10,
        tintColor:'#888'
    },
    ItemListHeader:{
        fontSize: 23,
        marginBottom:5,
        fontWeight:'bold',
        ...defaultStyles.text,
        color: '#000',
        marginTop: 20,
        width:null,
    },
    container:{
        marginTop:40,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flex: 1,
    },
    userDetail:{
      alignSelf:'center',
      justifyContent:'center',
    },
    circle: {
        width: 120,
        height: 120,
        borderRadius: 120/2,
        shadowColor:'#000',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity:0.4,
        shadowRadius:1.5, 
        overflow:'hidden'
    }
});

export default UserScreen;