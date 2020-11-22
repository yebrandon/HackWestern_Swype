import React from 'react'
import {Button, Text, View, StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { GoToButton } from '../functions'
import { getCoordinates, getRestaurants } from '../api-functions.js'
import { GOOGLE_API_KEY } from '../api-keys.json';


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
    const restaurants = await getRestaurants()
    this.setState({restaurantIDs: restaurants})
  }




    render() {
        return (
         <View style={styles.container}>
            <Text>{this.state.latitude} - {this.state.longitude} - THIS IS SOME TEXT</Text>
            <StatusBar style="auto" />
            <GoToButton navigation = {this.props.navigation} screenName = "CollectInfo" longitude = {this.state.longitude} latitude={this.state.latitude} restaurants = {this.state.restaurantIDs}/>
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