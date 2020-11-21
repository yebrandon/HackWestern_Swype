import { apisAreAvailable } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { getCoordinates, getDistance, getRestaurants, getRestaurantData } from './api-functions.js';

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
