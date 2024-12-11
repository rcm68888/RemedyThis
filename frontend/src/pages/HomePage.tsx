import React, { useState } from 'react';

const HomePage: React.FC = () => {
    const [search, setSearch] = useState('');
    const remedies = ['Ginger Tea', 'Aloe Vera', 'Lavender Oil']; // Sample remedies

    const filteredRemedies = remedies.filter((remedy) =>
        remedy.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Welcome to RemedyThis</h1>
            <input
                type="text"
                placeholder="Search remedies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredRemedies.map((remedy, index) => (
                    <li key={index}>{remedy}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
