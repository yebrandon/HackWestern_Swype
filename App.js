import { apisAreAvailable } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, TouchableOpacity, View } from 'react-native';
import { YELP_API_KEY } from './api-keys.json';

const getYelpData = () => {
  //GET request
  fetch('https://api.yelp.com/v3/businesses/search?term=restaurants&location=kingston_ontario', {
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
      alert(JSON.stringify(responseJson));
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
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Retrieve sample data" onPress={getYelpData} />
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
