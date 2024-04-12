const sql = require('mssql');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Get all tasks
app.get('/tasks', (req, res) => {
    // Code to fetch tasks from the database goes here
});

// Create a new task
app.post('/tasks', (req, res) => {
    // Code to add a new task to the database goes here
});

// Update a task
app.put('/tasks/:id', (req, res) => {
    // Code to update a task in the database goes here
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    // Code to delete a task from the database goes here
});

module.exports = app;