import axios from 'axios';

const yelpAPI = axios.create({
    baseURL: 'https://api.yelp.com/v3',
    timeout: 1000,
    headers: { Authorization: 'Bearer 3dEfcXK3h2w4Macpyg_7HEeYKRtI1CCBADHV9c4js2sdcOIJgstegV-joi775JwoS6KkJZLWUNhh8S4Wea_mSP6CIhPeFjnWQEUZOL-ilAqMfeqF2UDhdtRyiR6GX3Yx' }
});

export default yelpAPI;