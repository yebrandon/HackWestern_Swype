import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GoToButton } from '../functions';

export default class CollectInfoScreen extends React.Component{
  render() {
        return (
         <View style={styles.container}>
            <Text>{this.props.navigation.state.params.longitude}</Text>
            <StatusBar style="auto" />
            <GoToButton navigation = {this.props.navigation} screenName = "Restaurants" longitude={this.props.navigation.state.params.longitude} latitude = {this.props.navigation.state.params.latitude} restaurantIDs = {this.props.navigation.state.params.restaurantIDs} />
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