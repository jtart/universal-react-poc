// @flow

import * as React from 'react';

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
      <script src="/client.js" async />
    </body>
  </html>
);

export default Html;
