import React, { useState } from 'react';

const UserProfilePage: React.FC = () => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        address: '',
        healthConcerns: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(profile);
    };

    return (
        <div>
            <h1>Set Up Your Profile</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={profile.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={profile.email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={profile.address}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="healthConcerns"
                    placeholder="Health Concerns"
                    value={profile.healthConcerns}
                    onChange={handleChange}
                />
                <button type="submit">Save Profile</button>
            </form>
        </div>
    );
};

export default UserProfilePage;
