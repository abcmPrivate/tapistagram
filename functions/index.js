import firebase from '@/plugins/firebase';
const db = firebase.firestore()
const generated = db.collection('generated')
const functions = require('firebase-functions');

const getImageUrl = async (id) => {
  const snapshot = await generated.doc(id).get()
  if (!snapshot.exists) return ''
  return snapshot.data().imageUrl
} 

exports.bigben = functions.https.onRequest(async (req, res) => {
  const id = req.params.id
  const IMAGE = getImageUrl(id)

  const SITEURL = "〇〇〇〇〇"
  const TITLE = "〇〇〇〇〇"
  const DESCRIPTION = "〇〇〇〇〇"

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