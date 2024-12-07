const express = require('express');
const fs = require('fs');

let app = express();

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

// require('./discord-bot/main.js');


const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

// Reference

// const app = express();

// // Middleware
// app.use(cors()); // Enable CORS for cross-origin requests
// app.use(express.json()); // Parse JSON bodies in requests

// // Routes
// app.use('/api/users', userRoutes);
// app.use('/api/posts', postRoutes);

// // Default route for 404
// app.use((req, res, next) => {
//   res.status(404).json({ message: 'Route not found' });
// });

module.exports = app;