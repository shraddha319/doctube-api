const express = require('express');
const { catchAsync } = require('../lib');
const { validate, validateVideoId } = require('../middlewares');
const {
  getVideos,
  getVideoById,
  postVideos,
} = require('../controllers/video.controller');

const router = express.Router();

router.route('/').get(catchAsync(getVideos)).post(catchAsync(postVideos));

router.use('/:videoId', catchAsync(validateVideoId));

router.route('/:videoId').get(getVideoById);

module.exports = router;
