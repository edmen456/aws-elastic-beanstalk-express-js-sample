const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!! Test code pipeline 2nd version'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
