import axios from 'axios';

const apiService = axios.create({
    baseURL: 'http://localhost/3001/',
});
const post_data = (endpoint, data, _headers) => {
    var hdrs = { 'Content-Type': 'application/json', };
    if (_headers) {
        try {
            Object.entries(_headers).map(([key, value]) => {
                hdrs[key] = value;
                return null;
            });
        } catch (_) {
        }
    }
    return apiService.post(endpoint, data, { headers: hdrs });
};
const logData = ()=>{
    let token = localStorage.getItem('token');
    return token
}

export {logData,post_data}