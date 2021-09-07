const Video = require('../models/video.model');
const { ApplicationError, ErrorTypes } = require('../lib');

const { RESOURCE_NOT_FOUND } = ErrorTypes;

const validateVideoId = async (req, res, next) => {
  const { videoId } = req.params;
  const video = await Video.findById(videoId);

  if (!video)
    return next(
      new ApplicationError(RESOURCE_NOT_FOUND, {
        message: `${videoId} not found`,
      }),
    );

  req.video = video;
  req.videoId = videoId;
  return next();
};

module.exports = validateVideoId;
