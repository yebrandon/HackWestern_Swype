import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetStarted from './GetStarted';
import Stacks from './Stacks';
import Selected from './Selected';
import Expand from './Expand';

export default function App() {
	return <Selected></Selected>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
