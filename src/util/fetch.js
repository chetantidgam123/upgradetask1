import axios from 'axios';

const apiService = axios.create({
    baseURL: 'http://localhost:8081/',
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
const get_data = (endpoint,params) => {
    var hdrs = { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+logData().token
};
    return apiService.get(endpoint,{params:params},{headers:hdrs});
};
const get_login = (endpoint) => {
    var hdrs = { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+logData().token
};
    return apiService.get(endpoint,{headers:hdrs});
};
const post_login = (endpoint,data) => {
    var hdrs = { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+logData().token
};
    return apiService.post(endpoint,data,{headers:hdrs});
};

const login_post_data = (endpoint, data) => {
        let creddentials = btoa(data.username+':'+data.password)
    return apiService.post(endpoint,{},{headers:{Authorization:`Basic ${creddentials}`}});
};
const logData = ()=>{
    let data = {
        'token':localStorage.getItem('token'),
        'emailId':localStorage.getItem('emailId'),
        'firstName':localStorage.getItem('firstName'),
    } 
    return data
}

export {logData,post_data,login_post_data,get_data,get_login,post_login}