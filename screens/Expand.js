import { AppLoading } from 'expo';
import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Inter_600SemiBold } from '@expo-google-fonts/inter';
import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import Footer from './Footer';
import Header from './Header';

export default function Expand() {
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

	/* const addToHours = (entry) => {
        entry.forEach((element) => {
            if (element.length == 4) {
                if (Number(element) - 1200 > 0) {
                    return (
                        (Number(element) - 1200).toString().slice(0, 1) +
                        ':' +
                        (Number(element) - 1200).toString().slice(1, 3)
                    );
                } else {
                    if (element.charAt(0) == '0') {
                        return element.slice(1, 2) + ':' + element.slice(2, 4);
                    } else {
                        return element.slice(0, 2) + ':' + element.slice(2, 4);
                    }
                }
            }
        });
    };

    const parseHours = (arr) => {
        let hoursArr = [];

            if (arr[0][2] == 0) {
                hoursArr.push(addToHours(entry));
            } else {
                hoursArr.push('CLOSED');
                hoursArr.push('CLOSED');
            }
    	

        return (
            <Text style={styles.body}>
                Mon. {hoursArr[0]} AM - {hoursArr[1]} PM{'\n'}
                Mon. {hoursArr[2]} AM - {hoursArr[3]} PM{'\n'}
                Mon. {hoursArr[4]} AM - {hoursArr[5]} PM{'\n'}
                Mon. {hoursArr[6]} AM - {hoursArr[7]} PM{'\n'}
                Mon. {hoursArr[8]} AM - {hoursArr[9]} PM{'\n'}
                Mon. {hoursArr[10]} AM - {hoursArr[11]} PM{'\n'}
                Mon. {hoursArr[12]} AM - {hoursArr[13]} PM{'\n'}
            </Text>
        );
    }; */

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
				<Image
					style={styles.featured}
					source={{ uri: data.photos[0] }}
				/>
				<Image
					style={styles.featured}
					source={{ uri: data.photos[1] }}
				/>
				<Image
					style={styles.featured}
					source={{ uri: data.photos[2] }}
				/>
			</ScrollView>
			<Footer></Footer>
		</View>
	);
}

const styles = StyleSheet.create({
	imgContainer: {
		width: '100%',
		height: '45%'
	},
	featured: {
		width: '100%',
		height: 300,
		marginBottom: 5
	},
	info: {
		padding: 10,
		backgroundColor: '#F1504E',
		marginBottom: 5,
		paddingBottom: 30
	},
	button: {
		color: 'white',
		alignItems: 'center',
		backgroundColor: '#902F2F',
		padding: 10,
		width: 75,
		borderRadius: 100
	},
	title: {
		color: 'white',
		fontFamily: 'Raleway_400Regular',
		fontSize: 24,
		padding: 10,
		paddingBottom: 20
	},
	body: {
		color: 'white',
		fontFamily: 'Raleway_400Regular',
		fontSize: 18,
		paddingLeft: 10
	},
	metric: {
		color: 'white',
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
