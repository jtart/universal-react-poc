// @flow

import * as React from 'react';
import Helmet from 'react-helmet';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import Router from '../components/Router';

const Html = ({ head, children }: { head: Helmet, children: string }): React.Node => (
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

function renderHTML(url: String): { html: string, context: Object } {
  const context = {}

  const renderedStaticRouter = renderToString(<Router url={url} context={context} />);
  const head = Helmet.renderStatic();
  const html = renderToStaticMarkup(<Html head={head}>{renderedStaticRouter}</Html>);

  return ({
    html,
    context
  })
}


export default renderHTML;
