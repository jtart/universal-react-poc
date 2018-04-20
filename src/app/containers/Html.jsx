import React from 'react';
import Helmet from 'react-helmet';

const Html = ({ children }) => {
  const head = Helmet.renderStatic();

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        {head.title.toComponent()}
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
};

export default Html;