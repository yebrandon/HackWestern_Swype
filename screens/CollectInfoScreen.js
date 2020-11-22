import React from 'react'
import {Button, Text, View, StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { GoToButton } from '../functions'
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

export default class CollectInfoScreen extends React.Component{


  render() {
        return (
         <View style={styles.container}>
            <Text>Text</Text>
            <StatusBar style="auto" />
            <GoToButton navigation = {this.props.navigation} screenName = "Restaurants" />
         </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });