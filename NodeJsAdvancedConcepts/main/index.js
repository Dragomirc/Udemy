//I'm a child and going to act a server and nothing else
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    res.send('Hi There');
  });
});

app.get('/fast', (req, res) => {
  res.send('This was fast!');
});
app.listen(3000, () => {
  console.log('server listens on port 3000');
});
