import React from 'react';
import { StyleSheet, View, Text, ImageBackground, AppRegistry, Button } from 'react-native';
import Swiper from 'react-native-swiper';
import Footer from './Footer';
import Header from './Header';
import { getRestaurantData } from '../functions/api-functions.js';

export default class Stacks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: []
		};
	}

	async componentDidMount() {
		let x;
		const cards = [];
		for (x of this.props.navigation.state.params.restaurantIDs) {
			cards.push(await getRestaurantData(x));
		}
		this.setState({ cards: cards });
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
				<Swiper
					style={styles.swiper}
					showsButtons={true}
					showsPagination={false}
				>
					{this.state.cards.map((card) => {
						return (
							<View style={styles.container}>
								<ImageBackground
									source={{ uri: card.photos[1] }}
									style={styles.image}
								>
									<View style={styles.info}>
										<Text style={styles.title}>
											{card.name}
										</Text>
										<View style={styles.row}>
											<View style={styles.column}>
												<Text style={styles.body}>
													{card.address}
												</Text>
											</View>
											<View style={styles.column}>
												<Text style={styles.metric}>
													{[
														'$',
														'$$',
														'$$$',
														'$$$$'
													].includes(card.price)
														? card.price
														: '$'}
												</Text>
												<Text style={styles.metric}>
													{card.rating} Stars
												</Text>
											</View>
										</View>
									</View>
								</ImageBackground>
								<Button
									color='black'
									title={'Choose Location'}
									onPress={() =>
										this.props.navigation.navigate(
											'Selected',
											{ card: card }
										)
									}
								/>
							</View>
						);
					})}
				</Swiper>
				<Footer goBack={this.goBack} goHome={this.goHome}></Footer>
			</View>
		);
	}
}
AppRegistry.registerComponent('myproject', () => SwiperComponent);

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	content: {
		flex: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'flex-end',
		overflow: 'hidden',
		alignItems: 'center'
	},
	text: {
		color: 'black',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	textBackground: {
		backgroundColor: '#FFFFFF',
		borderRadius: 20,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20
	},
	info: {
		height: '40%',
		width: '80%',
		padding: 10,
		backgroundColor: '#FFFFFF',
		marginBottom: 5,
		paddingBottom: 30,
		borderRadius: 20
	},
	title: {
		color: 'black',
		fontFamily: 'Raleway_400Regular',
		fontSize: 24,
		padding: 10,
		paddingBottom: 20
	},
	row: {
		flex: 1,
		flexDirection: 'row'
	},
	column: {
		flex: 1,
		marginLeft: 10
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
	swiper: {
		backgroundColor: 'white'
	}
});
