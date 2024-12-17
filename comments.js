// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET /comments
app.get('/comments', (req, res) => {
  res.send('GET /comments');
});

// POST /comments
app.post('/comments', (req, res) => {
  res.send('POST /comments');
});

// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  res.send('PUT /comments/:id');
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  res.send('DELETE /comments/:id');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});