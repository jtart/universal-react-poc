import express from 'express';

import renderHTML from './views/layouts/Html';

const server = express();

server.use(express.static('static'));

server.get('*', (req, res) => {
  const { context, html } = renderHTML(req.url);

  res.status(200).send(html);
});

server.listen(8080, err => {
  console.info(`listening on 8080.`)
});