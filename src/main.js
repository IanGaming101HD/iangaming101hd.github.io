const express = require('express');
const fs = require('fs');

let app = express();
let port = 80;

app.enable('trust proxy');
app.set('etag', false);
app.use('/public', express.static(__dirname + '/public'))

app.get('/', async (req, res) => {
  let file = fs.readFileSync(__dirname + '/public/home/index.html', {
    encoding: 'utf-8'
  })
  // file = file.replace('word', 'word2')
  res.send(file);
});

app.get('/:page', (req, res, next) => {
  let page = req.params.page;

  let file;

  try {
    file = fs.readFileSync(__dirname + `/public/${page}/index.html`, {
      encoding: 'utf-8'
    })
  } catch (err) {
    res.redirect(301, '/error')
  }
  // check this ^^

  res.send(file);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
  console.log(`App listening on port ${port}`);
});

// require('./discord-bot/main.js');