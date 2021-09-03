const express = require('express');
const { catchAsync } = require('../lib');
const { validateVideoId } = require('../middleware');

const router = express.Router();
const {
  getVideos,
  getVideoById,
  postVideos,
  deleteVideoById,
} = require('../controller/video');

router.route('/').get(catchAsync(getVideos)).post(catchAsync(postVideos));

router.param('videoId', validateVideoId);

router.route('/:videoId').get(getVideoById).delete(catchAsync(deleteVideoById));

module.exports = router;
