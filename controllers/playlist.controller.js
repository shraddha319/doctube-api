const Playlist = require('../models/playlist.model');
const { sendResponse } = require('../lib');

const postPlaylist = async (req, res) => {
  const { userId, body: playlist } = req;

  const savedPlaylist = await Playlist.create({
    name: playlist.name,
    user: userId,
    videos: playlist.videos || [],
  });
  const populatedPlaylist = await savedPlaylist
    .populate('videos')
    .execPopulate();

  return sendResponse({
    res,
    success: true,
    payload: { playlist: populatedPlaylist },
    statusCode: 201,
  });
};

const getPlaylistById = async (req, res) => {
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
  })
    .populate('videos')
    .exec();

  return sendResponse({
    res,
    success: true,
    payload: {
      playlists,
    },
  });
};

const updatePlaylistById = async (req, res) => {
  const { playlist, body } = req;
  playlist.name = body?.name ? body.name : playlist.name;

  playlist.videos =
    body.type === 'add'
      ? playlist.videos.concat(body.videos)
      : playlist.videos.filter(({ _id }) => !body.videos.includes(String(_id)));

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
