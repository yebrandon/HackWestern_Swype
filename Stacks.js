import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Stacks extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header></Header>
				<View style={styles.container}>
					<View style={styles.arrows}>
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
					</View>
				</View>
				<View style={{ alignItems: 'center' }}>
					<Feather name='chevron-up' size={60} color='#666666' />
				</View>
				<Footer></Footer>
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
	arrows: {
		width: '100%',
		height: '100%',
		padding: '10%',
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		position: 'absolute'
	},
	container: {
		backgroundColor: 'orange',
		flex: 1
	}
});
