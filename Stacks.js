import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	ImageBackground,
	AppRegistry,
	Button
} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { getRestaurantData } from './api-functions';
import Swiper from 'react-native-swiper';

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

	buildDeck = () => {
		this.props.navigation.state.params.restaurantIDs.map(async (id) => {
			let value = await getRestaurantData(id);
			console.log(value);
			//this.setState({ data: [...this.state.data, value] }); //simple value
		});
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header></Header>
				{/* //<View style={styles.container}>  */}
				<Swiper
					//style={styles.wrapper}
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
									<View style={styles.textBackground}>
										<Text style={styles.text}>
											{card.name}
										</Text>
										<Text style={styles.text}>
											{card.price}$
										</Text>
										<Text style={styles.text}>
											{card.address}
										</Text>
										<Text style={styles.text}>
											{card.rating}/5
										</Text>
									</View>
								</ImageBackground>
								<Button
									title={'Confirm Location'}
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

				{/* <View style={styles.arrows}>
						<View
							style={{
								backgroundColor: 'white',
								borderRadius: 30
							}}
						>
							<MaterialCommunityIcons
								name='window-close'
								size={50}
								color='red'
							/>
						</View>
						<View
							style={{
								backgroundColor: 'white',
								borderRadius: 30
							}}
						>
							<MaterialCommunityIcons
								name='check'
								size={50}
								color='green'
							/>
						</View>
					</View> */}
				{/* </View> */}

				<Footer goBack={this.goBack} goHome={this.goHome}></Footer>
			</View>
		);
	}
}
AppRegistry.registerComponent('myproject', () => SwiperComponent);

const styles = StyleSheet.create({
	footer: {
		height: '10%',
		flexDirection: 'row',
		backgroundColor: '#F1504E',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	container: {
		backgroundColor: 'orange',
		flex: 1
	},
	card: {
		width: 320,
		height: 420,
		backgroundColor: '#FE474C',
		borderRadius: 5,
		shadowColor: 'rgba(0,0,0,0.5)',
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.5
	},
	card1: {
		backgroundColor: '#FE474C'
	},
	card2: {
		backgroundColor: '#FEB12C'
	},
	content: {
		flex: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	arrows: {
		width: '100%',
		height: '100%',
		padding: '10%',
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		position: 'absolute',
		zIndex: 10
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'flex-end',
		overflow: 'hidden',
		borderRadius: 20
	},
	text: {
		color: 'black',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	textBackground: {
		backgroundColor: '#FFFFFF',
		borderRadius: 40,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20
	}
});
