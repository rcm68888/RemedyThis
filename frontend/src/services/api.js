import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL, });

export const fetchRemedies = () => API.get('/remedies');
export const fetchPosts = () => API.get('/forum');
export const addPost = (post: { author: string; content: string }) => API.post('/forum', post);