import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './app/routes';

const rootElement = document.getElementById('root');
const Router = <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;

if (rootElement !== null) {
  hydrate(Router, rootElement);
}

if (module.hot) {
  module.hot.accept();
}
