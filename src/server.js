const express = require('express');

const app = express();

app.get('/echo', (req, res) => {
  res.send('');
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('Signal server is listening at http://%s:%s', host, port);
});

module.exports = {
  server,
};
