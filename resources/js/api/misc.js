/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    sendContactMail: function(
        first_name,
        last_name,
        email,
        subject,
        message
    ) {
        return axios.post(CONFIG.API_URL + '/mail/contact', {
            first_name,
            last_name,
            email,
            subject,
            message
        });
    },
    
    applyForMembership: function(
        last_name,
        first_name,
        birth_date,
        birth_city,
        nationality,
        email,
        phone_number,
        publications,
        experience_years,
        experience_subjects,
        residence_city,
        references
    ) {
        return axios.post(CONFIG.API_URL + '/mail/apply-for-membership', {
            last_name,
            first_name,
            birth_date,
            birth_city,
            nationality,
            email,
            phone_number,
            publications,
            experience_years,
            experience_subjects,
            residence_city,
            references
        });
    }
}