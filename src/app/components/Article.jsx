// @flow

import * as React from 'react';
import Helmet from 'react-helmet';

const Article = (): React.Node => (
  <div>
    <Helmet title="Article!" />
    <h1>Article content :)</h1>
  </div>
)

export default Article;
