import axios from 'axios';

const API = import.meta.env.VITE_SOME_API_URL;

export default axios.create({
    baseURL: `${API}`
})