import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const [search, setSearch] = useState('');
    const isLoggedIn = true;
    const remedies = ['Ginger Tea', 'Aloe Vera', 'Lavender Oil']; // Sample remedies
    const navigate = useNavigate(); // Hook for navigation

    const filteredRemedies = remedies.filter((remedy) =>
        remedy.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {/* Conditional Navigation Buttons */}
            <div>
                {!isLoggedIn ? (
                    <>
                        <button onClick={() => navigate('/login')}>Login</button>
                        <button onClick={() => navigate('/register')}>Register</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => navigate('/dashboard')}>Dashboard</button>
                        <button onClick={() => navigate('/search')}>Search</button>
                        <button onClick={() => navigate('/chat')}>Chat</button>
                        <button onClick={() => navigate('/nearme')}>NearMe</button>
                    </>
                )}
            </div>

            <h1>Welcome to RemedyThis</h1>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search remedies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Remedies List */}
            <ul>
                {filteredRemedies.map((remedy, index) => (
                    <li key={index}>{remedy}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;

