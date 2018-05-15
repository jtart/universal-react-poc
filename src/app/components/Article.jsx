import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

const Article = () => (
  <div>
    <Helmet title="Article!" />
    <h1>Article content :)</h1>
    <Link to="/test">Test!</Link>
  </div>
);

export default Article;
