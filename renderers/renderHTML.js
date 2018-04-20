export default (head, bodyInline) => (
  `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        ${head.title.toString()}
      </head>
      <body>
        <div id="root">${bodyInline}</div>
      </body>
    </html>
  `
);