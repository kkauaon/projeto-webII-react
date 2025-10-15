import axios from 'axios';

const api = axios.create({
    baseURL: "https://projeto-webii.onrender.com"
});

export default api;