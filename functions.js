import React from 'react'
import {Button} from 'react-native'


export function GoToButton({ navigation, screenName, longitude, latitude, restaurants }) {
    return (
      <Button
        title={`Go to ${screenName}`}
        onPress={() => navigation.navigate(screenName, {longitude: longitude, latitude: latitude, restauraunts:restaurants})}
      />
    );
}

export function GoBack({ navigation}) {
    return (
      <Button
        title={`Go Back`}
        onPress={() => navigation.goBack()}
      />
    );
}