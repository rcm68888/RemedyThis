import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
    id: number;
    author: string;
    content: string;
    date: string;
}

const ForumPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]); // Initialize as an empty array
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        axios
            .get('/api/forum')
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setPosts(res.data); // Ensure the response is an array
                } else {
                    console.error('Unexpected API response:', res.data);
                    setPosts([]); // Fallback to empty array
                }
            })
            .catch((err) => {
                console.error('Error fetching posts:', err);
                setPosts([]); // Handle error and reset posts to empty array
            });
    }, []);

    const handlePostSubmit = async () => {
        const post = { author: 'User', content: newPost, date: new Date().toISOString() };
        try {
            const res = await axios.post('/api/forum', post);
            setPosts([...posts, res.data]); // Add the new post to the list
            setNewPost('');
        } catch (err) {
            console.error('Error submitting post:', err);
        }
    };

    return (
        <div>
            <h1>Community Forum</h1>
            <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Share your experience..."
            />
            <button onClick={handlePostSubmit}>Post</button>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.author}</strong> ({new Date(post.date).toLocaleString()}):{' '}
                        {post.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ForumPage;