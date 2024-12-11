import React, { useState } from 'react';

const SearchPage: React.FC = () => {
    const [query, setQuery] = useState('');
    const remedies = [
        { title: 'Ginger Tea', symptom: 'Nausea' },
        { title: 'Aloe Vera', symptom: 'Skin Irritation' },
    ];

    const filteredRemedies = remedies.filter((remedy) =>
        remedy.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <h1>Search Remedies</h1>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {filteredRemedies.map((remedy, index) => (
                    <li key={index}>{remedy.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchPage;