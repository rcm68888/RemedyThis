const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.connect()
    .then(() => console.log('Connected to database'))
    .catch((err) => console.error('Database connection error', err));

module.exports = pool;
