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

app.post('/login', function (req, res) {
  if (req.body.password === '12345678') {
    res
      .cookie('name', 'slaneyang')
      .status(200)
      .json({ success: true, msg: 'login succeed' })
  } else {
    res.status(403).json({ success: false, msg: 'login filed' })
  }
})
app.get('/user/info', function (req, res) {
  req.cookies
  if (req.cookies.name === 'slaneyang') {
    res
      .status(200)
      .json({ data: req.cookies.name, success: true, msg: 'get info succeed' })
  } else {
    res.status(403).json({ success: false, msg: 'login filed' })
  }
})

app.listen(3000);

module.exports = app;