require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

(async () => {
    try {
        const client = await pool.connect();
        const res = await client.query('SELECT current_user;');
        console.log('Connected as:', res.rows[0].current_user);
        client.release();
    } catch (err) {
        console.error('Database connection error:', err.message);
    }
})();

module.exports = pool;