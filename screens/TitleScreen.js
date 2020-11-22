import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GoToButton } from '../functions';
import { getCoordinates, getRestaurants } from '../api-functions.js';

export default class TitleScreen extends React.Component{
  state = {
    longitude: 0,
    latitude: 0,
    restaurantIDs: []
  }
  async componentDidMount(){
    const coordinates = await getCoordinates()
    this.setState ({longitude: coordinates.longitude})
    this.setState ({latitude: coordinates.latitude})
    const restaurants = await getRestaurants('',coordinates.longitude,coordinates.latitude, 40000, "","")
    this.setState({restaurantIDs: restaurants})
  }




    render() {
        return (
         <View style={styles.container}>
            <Text>{this.state.restaurantIDs[0]} - THIS IS SOME TEXT</Text>
            <StatusBar style="auto" />
            <GoToButton navigation = {this.props.navigation} screenName = "CollectInfo" longitude = {this.state.longitude} latitude={this.state.latitude} restaurantIDs = {this.state.restaurantIDs}/>
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