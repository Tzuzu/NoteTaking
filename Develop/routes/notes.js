const notes = require('express').Router();
const dbData = require('../db/db.json');
const uuid = require('../public/assets/js/uuid');
const { readFromFile, writeToFile, readAndAppend } = require('../public/assets/js/fsUtils');


notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

notes.post('/', (req, res) => {
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid()
        };
        readAndAppend(newNote, './db/db.json');
        res.json('Note added!');
    } else {
        res.error('Error in saving');
    }
});

module.exports = notes;