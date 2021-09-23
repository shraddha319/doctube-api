const Video = require('../models/video.model');
const { sendResponse, deepMerge } = require('../lib');

const getVideos = async (req, res) => {
  const videos = await Video.find({});
  return sendResponse({
    res,
    success: true,
    payload: { videos },
  });
};

const postVideos = async (req, res) => {
  const savedVideos = await Video.create(req.body.videos);
  return sendResponse({
    res,
    success: true,
    payload: { videos: savedVideos },
    statusCode: 201,
  });
};

const getVideoById = (req, res) => {
  const { video } = req;
  return sendResponse({
    res,
    success: true,
    payload: { video },
  });
};

const updateVideoById = async (req, res) => {
  const { video, body: update } = req;
  deepMerge(video, update);
  await video.save();
  return sendResponse({ res, success: true, statusCode: 204 });
};

const deleteVideoById = async (req, res) => {
  const { video } = req;
  await video.remove();
  return sendResponse({
    res,
    success: true,
    statusCode: 204,
  });
};

module.exports = {
  getVideos,
  getVideoById,
  postVideos,
  updateVideoById,
  deleteVideoById,
};
