const functions = require('firebase-functions');

exports.bigben = functions.https.onRequest((req, res) => {

  const SITEURL = "〇〇〇〇〇"
  const TITLE = "〇〇〇〇〇"
  const DESCRIPTION = "〇〇〇〇〇"
  const IMAGE = `https://firebasestorage.googleapis.com/v0/b/tapistagram.appspot.com/o/test.jpg?alt=media&token=6350d7f5-7897-461a-b40a-32128d576c37`

  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
      <meta property="og:title" content="${TITLE}">
      <meta property="og:image" content="${IMAGE}">
      <meta property="og:description" content="${DESCRIPTION}">
      <meta property="og:url" content="${SITEURL}">
      <meta property="og:type" content="website">
      <meta property="og:site_name" content="${TITLE}">
      <meta name="twitter:site" content="〇〇〇〇〇〇">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="${TITLE}">
      <meta name="twitter:image" content="${IMAGE}">
      <meta name="twitter:description" content="${DESCRIPTION}">
    </head>
    <body>
      ${'BONG '.repeat(3)}
    </body>
  </html>`);
});