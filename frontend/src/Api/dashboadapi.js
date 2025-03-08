import { notification } from 'antd';
import axios from 'axios';

const API_URL = 'http://192.168.68.32:3000/api/testdetails/6';// Replace with your backend API URL

const axiosInstance = axios.create({
    baseURL: API_URL,
});

// Interceptor to add the token to every request
axiosInstance.interceptors.request.use((config) => {    
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `${token}`;
    }
    return config;
});
// axiosInstance.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response && error.response.status === 401) {
//       notification.error({
//         message: 'Unauthorized',
//         description: 'Your session has expired. Please log in again.',
//       });
//       // Optionally, redirect to login page or perform other actions
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
