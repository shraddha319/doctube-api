const _ = require('lodash');
const Video = require('../models/video.model');
const { sendResponse, deepMerge } = require('../lib');

const getVideos = async (req, res, next) => {
  const videos = await Video.find({});
  return sendResponse({
    res,
    success: true,
    payload: { videos },
  });
};

const postVideos = async (req, res, next) => {
  const { videos } = req.body;
  const savedVideos = await Video.create(videos);
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

const updateVideoById = async (req, res, next) => {
  const { update } = req.body;
  const { video } = req;
  /**
   * if the updatedVideo doesn't match with schema, throws error. NO updates will be made. (even if the update obj was partially correct)
   * If update is empty, returns video without an error. SHould it throw an error?
   */
  deepMerge(video, update);
  await video.save();

  return sendResponse({ res, success: true, statusCode: 204 });
};

const deleteVideoById = async (req, res) => {
  const { video } = req;
  const removedVideo = await video.remove();
  return sendResponse({
    res,
    success: true,
    statusCode: 200,
    // eslint-disable-next-line no-underscore-dangle
    payload: { videoId: removedVideo._id },
  });
};

module.exports = {
  getVideos,
  getVideoById,
  postVideos,
  updateVideoById,
  deleteVideoById,
};
