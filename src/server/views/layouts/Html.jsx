import React from 'react';
import Helmet from 'react-helmet';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import createRouter from '../components/Router';

const Html = ({ head, children }) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      {head.title.toComponent()}
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
      <script src="/client.js" async></script>
    </body>
  </html>
);

const renderHtml = (url) => {
  const { StaticRouter, context } = createRouter(url);
  const renderedStaticRouter = renderToString(StaticRouter);
  const head = Helmet.renderStatic();
  const html = renderToStaticMarkup(<Html head={head}>{renderedStaticRouter}</Html>);

  return ({
    html,
    context
  })
}

export default renderHtml;
