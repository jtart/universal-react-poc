import Root from './components/Root';
import Article from './components/Article';

export default [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Article
      }
    ]
  }
];