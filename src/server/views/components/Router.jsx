// @flow

import React from 'react';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';

import routes from '../../../app/routes';

const Router = ({
  url,
  context,
}: {
  url: String,
  context: Object,
}): StaticRouter => (
  <StaticRouter location={url} context={context}>
    {renderRoutes(routes)}
  </StaticRouter>
);

export default Router;
