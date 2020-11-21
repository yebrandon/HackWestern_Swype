import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import TitleScreen from './screens/TitleScreen'
import CollectInfoScreen from './screens/CollectInfoScreen'
import RestaurantsScreen from './screens/RestaurantsScreen'
import ChosenScreen from './screens/ChosenScreen'
import RestaurantInfoScreen from './screens/RestaurantInfoScreen'

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

