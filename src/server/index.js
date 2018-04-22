import express from 'express';
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import Html from '../app/containers/Html';
import routes from '../app/routes';

const server = express();

server.use(express.static('static'));

server.get('*', (req, res) => {
  const staticContext = {};

  const body = renderToString(
    <StaticRouter location={req.url} context={staticContext}>
      {renderRoutes(routes)}
    </StaticRouter>
  );
  const html = renderToStaticMarkup(<Html>{body}</Html>);

  res.status(staticContext.statusCode || 200).send(html);
});

server.listen(8080, err => {
  console.info(`listening on 8080.`)
});