import axios from 'axios';

const yelpAPI = axios.create({
    baseURL: 'https://api.yelp.com/v3',
    timeout: 1000,
    headers: { Authorization: 'Bearer ' }
});

export default yelpAPI;
