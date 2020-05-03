const express = require('express');

const app = express();

app.use(express.static('./husserliana/dist/client'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'husserliana/dist/client/'}),
);

app.listen(process.env.PORT || 8080);
