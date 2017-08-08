const express = require('express');
const bodyParser = require('body-parser')

const app = express();

//body处理中间件
app.use(bodyParser.json())
app.get('/user', function (req, res) {
  res.status(200).json({ name: 'slane' });
});

app.put('/user', function (req, res) {
  res.status(200).json({ name: req.body.name });
});

app.listen(3000);

module.exports = app;