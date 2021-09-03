const Video = require('../models/video');
const { ApplicationError, ErrorTypes } = require('../lib');

const { RESOURCE_NOT_FOUND } = ErrorTypes;

const validateVideoId = async (req, res, next, videoId) => {
  try {
    const video = await Video.findById(videoId);

    if (!video) return next(new ApplicationError(RESOURCE_NOT_FOUND));

    req.video = video;
    req.videoId = videoId;
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = validateVideoId;
