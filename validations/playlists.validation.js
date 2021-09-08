const Joi = require('joi');
const { objectId } = require('./custom.validation');

const postPlaylist = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    videoId: Joi.string().custom(objectId),
  }),
};

const getPlaylistById = {
  params: Joi.object().keys({
    playlistId: Joi.string().custom(objectId).required(),
  }),
};

const updatePlaylistById = {
  params: Joi.object().keys({
    playlistId: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    videos: Joi.array().items(objectId),
    type: Joi.string().valid('add', 'remove').required(),
  }),
};

const deletePlaylistById = {
  params: Joi.object().keys({
    playlistId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  postPlaylist,
  getPlaylistById,
  updatePlaylistById,
  deletePlaylistById,
};
