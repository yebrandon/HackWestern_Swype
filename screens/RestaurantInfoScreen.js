import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GoBack } from '../functions';

export default class RestaurantInfoScreen extends React.Component{
    render() {
        return (
         <View style={styles.container}>
            <Text>This is a restauraunt info screen</Text>
            <StatusBar style="auto" />
            <GoBack navigation = {this.props.navigation} />
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