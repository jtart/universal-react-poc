import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';

import renderHTML from './renderers/renderHTML';
import routes from './routes';

const server = express();

server.get('*', (req, res) => {
  const staticContext = {};

  const App = (
      <StaticRouter location={req.url} context={staticContext}>
          {renderRoutes(routes)}
      </StaticRouter>
  );

  const bodyInline = renderToString(App);
  const head = Helmet.renderStatic();
  const html = renderHTML(head, bodyInline);

  res.status(staticContext.statusCode || 200).send(html);
});

server.listen(8080, err => {
  console.info(`listening.`)
});