const pool = require('../database');

const getPosts = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM forum_posts ORDER BY created_at DESC');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addPost = async (req, res) => {
    const { author, content } = req.body;
    try {
        const { rows } = await pool.query(
            'INSERT INTO forum_posts (author, content, created_at) VALUES ($1, $2, NOW()) RETURNING *',
            [author, content]
        );
        res.status(201).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getPosts, addPost };
