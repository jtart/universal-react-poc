// @flow

import * as React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

const Article = (): React.Node => (
  <div>
    <Helmet title="Article!" />
    <h1>Article content :)</h1>
    <Link to="/">Another article</Link>
  </div>
);

export default Article;
