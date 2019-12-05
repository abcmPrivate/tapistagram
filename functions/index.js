// express初期化
const express = require('express')
const app = express()

// firebase初期化
const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
const db = admin.firestore()

const SITE_NAME = 'tapistagram'
const TITLE = 'tapistagram'
const META_DESCRIPTION = 'タピオカをつくるやつ'
const META_KEYWORDS = ['タピオカ']
const OG_IMAGE_WIDTH = 1200
const OG_IMAGE_HEIGHZT = 630
const FB_APPID = ''
const TW_SITE = ''
const TW_CREATOR = ''

const genHtml = (id, url, name) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>${TITLE}</title>
    <meta name="description" content=${META_DESCRIPTION}>
    <meta name="keywords" content=${META_KEYWORDS.join(',')}>
    <meta property="og:locale" content="ja_JP">
    <meta property="og:type" content="website">
    <meta property="og:url" content=${url}>
    <meta property="og:title" content=${TITLE}>
    <meta property="og:SITE_NAME" content=${SITE_NAME}>
    <meta property="og:description" content=${name}>
    <meta property="og:image" content=${url}>
    <meta property="og:image:width" content=${OG_IMAGE_WIDTH}>
    <meta property="og:image:height" content=${OG_IMAGE_HEIGHZT}>
    <meta property="fb:app_id" content=${FB_APPID}>
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content=${TITLE}>
    <meta name="twitter:description" content=#${name}>
    <meta name="twitter:image" content=${url}>
    <meta name="twitter:site" content=${TW_SITE}>
    <meta name="twitter:creator" content=${TW_CREATOR}>
  </head>
  <body>
    <script>
      // クローラーにはメタタグを解釈させて、人間は任意のページに飛ばす
      location.href = '/generate/${id}/';
    </script>
  </body>
</html>
`

app.get('/share/:id', async (req, res) => {
  const id = req.params.id
  const doc = await db.collection('generated').doc(id).get()
  if (!doc.exists) {
    console.log(`${id} not exist`)
    res.status(404).send('404 Not Exist')
  } else {
    const url = doc.data().url
    const name = doc.data().name
    const html = genHtml(id, url, name)
    res.set('cache-control', 'public, max-age=3600');
    res.send(html)
  }
})
exports.share = functions.https.onRequest(app)
