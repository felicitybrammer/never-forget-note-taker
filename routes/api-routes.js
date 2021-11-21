const notes = require('../db/db.json');
const updateNotes = require('../update-notes');

const router = require('express').Router();

console.log(notes);

router.get('/notes', (req, res) => {
    res.status(200).json(notes);
});

router.post('/notes', (req, res) => {
    notes.push(req.body);

    updateNotes(notes);

    res.status(200).json({ message: success });
});

router.delete('/api/notes/:id', (req, res) => {
    let noteId = req.params.id;
    for (let data in notes) {
        if (notes[data].title == noteId) {
            notes.splice(data, 1);
        }
    }
});

module.exports = router;