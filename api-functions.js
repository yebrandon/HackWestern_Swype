import React from 'react';
import { YELP_API_KEY, GOOGLE_API_KEY } from './api-keys.json';

export function getCoordinates() {
  fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=' + GOOGLE_API_KEY, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      considerIp: "true"
    })
  })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      //Success
      alert(responseJson.location.lat + " " + responseJson.location.lng);
      console.log(responseJson.location.lat, responseJson.location.lng);
    })
    //If response is not in json then in error
    .catch((error) => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });
};

export function getDistance(origin, destination) {
  //GET request
  fetch('https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=' + origin[0] + ',' + origin[1] + '&destinations=' + destination[0] + ',' + destination[1] + '&key=' + GOOGLE_API_KEY, {
    method: 'GET',
    //Request Type
  })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      //Success
      alert(responseJson.status);
      console.log(responseJson.rows[0].elements[0].duration.text);
    })
    //If response is not in json then in error
    .catch((error) => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });
};

export function getRestaurants(location) {
  //GET request
  const long = '43.6532';
  const lat = '79.3832';
  const radius = '40000';
  const category = '';
  const price = '';
  fetch('https://api.yelp.com/v3/businesses/search?term=restaurants&location=' + location + '&radius=' + radius + '&limit=50&open_now=true', {
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
      alert(responseJson.businesses[0].name);
      console.log(responseJson.businesses.map((value) => value.id));
    })
    //If response is not in json then in error
    .catch((error) => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });
};

export function getRestaurantData(id) {
  //GET request
  fetch('https://api.yelp.com/v3/businesses/' + id, {
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
      alert(responseJson.name);
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
      console.log(restaurantData);
    })
    //If response is not in json then in error
    .catch((error) => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });
};