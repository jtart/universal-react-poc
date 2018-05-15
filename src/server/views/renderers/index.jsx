import React from 'react';
import Helmet from 'react-helmet';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import Router from '../components/Router';
import Html from '../layouts/Html';

function renderHTML(url) {
  const context = {};

  const renderedStaticRouter = renderToString(
    <Router url={url} context={context} />,
  );
  const head = Helmet.renderStatic();
  const html = renderToStaticMarkup(
    <Html head={head}>{renderedStaticRouter}</Html>,
  );

  return {
    html,
    context,
  };
}

export default renderHTML;
