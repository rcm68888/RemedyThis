import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const [search, setSearch] = useState('');
    const remedies = ['Ginger Tea', 'Aloe Vera', 'Lavender Oil']; // Sample remedies
    const navigate = useNavigate(); // Hook for navigation
    
    const filteredRemedies = remedies.filter((remedy) =>
        remedy.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {/* Navigation Buttons */}
            <div>
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/register')}>Register</button>
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
