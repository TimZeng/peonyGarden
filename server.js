var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(`serving ${req.method} request on ${req.url}`);
  next();
});

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.htlm'));
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
})
