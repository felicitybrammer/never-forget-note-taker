const notes = require('../db/db.json');
const updateNotes = require('../update-notes');

const router = require('express').Router();

console.log(notes);

router.get('/api/notes', (req, res) => {
    res.status(200).json(notes);
});

router.post('/api/notes', (req, res) => {
    notes.push(req.body);

    updateNotes(notes);

    res.status(200).json({ message: success });
});

router.delete('/api/notes/:id', (req, res) => {
    
});

module.exports = router;