import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Inter_600SemiBold } from '@expo-google-fonts/inter';
import { AppLoading } from 'expo';

export default class Footer extends React.Component {
	/* 	let [fontsLoaded] = useFonts({
		Raleway_400Regular,
		Inter_600SemiBold
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} */

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.footer}>
				<TouchableOpacity
					delayPressIn={0}
					style={styles.button}
					onPress={this.props.goBack}
				>
					<Text style={styles.label}>Back</Text>
				</TouchableOpacity>
				<TouchableOpacity
					delayPressIn={0}
					style={styles.button}
					onPress={this.props.goHome}
				>
					<Text style={styles.label}>Home</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	footer: {
		height: '10%',
		flexDirection: 'row',
		backgroundColor: '#F1504E',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	button: {
		color: 'white',
		alignItems: 'center',
		backgroundColor: '#902F2F',
		padding: 10,
		width: 75,
		borderRadius: 100
	},
	label: {
		//fontFamily: 'Raleway_400Regular',
		color: 'white'
	}
});
