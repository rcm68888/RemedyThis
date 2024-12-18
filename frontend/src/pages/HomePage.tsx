import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const [search, setSearch] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const remedies = ['AI Results: ','Ginger Tea', 'Aloe Vera', 'Lavender Oil', 'Moringa', ', etc.']; // Sample remedies
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        // Simulate checking authentication status (replace with real auth logic)
        const token = localStorage.getItem('authToken');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        // Clear authentication tokens or perform necessary cleanup
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        navigate('/'); // Redirect to homepage after logout
    };

    const filteredRemedies = remedies.filter((remedy) =>
        remedy.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {/* Navigation Buttons */}
            <div>
                {isLoggedIn ? (
                    <>
                        <button onClick={handleLogout}>Logout</button>
                        <button onClick={() => navigate('/dashboard')}>Dashboard</button>
                        <button onClick={() => navigate('/search')}>Search</button>
                        <button onClick={() => navigate('/chat')}>Chat</button>
                        <button onClick={() => navigate('/nearme')}>NearMe</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => navigate('/login')}>Login</button>
                        <button onClick={() => navigate('/register')}>Register</button>
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
