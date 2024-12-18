// Create web server
const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (request, response) => {
  response.send('Hello from comments service!');
});

app.listen(port, () => {
  console.log(`Comments service listening at http://localhost:${port}`);
});