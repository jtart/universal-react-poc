import express from 'express';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import Router from './components/Router';
import Html from './components/Html';

const server = express();

server
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};

    const content = renderToString(<Router url={url} context={context} />);
    const head = Helmet.renderStatic();
    const html = renderToStaticMarkup(<Html head={head} content={content} />);

    const statusCode = context.statusCode || 200;
    res.status(statusCode).send(html);
  });

export default server;
