const express = require('express');
const router = express.Router();

const remedies = [
    { id: 1, title: 'Ginger Tea', description: 'Helps with nausea.' },
    { id: 2, title: 'Aloe Vera', description: 'Soothes skin irritation.' },
];

router.get('/remedies', (req, res) => {
    res.json(remedies);
});

module.exports = router;