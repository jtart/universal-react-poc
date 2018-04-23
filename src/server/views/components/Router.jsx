import React from 'react';
import { renderRoutes } from 'react-router-config';
import StaticRouter from 'react-router-dom';

import routes from '../../../app/routes';

const Router = ({ url, context }) => (
  <StaticRouter location={url} context={context}>
    {renderRoutes(routes)}
  </StaticRouter>
);

const createRouter = (url, context = {}) => {
  const router = <Router url={url} context={context} />;

  return({
    router,
    context
  })
};

export default createRouter;
