/*
    Defines the API route we are using.
*/
var api_url = '';
var url = '';

switch( process.env.NODE_ENV ) {
    case 'development':
        api_url = process.env.MIX_APP_URL + '/api/v1' || 'http://127.0.0.1:8000/api/v1';
        url = process.env.MIX_APP_URL || 'http://127.0.0.1:8000';
    break;
    case 'production':
        api_url = process.env.MIX_APP_URL + '/api/v1';
        url = process.env.MIX_APP_URL;
    break;
}

console.log(api_url)

export const CONFIG = {
    API_URL: api_url,
    URL: url
};