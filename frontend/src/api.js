import axios from 'axios';

const api = axios.create({
    // PASTE YOUR RENDER URL HERE
    baseURL: 'https://jr-constructions-clone.onrender.com', 
    headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;