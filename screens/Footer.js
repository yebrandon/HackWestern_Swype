import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class Footer extends React.Component {
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
					<Text style={styles.label}>Start Over</Text>
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
		width: 85,
		borderRadius: 100
	},
	label: {
		fontFamily: 'Raleway_400Regular',
		color: 'white'
	}
});
