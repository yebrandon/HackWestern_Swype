import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default class ChosenScreen extends React.Component{
    render() {
        return (
         <View style={styles.container}>
            <Text>This is a chosen screen</Text>
            <StatusBar style="auto" />
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