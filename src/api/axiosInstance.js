import axios from 'axios';

const api = axios.create({
    baseURL: "https://client-side-routing-backend-nu.vercel.app/api",
});

export default api;