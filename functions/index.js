// express初期化
const express = require('express')
const app = express()

// firebase初期化
const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
const db = admin.firestore()

const site_name = 'tapistagram'
const title = 'tapistagram'
const meta_description = 'タピオカをつくるやつ'
const meta_keywords = ['タピオカ']
const og_description = 'タピオカつくるやつです'
const og_image_width = 1200
const og_image_height = 630
const fb_appid = ''
const tw_description = 'タピオカつくるやつです'
const tw_site = ''
const tw_creator = ''

const genHtml = (id, url) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <meta name="description" content=${meta_description}>
    <meta name="keywords" content=${meta_keywords.join(',')}>
    <meta property="og:locale" content="ja_JP">
    <meta property="og:type" content="website">
    <meta property="og:url" content=${url}>
    <meta property="og:title" content=${title}>
    <meta property="og:site_name" content=${site_name}>
    <meta property="og:description" content=${og_description}>
    <meta property="og:image" content=${url}>
    <meta property="og:image:width" content=${og_image_width}>
    <meta property="og:image:height" content=${og_image_height}>
    <meta property="fb:app_id" content=${fb_appid}>
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content=${title}>
    <meta name="twitter:description" content=${tw_description}>
    <meta name="twitter:image" content=${url}>
    <meta name="twitter:site" content=${tw_site}>
    <meta name="twitter:creator" content=${tw_creator}>
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
    const html = genHtml(id, url)
    res.set('cache-control', 'public, max-age=3600');
    res.send(html)
  }
})
exports.share = functions.https.onRequest(app)
