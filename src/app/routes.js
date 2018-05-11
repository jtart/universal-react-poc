// @flow

import Article from './components/Article';
import Test from './components/Test';

export default [
  {
    component: Article,
    exact: true,
    path: '/',
  },
  {
    component: Test,
    path: '/test',
  },
];
