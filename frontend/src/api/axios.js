import axios from 'axios';

// This automatically chooses the right URL:
// - If running on Laptop: uses http://localhost:8080
// - If running on Cloud: uses the real Cloud URL
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
    headers: { 'Content-Type': 'application/json' }
});

// Automatically attach the Login Token (if it exists)
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;