import React from 'react'
import {Button} from 'react-native'


export function GoToButton({ navigation, screenName, longitude, latitude, restaurantIDs }) {
    return (
      <Button
        title={`Go to ${screenName}`}
        onPress={() => navigation.navigate(screenName, {longitude:longitude, latitude:latitude, restaurantIDs: restaurantIDs})}
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