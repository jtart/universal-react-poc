import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

const Article = () => (
  <div>
    <Helmet title="Your article :)" />
    <h1>Article content!</h1>
  </div>
)

export default withRouter(Article);
