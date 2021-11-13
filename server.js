const express = require('express');
const path = require('path');
const notes = require('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
}); 

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});//notes.html

app.get('/api/notes', (req, res) => {
    res.status(200).json(notes);
}); //read db.json return all saved notes as json

app.post('/api/notes', (req, res) => {}); //hould receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. 

//DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.





app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});