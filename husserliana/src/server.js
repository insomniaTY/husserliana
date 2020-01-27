const express = require('express');
const cors    = require('cors');
const path    = require('path');
const app     = express();

app.use(cors());

app.use(express.static(__dirname + 'dist/husserliana'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/husserliana/index.html'));
});

app.listen(process.env.PORT || 8080);