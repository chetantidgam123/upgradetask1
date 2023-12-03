import axios from 'axios';

const apiService = axios.create({
    baseURL: 'http://localhost/8081/',
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
const get_data = (endpoint, _headers,params) => {
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
    return apiService.get(endpoint, { headers: hdrs },{params:params});
};

const login_post_data = (endpoint, data, _headers) => {
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
    return apiService.post(endpoint, {}, { headers: hdrs },{auth:data});
};
const logData = ()=>{
    let token = localStorage.getItem('token');
    return token
}

export {logData,post_data,login_post_data,get_data}