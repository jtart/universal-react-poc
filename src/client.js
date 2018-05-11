import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './app/routes';

const Router = <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
const rootElement = document.getElementById('root');

if (rootElement !== null) {
  hydrate(Router, rootElement);
}

if (module.hot) {
  module.hot.accept();
}
