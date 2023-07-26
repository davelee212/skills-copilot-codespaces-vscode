// Create web server and use express
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Use body-parser to parse the data from the body of the request
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Use express to create a web server
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

// Create a GET route for comments
app.get('/comments', (req, res) => {
  let comments = fs.readFileSync('./comments.json');
  comments = JSON.parse(comments);
  res.json(comments);
});

// Create a POST route for comments
app.post('/comments', (req, res) => {
  let comments = fs.readFileSync('./comments.json');
  comments = JSON.parse(comments);
  comments.push(req.body);
  fs.writeFileSync('./comments.json', JSON.stringify(comments));
  res.json(comments);
});

// Create a DELETE route for comments
app.delete('/comments/:id', (req, res) => {
  let comments = fs.readFileSync('./comments.json');
  comments = JSON.parse(comments);
  comments = comments.filter(comment => comment.id != req.params.id);
  fs.writeFileSync('./comments.json', JSON.stringify(comments));
  res.json(comments);
});