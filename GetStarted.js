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
import { getCoordinates, getRestaurants } from './api-functions.js';

export default class GetStarted extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			longitude: 0,
			latitude: 0,
			restaurantIDs: [],
			location: '',
			cuisine: '',
			price: ''
		};
	}

	async componentDidMount() {
		const coordinates = await getCoordinates();
		this.setState({ longitude: coordinates.longitude });
		this.setState({ latitude: coordinates.latitude });
		const restaurants = await getRestaurants(
			this.state.location,
			coordinates.longitude,
			coordinates.latitude,
			40000,
			this.state.cuisine,
			this.state.price
		);
		this.setState({ restaurantIDs: restaurants });
	}

	async reSearch() {
		const coordinates = await getCoordinates();
		this.setState({ longitude: coordinates.longitude });
		this.setState({ latitude: coordinates.latitude });
		const restaurants = await getRestaurants(
			this.state.location,
			coordinates.longitude,
			coordinates.latitude,
			40000,
			this.state.cuisine,
			this.state.price
		);
		this.setState({ restaurantIDs: restaurants });
		console.log(this.state);
	}

	onPress = async () => {
		await this.reSearch();
		this.props.navigation.navigate('Stacks', {
			longitude: this.state.longitude,
			latitude: this.state.latitude,
			restaurantIDs: this.state.restaurantIDs
		});
	};

	render() {
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
									this.setState({ location: text });
								}}
								value={this.state.location}
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
									this.setState({ cuisine: text });
								}}
								value={this.state.cuisine}
							></TextInput>
						</View>
						<Text style={styles.label}>Price </Text>
						<View style={styles.input}>
							<Picker
								selectedValue={this.state.price}
								onValueChange={(itemValue, itemIndex) =>
									this.setState({ price: itemValue })
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
								onPress={this.onPress}
							>
								<Text style={styles.submitLabel}>Go</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		height: 150,
		padding: 50
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
		borderRadius: 30,
		borderColor: 'black',
		borderWidth: 2
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
