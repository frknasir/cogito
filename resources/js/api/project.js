/*
    Imports the URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /*
    GET /api/v1/projects
    */
    getProjects: function(url = null) {
		url = url || CONFIG.API_URL + '/project';
        return axios.get(url);
    },

    /**
     * GET /api/v1/project/{id}
     */
    getProject: function(id) {
        return axios.get(
            CONFIG.API_URL +
            '/project/' +
            id
        );
    },

    /** 
     * POST  /api/v1/project
    */
    addProject: function ( 
		title,
		description,
		source_code,
		live_url
    ) {
        return axios.post( CONFIG.API_URL + '/project', {
			title: title,
			description,
			source_code,
			live_url
        });
    },

    /**
     * PUT /api/v1/project
     */
    updateProject: function ( 
        id,
        title,
		description,
		source_code,
		live_url
    ) {
        return axios.put( CONFIG.API_URL + '/project', {
            id,
            title: title,
			description,
			source_code,
			live_url
        });
    },

    /**
     * DELETE /api/v1/project
     */
    deleteProject: function (
        id
    ) {
        return axios.delete( CONFIG.API_URL + '/project', {
            params: {
                id: id
            }
        });
    }
};