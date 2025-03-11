//Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//Get all comments
app.get('/comments', (req, res) => {
    fs.readFile('comments.json', (err, data) => {
        if (err) throw err;
        let comments = JSON.parse(data);
        res.send(comments);
    });
});

//Add a comment
app.post('/comments', (req, res) => {
    fs.readFile('comments.json', (err, data) => {
        if (err) throw err;
        let comments = JSON.parse(data);
        let newComment = {
            id: comments.length,