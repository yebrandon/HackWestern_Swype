import React from 'react'
import {Button, Text, View, StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { GoToButton } from '../functions'

export default class CollectInfoScreen extends React.Component{
    render() {
        return (
         <View style={styles.container}>
            <Text>This is a info screen</Text>
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