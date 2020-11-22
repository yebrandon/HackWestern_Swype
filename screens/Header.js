import { AppLoading } from 'expo';
import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Inter_600SemiBold } from '@expo-google-fonts/inter';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Stacks() {
	let [fontsLoaded] = useFonts({
		Raleway_400Regular,
		Inter_600SemiBold
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<View>
			<View style={styles.padding}></View>
			<View style={styles.header}>
				<Image
					style={styles.image}
					source={require('../assets/logo.png')}
				/>
			</View>
			<View style={styles.formContainer}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 60,
		backgroundColor: 'white',
		alignItems: 'center'
	},
	formContainer: {
		alignItems: 'center'
	},
	title: {
		fontSize: 30,
		fontFamily: 'Inter_600SemiBold'
	},
	image: {
		flex: 1,
		width: '40%',
		resizeMode: 'contain'
	},
	back: {
		flex: 1,
		position: 'absolute',
		top: '30%',
		left: '10%',
		color: 'black',
		fontFamily: 'Raleway_400Regular'
	},
	padding: {
		backgroundColor: 'grey',
		height: 25
	}
});
