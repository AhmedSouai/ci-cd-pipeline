const express = require('express');
const app = express();
const port = 3000;

const users = require('./users');

// Middleware pour autoriser les requêtes CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Route pour obtenir les utilisateurs
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
