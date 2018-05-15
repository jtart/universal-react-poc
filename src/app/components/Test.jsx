import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

const Test = () => (
  <div>
    <Helmet title="Test!" />
    <h1>Test header</h1>
    <Link to="/">Back</Link>
    <p>
      This is some test content. This is some test content. This is some test
      content. This is some test content.{' '}
    </p>
  </div>
);

export default Test;
