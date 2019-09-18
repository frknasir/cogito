/*
    Imports the Resource API URL from the config.
*/
import { CONFIG } from '../config.js';
export default {

    /** 
     * GET  /api/v1/newsletter
    */
    getNewsletter: function () {
        return axios.get(CONFIG.API_URL + "/newsletter");
    },

    /** 
     * POST  /api/v1/newsletter
    */
    subscribeNewsletter: function (
        email
    ) {
        var formData = new FormData();
        formData.append('email', email);

        return axios.post(CONFIG.API_URL + "/newsletter", formData, {
            'Content-Type': 'multipart/form-data'
        });
    },

    /**
     * DELETE /api/v1/newsletter
     */
    unsubscribeNewsletter: function (
        email
    ) {
        return axios.delete(CONFIG.API_URL + '/newsletter', {
            params: {
                email: email
            }
        });
    }
};
