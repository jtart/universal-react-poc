// @flow

import * as React from 'react';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const scripts = Object.keys(assets).map(key => (
  <script key={key} src={`${assets[key].js}`} defer crossorigin />
));

const Html = ({
  head,
  children,
}: {
  head: Object,
  children: string,
}): React.Node => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      {head.title.toComponent()}
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
      {scripts}
    </body>
  </html>
);

export default Html;
