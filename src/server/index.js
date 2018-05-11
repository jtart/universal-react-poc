import express from 'express';
import renderHTML from './views/renderers';

const server = express();

server
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const { html } = renderHTML(req.url);
    res.status(200).send(html);
  });

export default server;
