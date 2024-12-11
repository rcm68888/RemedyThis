require('dotenv').config(); // Load environment variables
const express = require('express');
const pool = require('./db'); // Import the database connection
const cors = require('cors');
const dotenv = require('dotenv');
const remediesRoutes = require('./routes/remedies');
const forumRoutes = require('./routes/forumRoutes');
const healthGoalsRoutes = require('./routes/healthGoalsRoutes');
const locationRoutes = require('./routes/locationRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', remediesRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/health-goals', healthGoalsRoutes);
app.use('/api/nearby', locationRoutes);

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ message: 'Database connected!', time: result.rows[0].now });
    } catch (err) {
        res.status(500).json({ error: 'Database query failed' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
