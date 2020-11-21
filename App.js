import { apisAreAvailable } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { YELP_API_KEY, GOOGLE_API_KEY } from './api-keys.json';

const getCoordinates = () => {
  fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=' + GOOGLE_API_KEY, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      considerIp: "true"
    })
  })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      //Success
      alert(responseJson.location.lat + " " + responseJson.location.lng);
      console.log(responseJson.location.lat, responseJson.location.lng);
    })
    //If response is not in json then in error
    .catch((error) => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });
};

const getDistance = () => {
  //GET request
  fetch('https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=' + origin[0] + ',' + origin[1] + '&destinations=' + destination[0] + ',' + destination[1] + '&key=' + GOOGLE_API_KEY, {
    method: 'GET',
    //Request Type
  })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      //Success
      alert(responseJson.status);
      console.log(responseJson.rows[0].elements[0].duration.text);
    })
    //If response is not in json then in error
    .catch((error) => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });
};

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
  const origin = [44.23615241301187, -76.5017104019393];
  const destination = [44.25669328594723, -76.572248715344];
  const location = 'Kingston, ON';
  const id = 'RT1HlvUzWzMlVNRDSHoN_Q';

  return (
    <View style={styles.container}>
      <Text>Testing</Text>
      <Button title="Retrieve restaurants" onPress={getCoordinates()} />
      <Button title="Retrieve restaurants" onPress={getDistance(origin, destination)} />
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
