import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../app/routes';

hydrate((
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
), document.getElementById('root'));