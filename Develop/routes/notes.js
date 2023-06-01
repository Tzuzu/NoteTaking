const notes = require('express').Router();

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

notes.post('/', (req, res) => {
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
        };
        readAndAppend(newNote, './db/db.json');
        res.json('Note added!');
    } else {
        res.error('Error in saving');
    }
});

module.exports = notes;