/*
    Imports the URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /*
    GET /api/v1/proficiencyType
    */
    index: function() {
        return axios.get(CONFIG.API_URL + '/proficiencyType');
    }
};