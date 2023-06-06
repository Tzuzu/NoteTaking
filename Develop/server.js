const express = require('express');
const path = require('path');
const apiRouter = require('./routes/index.js')

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware used to parse JSON and the urlencoded data

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api', apiRouter)

// Default Route 

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

// Listen

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});
