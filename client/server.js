const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + 'dist/husserliana/client/'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/client/index.html'));
});

app.listen(process.env.PORT || 5000);
