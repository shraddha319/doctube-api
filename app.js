require('dotenv').config();

const express = require('express');
const { json } = require('body-parser');

const { PORT, NODE_ENV } = require('./config');
const { connectDB } = require('./lib');
const errorHandler = require('./middleware/errorHandler');
const notFoundHandler = require('./middleware/notFoundHandler');
const videosRouter = require('./routes/video');

if (NODE_ENV !== 'test') connectDB();

const app = express();
app.use(json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.use('/videos', videosRouter);

/**
 * 404 Error handler
 * Note: DO NOT MOVE. This should be the last route
 */
app.all('*', notFoundHandler);

/**
 * Error handling middleware
 * DO NOT MOVE
 */
app.use(errorHandler);

if (NODE_ENV !== 'test')
  app.listen(PORT, () => {
    console.log('server listening on port: ', PORT);
  });
else module.exports = app;
