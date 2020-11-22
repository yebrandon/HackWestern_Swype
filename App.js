import React from 'react';
import { LogBox } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GetStarted from './screens/GetStarted';
import Stacks from './screens/Stacks';
import Selected from './screens/Selected';
import Expand from './screens/Expand';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
LogBox.ignoreLogs(['Error: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

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
