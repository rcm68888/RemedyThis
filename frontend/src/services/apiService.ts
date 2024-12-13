import axios from 'axios';

// Configure Axios instance with base URL
const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // Access the environment variable
});

// Define TypeScript types for data
export interface Post {
    author: string;
    content: string;
}

export interface Remedy {
    id: number;
    title: string;
    description: string;
}

// API functions
export const fetchRemedies = (): Promise<Remedy[]> =>
    API.get('/remedies').then((res) => res.data);

export const fetchPosts = (): Promise<Post[]> =>
    API.get('/forum').then((res) => res.data);

export const addPost = (post: Post): Promise<Post> =>
    API.post('/forum', post).then((res) => res.data);
