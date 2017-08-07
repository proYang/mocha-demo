const express = require('express');

const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'slane' });
});

app.listen(3000);

module.exports = app;