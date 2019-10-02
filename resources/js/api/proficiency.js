/*
    Imports the URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /*
    GET /api/v1/proficiency
    */
    index: function(url = null) {
		url = url || CONFIG.API_URL + '/proficiency';
        return axios.get(url);
    },

    /**
     * GET /api/v1/proficiency/{id}
     */
    show: function(id) {
        return axios.get(
            CONFIG.API_URL +
            '/proficiency/' +
            id
        );
    },

    /** 
     * POST  /api/v1/proficiency
    */
    store: function ( 
		proficiency_type_id,
		title,
		value
    ) {
        return axios.post( CONFIG.API_URL + '/proficiency', {
			proficiency_type_id,
			title,
			value
        });
    },

    /**
     * PUT /api/v1/proficiency
     */
    update: function ( 
        id,
        proficiency_type_id,
		title,
		value
    ) {
        return axios.put( CONFIG.API_URL + '/proficiency', {
            id,
            proficiency_type_id,
			title,
			value
        });
    },

    /**
     * DELETE /api/v1/proficiency
     */
    delete: function (
        id
    ) {
        return axios.delete( CONFIG.API_URL + '/proficiency', {
            params: {
                id: id
            }
        });
    }
};