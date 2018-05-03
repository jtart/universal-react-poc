// @flow

import express from 'express';

import renderHTML from './views/renderers';

const server = express();

server.use(express.static('static'));

server.get('/favicon.ico', () => null);

server.get('*', (req, res) => {
  const { html } = renderHTML(req.url);

  res.status(200).send(html);
});

server.listen(8080, () => {
  console.info(`listening on 8080.`);
});
