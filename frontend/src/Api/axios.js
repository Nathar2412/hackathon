import axios from "axios";
import Cookies from "js-cookie";
import config from "../constant/config";

// const { microservices } = config;
// console.log(microservices)
// Create a function to generate an Axios instance for the required service
const createAxiosInstance = (serviceName) => {
    // Get the base URL for the service, either from config or fallback to environment variable
    const baseURL = 'http://192.168.68.32:3000';

    // Throw an error if no baseURL is configured
    if (!baseURL) {
        throw new Error(`Base URL for service "${serviceName}" is not configured.`);
    }

    const instance = axios.create({
        baseURL,
        withCredentials: true, // Ensure cookies are sent with the request
    });

    // Request interceptor for adding auth headers
    instance.interceptors.request.use(
        (config) => {
            // Add Authorization header if accessToken exists
            const accessToken = Cookies.get('accessToken');
            if (accessToken) {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            }
            return config;
        },
        (error) => Promise.reject(error) // Reject if there's an error during request setup
    );

    // Response interceptor for handling token expiration
    instance.interceptors.response.use(
        (response) => response, // Return response directly if there's no error
        async (error) => {
            const originalRequest = error.config;

            // Check if the error is due to unauthorized access (401)
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true; // Prevent retrying more than once

                const refreshToken = Cookies.get('refreshToken');
                if (refreshToken) {
                    try {
                        // Attempt to refresh the access token using the refresh token
                        const { data } = await axios.post(
                            `http://192.168.68.32:3000/api/auth/users/refresh-token`,
                            {}, // Typically, the refresh request doesn't need a body, but check your backend API
                            {
                                headers: {
                                    'Authorization': `Bearer ${refreshToken}`, // Attach refresh token in Authorization header
                                },
                            }
                        );

                        // Save new access token from the response
                        Cookies.set('accessToken', data.accessToken);

                        // Retry the original request with the new access token
                        originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
                        return axios(originalRequest);
                    } catch (err) {
                        console.error('Refresh token expired or invalid', err);
                        // Handle the error by redirecting user or logging out, based on the app requirements
                    }
                }
            }

            return Promise.reject(error); // Reject the response if no valid token or other errors
        }
    );

    return instance; // Return the configured Axios instance
};

export default createAxiosInstance;

