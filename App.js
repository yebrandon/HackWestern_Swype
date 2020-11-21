import { apisAreAvailable } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { YELP_API_KEY } from './api-keys.json';

const getRestaurants = (location) => {
  //GET request
  fetch('https://api.yelp.com/v3/businesses/search?term=restaurants&location=' + location, {
    method: 'GET',
    //Request Type
    headers: {
      'Authorization': 'Bearer ' + YELP_API_KEY
    },
  })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      //Success
      alert(responseJson.businesses[0].name);
      console.log(responseJson.businesses[0]);
    })
    //If response is not in json then in error
    .catch((error) => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });
};

const getRestaurantData = (id) => {
  //GET request
  fetch('https://api.yelp.com/v3/businesses/' + id, {
    method: 'GET',
    //Request Type
    headers: {
      'Authorization': 'Bearer ' + YELP_API_KEY
    },
  })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      //Success
      alert(responseJson.name);
      console.log(responseJson);
    })
    //If response is not in json then in error
    .catch((error) => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });
};

export default function App() {
  const location = 'Kingston, ON';
  const id = 'RT1HlvUzWzMlVNRDSHoN_Q';

  return (
    <View style={styles.container}>
      <Text>Location: {location}</Text>
      <Button title="Retrieve restaurants" onPress={getRestaurants(location)} />
      <Button title="Retrieve restaurant data" onPress={getRestaurantData(id)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
