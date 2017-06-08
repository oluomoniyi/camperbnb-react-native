import React, {Component} from 'react'
import { View, Image, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native'

class UserScreen extends Component {
    static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/img/ic_account_circle.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
    render(){
        return (
            <View>
                <Text>User page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

export default UserScreen