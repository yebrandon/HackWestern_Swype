import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import TitleScreen from './screens/TitleScreen';
import CollectInfoScreen from './screens/CollectInfoScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import ChosenScreen from './screens/ChosenScreen';
import RestaurantInfoScreen from './screens/RestaurantInfoScreen';

import GetStarted from './GetStarted';
import Stacks from './Stacks';
import Selected from './Selected';
import Expand from './Expand';
import Footer from './Footer';

const RestaurantStackScreens = createStackNavigator(
	{
		GetStarted: GetStarted,
		Stacks: Stacks,
		Selected: Selected,
		Expand: Expand,
		Footer: Footer
	},
	{
		initialRouteName: 'GetStarted',
		navigationOptions: {
			gestureEnabled: true,
			gestureDirection: 'horizontal',
			headerTintColor: '#a41034',
			headerStyle: {
				backgroundColor: '#fff'
			}
		}
	}
);

const MainStackScreens = createStackNavigator(
	{
		GetStarted: GetStarted,
		Stacks: Stacks,
		Selected: Selected,
		Expand: Expand
		/* 		//Title: TitleScreen,
		CollectInfo: CollectInfoScreen,
		Chosen: ChosenScreen,
		Restaurant: RestaurantStackScreens */
	},
	{
		initialRouteName: 'GetStarted'
	}
);

const AppContainer = createAppContainer(MainStackScreens);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}
