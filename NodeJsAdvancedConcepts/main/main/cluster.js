process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');

// Is file being executed in master mode?
// if (cluster.isMaster) {
//Cause index.js to be executed againt but in child mode
// cluster.fork();
// cluster.fork();
// cluster.fork();
// cluster.fork();
// } else {
//I'm a child and going to act a server and nothing else

const express = require('express');
const crypto = require('crypto');
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
// }
