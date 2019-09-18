/*
    Imports the Post API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /* *
    GET /api/v1/posts
    */
    getPosts: function(limit, url = null) {
        url = url || CONFIG.API_URL + 
            '/posts/limit/' + limit;

        return axios.get(url);
    }
};
