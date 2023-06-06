const express = require('express')

const notesRouter = require('./notes')

const api = express();

api.use('/notes', notesRouter);
api.use('/notes/:id', notesRouter);

module.exports = api;