import React from 'react'
import {Button} from 'react-native'

export function GoToButton({ navigation, screenName }) {
    return (
      <Button
        title={`Go to ${screenName}`}
        onPress={() => navigation.navigate(screenName)}
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