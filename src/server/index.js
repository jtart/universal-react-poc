import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import Html from '../app/containers/Html';
import routes from '../app/routes';

const server = express();

server.get('*', (req, res) => {
  const staticContext = {};

  const bodyInline = (
    <StaticRouter location={req.url} context={staticContext}>
      {renderRoutes(routes)}
    </StaticRouter>
  );

  const renderedHTML = renderToString(<Html>{bodyInline}</Html>);

  res.status(staticContext.statusCode || 200).send(renderedHTML);
});

server.listen(8080, err => {
  console.info(`listening.`)
});