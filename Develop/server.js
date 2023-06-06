const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRouter = require('./routes/index.js')

// Middleware used to parse JSON and the urlencoded data

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api', apiRouter)

app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for homepage (index.html)

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for displaying new and existing notes

app.get('/api/notes', (req, res) => res.json(dbData))

app.post('/api/notes', (req, res) =>
    console.log('test')
);

// Listen

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});
