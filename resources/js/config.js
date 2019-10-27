/*
    Defines the API route we are using.
*/
var api_url = '';
var url = '';

switch( process.env.NODE_ENV ) {
    case 'development':
        api_url = 'http://127.0.0.1:8000/api/v1';
        url = 'http://127.0.0.1:8000';
    break;
    case 'production':
        api_url = 'https://faruknasir.azurewebsites.net/api/v1';
        url = 'https://faruknasir.azurewebsites.net';
    break;
}

export const CONFIG = {
    API_URL: api_url,
    URL: url
};