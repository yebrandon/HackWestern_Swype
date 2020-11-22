import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GoBack, GoToButton } from '../functions';
import { Option } from '../Option';
import { Swiper } from 'react-native-deck-swiper';

export default class RestaurantsScreen extends React.Component {
	constructor(props) {
		this.state = {
			card: props.card,
			swipedAllCards: false,
			cardIndex: 0
		};
	}

	renderCard = (card) => {
		return <Option card={card} />;
	};

	swipedLeft = (card) => {
		this.swiper.swipeLeft();
	};

	swipedRight = (card) => {
		this.props.navigation.navigate('Chosen', { card: card });
	};

	swipedAll = () => {
		this.setState({
			swipedAllCards: true
		});
	};

	swipedTop = (card) => {
		this.props.navigation.navigate('RestaurauntInfo', { card: card });
	};

	render() {
		return (
			<View style={styles.container}>
				<Swiper
					ref={(swiper) => {
						this.swiper = swiper;
					}}
					onSwipedLeft={() => this.swipedLeft(this.state.card)}
					onSwipedRight={() => this.swipedRight(this.state.card)}
					onSwipedTop={() => this.swipedTop(this.state.card)}
					cards={this.state.card}
					cardIndex={this.state.cardIndex}
					renderCard={this.renderCard}
					onSwipedAll={this.swipedAll}
					stackSize={3}
					stackSeparation={15}
					disableBottomSwipe={true}
					infinite={true}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	card: {
		flex: 1,
		borderRadius: 4,
		borderWidth: 2,
		borderColor: '#E8E8E8',
		justifyContent: 'center',
		backgroundColor: 'white'
	}
});
