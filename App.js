import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import TitleScreen from './screens/TitleScreen'
import CollectInfoScreen from './screens/CollectInfoScreen'
import RestaurantsScreen from './screens/RestaurantsScreen'
import ChosenScreen from './screens/ChosenScreen'
import RestaurantInfoScreen from './screens/RestaurantInfoScreen'
import { apisAreAvailable } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { getCoordinates, getDistance, getRestaurants, getRestaurantData } from './api-functions.js';

export default function App() {
  const [coordinates, setCoordinates] = useState();
  const destination = [44.25669328594723, -76.572248715344];
  const location = 'Toronto, ON';
  const id = 'RT1HlvUzWzMlVNRDSHoN_Q';
  const radius = '40000';
  const category = '';
  const price = ''

  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <Button title="Get coordinates" onPress={async () => {
        setCoordinates(await getCoordinates());
        alert('Latitude: ' + coordinates.latitude + '\nLongitude: ' + coordinates.longitude);
      }} />
      <Button title="Get distance" onPress={async () => {
        const distance = await getDistance(coordinates, destination);
        alert('Distance: ' + distance);
      }} />
      <Button title="Get restaurants" onPress={async () => {
        const restaurants = await getRestaurants(location, coordinates.longitude, coordinates.latitude, radius, category, price);
        alert('Restaurants: ' + restaurants);
      }} />
      <Button title="Get restaurant data" onPress={async () => {
        const restaurantData = await getRestaurantData(id);
        alert('Restaurant data: ' + JSON.stringify(restaurantData));
      }} />
      <StatusBar style="auto" />
    </View>
  );
}


const RestaurantStackScreens = createStackNavigator(
  {
    Restaurants: RestaurantsScreen,
    RestaurantInfo: RestaurantInfoScreen,
    CollectInfo: CollectInfoScreen,
  },
  {
    initialRouteName: 'Restaurants',
    navigationOptions: {
      gestureEnabled: true,
      gestureDirection: "horizontal",
      headerTintColor: '#a41034',
      headerStyle: {
        backgroundColor: '#fff',
      },

    },
  }
)

const MainStackScreens = createStackNavigator(
  {
    Title: TitleScreen,
    CollectInfo: CollectInfoScreen,
    Chosen: ChosenScreen,
    Restaurant: RestaurantStackScreens,
  },
  {
    initialRouteName: 'Title'
  }
)



const AppContainer = createAppContainer(MainStackScreens);

export default class App extends React.Component {
  render (){
    return(
      <AppContainer />
    );
  }
}

