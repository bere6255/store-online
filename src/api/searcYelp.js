import yelp from './axios/yelp';

module.exports = {
    apiSearch: async (params) =>{
         return await yelp.get('/businesses/search', params);
    },
    apiDetails: async (id) => {
        return await yelp.get(`/businesses/${id}`);
    },

};