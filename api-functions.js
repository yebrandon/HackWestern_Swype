import React from 'react';
import { YELP_API_KEY, GOOGLE_API_KEY } from './api-keys.json';

export async function getCoordinates() {
  const response = await fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=' + GOOGLE_API_KEY, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      considerIp: "true"
    })
  })
  const body = await response.json()
  const coordinateValues = {
    latitude: body.location.lat,
    longitude: body.location.lng
  };
  return coordinateValues
}

export async function getDistance(origin, destination) {
  //GET request
  return await fetch('https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=' + origin.latitude + ',' + origin.longitude + '&destinations=' + destination[0] + ',' + destination[1] + '&key=' + GOOGLE_API_KEY, {
    method: 'GET',
    //Request Type
  })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      //Success
      const distance = responseJson.rows[0].elements[0].duration.text;
      console.log('Distance: ' + distance);
      return distance;
    })
    //If response is not in json then in error
    .catch((error) => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });
};

export async function getRestaurants(location, longitude, latitude, radius, category, price) {
  //GET request

  var link = 'https://api.yelp.com/v3/businesses/search?term=restaurants&radius=' + radius + '&limit=50&open_now=true';
  if (location === '') {
    link = link + '&latitude=' + latitude + '&longitude' + longitude;
  } else {
    link = link + '&location=' + location;
  }
  if (category !== '') {
    link = link + '&category' + category;
  }
  if (price !== '') {
    link = link + '&price' + price;
  }
  return await fetch(link, {
    method: 'GET',
    //Request Type
    headers: {
      'Authorization': 'Bearer ' + YELP_API_KEY
    },
  })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      //Success
      const restaurants = responseJson.businesses.map((value) => value.id);
      console.log('Restaurants: ' + restaurants);
      return restaurants;
    })
    //If response is not in json then in error
    .catch((error) => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });
};

export async function getRestaurantData(id) {
  //GET request
  return await fetch('https://api.yelp.com/v3/businesses/' + id, {
    method: 'GET',
    //Request Type
    headers: {
      'Authorization': 'Bearer ' + YELP_API_KEY
    },
  })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      //Success
      const restaurantData = {
        name: responseJson.name,
        url: responseJson.url,
        phone: responseJson.display_phone,
        categories: responseJson.categories.map((values) => values.title),
        rating: responseJson.rating,
        address: responseJson.location.display_address,
        longitude: responseJson.coordinates.longitude,
        latitude: responseJson.coordinates.latitude,
        photos: responseJson.photos,
        price: responseJson.price,
        hours: responseJson.hours[0].open.map((value) => [value.start, value.end, value.day])};
      console.log('Restaurant data: ' + JSON.stringify(restaurantData));
      return restaurantData;
    })
    //If response is not in json then in error
    .catch((error) => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });
};