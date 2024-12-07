const app = require('./app');
// const connectDB = require('./utils/dbConnect');

// connectDB();

const PORT = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
    console.log(`App listening on port ${port}`);
  });