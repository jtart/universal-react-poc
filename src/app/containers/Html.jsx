import React from 'react';
import Helmet from 'react-helmet';

const Html = ({ children }) => {
  const head = Helmet.renderStatic();
  const bodyInline = { __html: children };

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        {head.title.toComponent()}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={bodyInline} />
        <script src="/client.js" async></script>
      </body>
    </html>
  );
};

export default Html;
