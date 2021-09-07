const Playlist = require('../models/playlist.model');
const { sendResponse, deepMerge } = require('../lib');

const postPlaylist = async (req, res) => {
  const { userId, body: playlist } = req;

  const savedPlaylist = await Playlist.create({
    name: playlist.name,
    user: userId,
    videos: playlist.videoId ? [playlist.videoId] : [],
  });

  return sendResponse({
    res,
    success: true,
    payload: { playlist: savedPlaylist },
    statusCode: 201,
  });
};

const getPlaylistById = (req, res) => {
  const { playlist } = req;

  return sendResponse({
    res,
    success: true,
    payload: { playlist },
  });
};

const getPlaylistsOfUser = async (req, res) => {
  const { userId } = req;
  const playlists = await Playlist.find({
    user: userId,
  });

  return sendResponse({
    res,
    success: true,
    payload: { playlists },
  });
};

const updatePlaylistById = async (req, res) => {
  const { playlist, body } = req;
  deepMerge(playlist, body);
  await playlist.save();
  return sendResponse({ res, success: true, statusCode: 204 });
};

const deletePlaylistById = async (req, res) => {
  const { playlist } = req;
  await playlist.remove();
  return sendResponse({
    res,
    success: true,
    statusCode: 204,
  });
};

module.exports = {
  postPlaylist,
  getPlaylistsOfUser,
  getPlaylistById,
  updatePlaylistById,
  deletePlaylistById,
};
