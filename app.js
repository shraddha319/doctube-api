require('dotenv').config();

const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const { PORT, NODE_ENV } = require('./config');
const { connectDB } = require('./lib');
const { notFoundHandler, errorHandler } = require('./middlewares');
const userRouter = require('./routes/users.route');
const authRouter = require('./routes/auth.route');
const videosRouter = require('./routes/videos.route');

if (NODE_ENV !== 'test') connectDB();

const app = express();

app.use(json());
app.use(cors());
app.use('/videos', videosRouter);
app.use('/auth', authRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

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

const server = app.listen(PORT, () => {
  console.log('server listening on port: ', PORT);
});

module.exports = { app, server };
