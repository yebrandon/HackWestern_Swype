import React, { useState } from 'react';
import {
	StyleSheet,
	ScrollView,
	Text,
	View,
	Image,
	Linking
} from 'react-native';
import Header from './Header';
import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Inter_600SemiBold } from '@expo-google-fonts/inter';
import { AppLoading } from 'expo';
import Footer from './Footer';

export default class Selected extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	goBack = () => {
		this.props.navigation.goBack();
	};

	goHome = () => {
		this.props.navigation.navigate('GetStarted');
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header></Header>
				<View style={styles.imgContainer}>
					<Image
						style={styles.featured}
						source={{
							uri: this.props.navigation.state.params.card
								.photos[0]
						}}
					/>
					<View style={styles.stickerBg}>
						<Text style={styles.sticker}>Nice {'\n'}Choice!</Text>
					</View>
				</View>

				<ScrollView style={styles.container}>
					<View style={styles.info}>
						<Text style={styles.title}>
							{this.props.navigation.state.params.card.name}
						</Text>
						<View style={styles.row}>
							<View style={styles.column}>
								<Text style={styles.body}>
									{
										this.props.navigation.state.params.card
											.address
									}
								</Text>
							</View>
							<View style={styles.column}>
								<Text style={styles.metric}>
									{
										this.props.navigation.state.params.card
											.price
									}
									$
								</Text>
								<Text style={styles.metric}>
									{
										this.props.navigation.state.params.card
											.rating
									}{' '}
									Stars
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.info}>
						<Text style={styles.title}>Phone</Text>
						{/* {parseHours(data.hours)} */}
						<Text style={styles.body}>
							{this.props.navigation.state.params.card.phone}
						</Text>
						<Text
							style={styles.link}
							onPress={() =>
								Linking.openURL(
									this.props.navigation.state.params.card.url
								)
							}
						>
							View on Yelp
						</Text>
					</View>
				</ScrollView>
				<Footer goBack={this.goBack} goHome={this.goHome}></Footer>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	sticker: {
		color: 'black',
		fontFamily: 'Raleway_400Regular',
		fontSize: 64
	},
	imgContainer: {
		width: '100%',
		height: '45%'
	},
	stickerBg: {
		padding: 5,
		position: 'absolute',
		top: '10%',
		left: '5%',
		borderRadius: 30,
		backgroundColor: 'white'
	},
	featured: {
		width: '100%',
		height: 300,
		marginBottom: 5
	},
	info: {
		padding: 10,
		backgroundColor: '#FFFFFF',
		marginBottom: 5,
		paddingBottom: 30
	},
	title: {
		color: 'black',
		fontFamily: 'Raleway_400Regular',
		fontSize: 24,
		padding: 10,
		paddingBottom: 20
	},
	body: {
		color: '#777777',
		fontFamily: 'Raleway_400Regular',
		fontSize: 18,
		paddingLeft: 10
	},
	metric: {
		color: '#777777',
		fontFamily: 'Raleway_400Regular',
		fontSize: 18
	},
	row: {
		flex: 1,
		flexDirection: 'row'
	},
	column: {
		flex: 1
	},
	link: {
		color: 'blue',
		fontFamily: 'Raleway_400Regular',
		fontSize: 18,
		paddingLeft: 10
	}
});
