const Playlist = require('../models/playlist.model');
const { ApplicationError, ErrorTypes } = require('../lib');

const { RESOURCE_NOT_FOUND } = ErrorTypes;

const validatePlaylistId = async (req, res, next) => {
  const { playlistId } = req.params;
  const playlist = await Playlist.findById(playlistId)
    .populate('videos')
    .exec();

  if (!playlist)
    return next(
      new ApplicationError(RESOURCE_NOT_FOUND, {
        message: `${playlistId} not found`,
      }),
    );

  req.playlistId = playlistId;
  req.playlist = playlist;
  return next();
};

module.exports = validatePlaylistId;
