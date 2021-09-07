const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getPlaylistsOfUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId).required(),
  }),
};

const postPlaylist = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().required(),
    videoId: Joi.string().custom(objectId),
  }),
};

const getPlaylistById = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId).required(),
    playlistId: Joi.string().custom(objectId).required(),
  }),
};

const updatePlaylistById = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId).required(),
    playlistId: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    video: Joi.string().custom(objectId),
  }),
};

const deletePlaylistById = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId).required(),
    playlistId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  getPlaylistsOfUser,
  postPlaylist,
  getPlaylistById,
  updatePlaylistById,
  deletePlaylistById,
};
