const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi Server');
});
app.get('/api/server', function(req, res) {
  res.send('Hello World! from server');
});
app.get('/proxy/my/path', function(req, res) {
  res.send('Hello Worldzzzz! from server');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/public'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
