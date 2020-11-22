import { YELP_API_KEY, GOOGLE_API_KEY } from './api-keys.json';

export async function getCoordinates() {
	const response = await fetch(
		'https://www.googleapis.com/geolocation/v1/geolocate?key=' +
			GOOGLE_API_KEY,
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				considerIp: 'true'
			})
		}
	);
	const body = await response.json();
	const coordinateValues = {
		latitude: body.location.lat,
		longitude: body.location.lng
	};
	return coordinateValues;
}

export async function getDistance(origin, destination) {
	const response = await fetch(
		'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=' +
			origin.latitude +
			',' +
			origin.longitude +
			'&destinations=' +
			destination[0] +
			',' +
			destination[1] +
			'&key=' +
			GOOGLE_API_KEY,
		{
			method: 'GET'
		}
	);
	const body = await response.json();
	const distance = body.rows[0].elements[0].duration.text;
	return distance;
}

export async function getRestaurants(
	location,
	longitude,
	latitude,
	radius,
	category,
	price
) {
	var link =
		'https://api.yelp.com/v3/businesses/search?term=restaurants&radius=' +
		radius +
		'&limit=50&open_now=true';
	if (location === '') {
		link = link + '&latitude=' + latitude + '&longitude=' + longitude;
	} else {
		link = link + '&location=' + location;
	}
	if (category !== '') {
		link = link + '&category=' + category;
	}
	if (price !== '') {
		link = link + '&price=' + price;
	}
	const response = await fetch(link, {
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + YELP_API_KEY
		}
	});
	const body = await response.json();
	const restaurants = body.businesses.map((value) => value.id);
	return restaurants;
}

export async function getRestaurantData(id) {
	const response = await fetch('https://api.yelp.com/v3/businesses/' + id, {
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + YELP_API_KEY
		}
	});
	const body = await response.json();
	const restaurantData = {
		name: body.name,
		url: body.url,
		phone: body.display_phone,
		categories: body.categories,
		rating: body.rating,
		address: body.location.display_address.join(' '),
		longitude: body.coordinates.longitude,
		latitude: body.coordinates.latitude,
		photos: body.photos,
		price: body.price,
		hours: body.hours[0].open.map((value) => [
			value.start,
			value.end,
			value.day
		])
	};
	return restaurantData;
}