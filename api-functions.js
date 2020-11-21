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
  fetch('https://api.yelp.com/v3/businesses/search?term=restaurants&location=' + location, {
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
      console.log(responseJson.businesses[0]);
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
      console.log(responseJson);
    })
    //If response is not in json then in error
    .catch((error) => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });
};