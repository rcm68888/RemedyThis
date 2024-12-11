const pool = require('../database');

const saveGoals = async (req, res) => {
    const { userId, goals, allergies, preferences } = req.body;
    try {
        await pool.query(
            'INSERT INTO health_goals (user_id, goals, allergies, preferences) VALUES ($1, $2, $3, $4)',
            [userId, goals, allergies, preferences]
        );
        res.status(201).json({ message: 'Health goals saved' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { saveGoals };
