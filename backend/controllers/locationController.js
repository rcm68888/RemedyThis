const axios = require('axios');

const getNearbyLocations = async (req, res) => {
    const { latitude, longitude } = req.query;
    try {
        // Replace with real location service API
        const locations = [
            { name: 'Herbal Store', address: '123 Main St', distance: '2 km' },
            { name: 'Alternative Clinic', address: '456 Elm St', distance: '5 km' },
        ];
        res.json(locations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getNearbyLocations };
