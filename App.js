import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import GetStarted from './GetStarted';
import Stacks from './Stacks';
import Selected from './Selected';
import Expand from './Expand';

import { LogBox } from 'react-native';
/* LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications */

const MainStackScreens = createStackNavigator(
	{
		GetStarted: GetStarted,
		Stacks: Stacks,
		Selected: Selected,
		Expand: Expand
	},
	{
		initialRouteName: 'GetStarted',
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false
		}
	}
);

const AppContainer = createAppContainer(MainStackScreens);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}
