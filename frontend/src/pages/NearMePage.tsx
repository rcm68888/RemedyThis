import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Location {
    name: string;
    address: string;
    distance: string;
}

const NearMePage: React.FC = () => {
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const res = await axios.get(`/api/nearby?latitude=${latitude}&longitude=${longitude}`);
            setLocations(res.data);
        });
    }, []);

    return (
        <div>
            <h1>Find Remedies Near You</h1>
            <ul>
                {locations.map((loc, index) => (
                    <li key={index}>
                        <strong>{loc.name}</strong> - {loc.address} ({loc.distance})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NearMePage;
