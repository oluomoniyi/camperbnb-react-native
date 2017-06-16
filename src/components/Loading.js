import React, { Component } from 'react';
import {
   ActivityIndicator,
   View,
   StyleSheet
} from 'react-native';

export default ActivityIndicatorExample = (props) => {
   return (
      <View style = {styles.container}>
         <ActivityIndicator animating = {props.animating}
           style = {styles.activityIndicator} size = "large"
         />
      </View>
   );
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
   },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
});