const express = require('express');
const { catchAsync } = require('../lib');
const { validate, validateVideoId } = require('../middlewares');
const {
  getVideos,
  getVideoById,
  postVideos,
} = require('../controllers/video.controller');
const validation = require('../validations/videos.validation');

const router = express.Router();

router
  .route('/')
  .get(catchAsync(getVideos))
  .post(validate(postVideos), catchAsync(postVideos));

router.use('/:videoId', catchAsync(validateVideoId));

router.route('/:videoId').get(validate(validation.getVideoById), getVideoById);

module.exports = router;
