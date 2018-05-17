import React from 'react';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const scripts = Object.keys(assets).map(key => (
  <script key={key} src={`${assets[key].js}`} defer />
));

const Html = ({ head, content }) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      {head.title.toComponent()}
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
      {scripts}
    </body>
  </html>
);

export default Html;
