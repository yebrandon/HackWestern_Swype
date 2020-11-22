import React, { useState } from 'react';
import {
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
	ScrollView
} from 'react-native';
import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Inter_600SemiBold } from '@expo-google-fonts/inter';
import { AppLoading } from 'expo';
import { Picker } from '@react-native-picker/picker';

export default function GetStarted() {
	const [location, setLocation] = useState(null);
	const [cuisine, setCuisine] = useState(null);
	const [price, setPrice] = useState(1);

	let [fontsLoaded] = useFonts({
		Raleway_400Regular,
		Inter_600SemiBold
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	const onPress = () => {
		console.log(location);
		console.log(cuisine);
		console.log(price);
	};

	return (
		<View>
			<View style={styles.header}>
				<Text style={styles.title}>Get {'\n'}Started </Text>
			</View>
			<View style={styles.formContainer}>
				<View style={styles.form}>
					<Text style={styles.label}>Location </Text>
					<View style={styles.input}>
						<TextInput
							style={{
								height: '100%',
								left: 10
							}}
							onChangeText={(text) => {
								setLocation(text);
							}}
							value={location}
						></TextInput>
					</View>
					<Text style={styles.label}>Cuisine </Text>
					<View style={styles.input}>
						<TextInput
							style={{
								height: '100%',
								left: 10
							}}
							onChangeText={(text) => {
								setCuisine(text);
							}}
							value={cuisine}
						></TextInput>
						{/* 						<Picker
							selectedValue={cuisine}
							onValueChange={(itemValue, itemIndex) =>
								setCuisine(itemValue)
							}
						>
							<Picker.Item label='Chinese' value='chinese' />
							<Picker.Item label='Sushi' value='sushi' />
							<Picker.Item label='Mexican' value='mexican' />
						</Picker> */}
					</View>
					<Text style={styles.label}>Price </Text>
					<View style={styles.input}>
						<Picker
							selectedValue={price}
							onValueChange={(itemValue, itemIndex) =>
								setPrice(itemValue)
							}
						>
							<Picker.Item label='$' value='1' />
							<Picker.Item label='$$' value='2' />
							<Picker.Item label='$$$' value='3' />
							<Picker.Item label='$$$$' value='4' />
						</Picker>
					</View>

					<View style={styles.submit}>
						<TouchableOpacity
							style={styles.button}
							onPress={onPress}
						>
							<Text style={styles.submitLabel}>Go</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 150,
		padding: 50,
		backgroundColor: 'white'
	},
	formContainer: {
		alignItems: 'center'
	},
	title: {
		fontSize: 30,
		fontFamily: 'Inter_600SemiBold'
	},
	form: {
		height: 400,
		width: '80%',
		padding: 30,
		backgroundColor: '#F1504E',
		borderRadius: 30
	},
	input: {
		height: 50,
		width: 200,
		color: 'white',
		borderColor: '#E8E8E8',
		borderWidth: 1,
		borderRadius: 100,
		marginBottom: 20,
		backgroundColor: '#F9F9F9'
	},
	label: {
		fontSize: 16,
		fontFamily: 'Raleway_400Regular',
		color: 'white',
		paddingBottom: 10
	},
	pressableText: {
		fontSize: 36,
		fontFamily: 'Raleway_400Regular',
		paddingBottom: 10
	},
	buttons: {
		flexDirection: 'row',
		paddingBottom: 20
	},
	button: {
		color: 'white',
		alignItems: 'center',
		backgroundColor: '#902F2F',
		padding: 10,
		width: 75,
		borderRadius: 100
	},
	submitLabel: {
		fontSize: 16,
		fontFamily: 'Raleway_400Regular',
		color: 'white'
	},
	submit: {
		alignItems: 'flex-end',
		paddingTop: 10
	}
});
