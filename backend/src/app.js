const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const users = require('./users'); // On importe le fichier users.js

const hostname = '0.0.0.0'; // Assure-toi qu'il est écouté sur toutes les interfaces réseau
const port = 3000;

const requestHandler = (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Route /api/health
  if (req.method === 'GET' && parsedUrl.pathname === '/api/health') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: 'ok' }));
  }

  // Route /api/users pour récupérer les utilisateurs
  else if (req.method === 'GET' && parsedUrl.pathname === '/api/users') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users)); // On renvoie les utilisateurs présents dans le fichier users.js
  }

  // Pour toutes les autres routes, on répond par une erreur 404
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Page not found</h1>');
  }
};

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
