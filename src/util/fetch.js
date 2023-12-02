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
const regData = ()=>{
    console.log('Registered');
}
const timeSlot = ['09:00 AM - 10:00 AM','10:00 AM - 11:00 AM','11:00 AM - 12:00 PM','12:00 PM - 01:00 PM','01:00 PM - 02:00 PM','02:00 PM - 03:00 PM','03:00 PM - 04:00 PM','04:00 PM - 05:00 PM']

export {logData,regData,post_data,timeSlot}