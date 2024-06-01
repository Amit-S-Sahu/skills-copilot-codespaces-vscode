// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Set up the server
var server = app.listen(3000, function() {
    console.log('Server is running');
});

// Set up the server to use the body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Set up the server to use the public folder
app.use(express.static('public'));

// Set up the server to use the comments file
var comments;
fs.readFile('comments.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        comments = JSON.parse(data);
    }
});

// Set up the server to use the comments file
var users;
fs.readFile('users.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        users = JSON.parse(data);
    }
});

// Set up the server to use the comments file
var posts;
fs.readFile('posts.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        posts = JSON.parse(data);
    }
});

// Set up the server to use the comments file
var likes;
fs.readFile('likes.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        likes = JSON.parse(data);
    }
});

// Set up the server to use the comments file
var comments;
fs.readFile('comments.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        comments = JSON.parse(data);
    }
});

// Set up the server to use the comments file
var notifications;
fs.readFile('notifications.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        notifications = JSON.parse(data);
    }
});

// Set up the server to use the comments file
var messages;
fs.readFile('messages.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        messages = JSON.parse(data);
    }
});