import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.PUBLIC_NEXT_BASE_API_URL || 'http://localhost:3001'
});
