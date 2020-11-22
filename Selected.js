import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import Header from './Header';
import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Inter_600SemiBold } from '@expo-google-fonts/inter';
import { AppLoading } from 'expo';
import Footer from './Footer';

export default function Selected() {
	const [data, setData] = useState({
		name: 'Gangnam Style',
		url:
			'https://www.yelp.com/biz/gangnam-style-kingston?adjust_creative=kHuG1-KxYiDcv_WqOYzukw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=kHuG1-KxYiDcv_WqOYzukw',
		phone: '+1 613-531-6087',
		categories: ['Korean'],
		rating: 4.5,
		address: ['337 Princess St', 'Kingston, ON K7L 3J4', 'Canada'],
		longitude: -76.48988,
		latitude: 44.23286,
		photos: [
			'https://s3-media4.fl.yelpcdn.com/bphoto/Hh-lVMBwVqo7uHgO78HAqw/o.jpg',
			'https://s3-media3.fl.yelpcdn.com/bphoto/ZlZ-qqFrgnySwWd3dbTFUg/o.jpg',
			'https://s3-media4.fl.yelpcdn.com/bphoto/y7XLAE28vangMbl97XS5YQ/o.jpg'
		],
		price: '$$',
		hours: [
			['1130', '2100', 0], //Monday
			['1130', '2100', 2],
			['1130', '2100', 3],
			['1130', '2200', 4],
			['1130', '2200', 5],
			['1200', '2000', 6]
		]
	});

	let [fontsLoaded] = useFonts({
		Raleway_400Regular,
		Inter_600SemiBold
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<View style={{ flex: 1 }}>
			<Header></Header>
			<View style={styles.imgContainer}>
				<Image
					style={styles.featured}
					source={{ uri: data.photos[0] }}
				/>
				<View style={styles.stickerBg}>
					<Text style={styles.sticker}>Nice {'\n'}Choice!</Text>
				</View>
			</View>

			<ScrollView style={styles.container}>
				<View style={styles.info}>
					<Text style={styles.title}>{data.name}</Text>
					<View style={styles.row}>
						<View style={styles.column}>
							<Text style={styles.body}>
								{data.categories[0]}
							</Text>
							<Text style={styles.body}>{data.address[0]}</Text>
						</View>
						<View style={styles.column}>
							<Text style={styles.metric}>{data.price}</Text>
							<Text style={styles.metric}>
								{data.rating} Stars
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.info}>
					<Text style={styles.title}>Phone</Text>
					{/* {parseHours(data.hours)} */}
					<Text style={styles.body}>{data.phone}</Text>
				</View>
			</ScrollView>
			<Footer></Footer>
		</View>
	);
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
	}
});
