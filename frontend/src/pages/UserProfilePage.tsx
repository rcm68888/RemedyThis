import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfilePage: React.FC = () => {
    const [profile, setProfile] = useState<{ name: string; email: string } | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/profile', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setProfile(response.data);
            } catch (err) {
                setError('Failed to fetch profile');
            }
        };
        fetchProfile();
    }, []);

    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h1>User Profile</h1>
            {profile ? (
                <div>
                    <p>Name: {profile.name}</p>
                    <p>Email: {profile.email}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserProfilePage;
