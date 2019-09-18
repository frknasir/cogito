/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * GET /api/v1/config
     **/
    show: function() {
        return axios.get(CONFIG.API_URL+"/config");
    }, 

    /**
     * PUT /api/v1/config
     */
    update: function(
        id,
        site_name,
        site_title,
        site_description,
        site_logo,
        office_address,
        email,
        phone_number, 
        twitter_url,
        facebook_url,
        instagram_url,
        linkedin_url
    ) {
        var formData = new FormData();

        formData.append('id', id);
        formData.append('site_name', site_name);
        formData.append('site_title', site_title);
        formData.append('site_description', site_description);
        formData.append('logo', site_logo);
        formData.append('office_address', office_address);
        formData.append('email', email);
        formData.append('phone_number', phone_number);
        formData.append('twitter_url', twitter_url);
        formData.append('facebook_url', facebook_url);
        formData.append('instagram_url', instagram_url);
        formData.append('linkedin_url', linkedin_url);
        
        return axios.post(CONFIG.API_URL+"/config", formData, {
            'Content-Type': 'multipart/form-data'
        });
    }
};
