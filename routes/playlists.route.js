const express = require('express');
const { catchAsync } = require('../lib');
const { validate, validatePlaylistId } = require('../middlewares');
const {
  postPlaylist,
  getPlaylistsOfUser,
  getPlaylistById,
  updatePlaylistById,
  deletePlaylistById,
} = require('../controllers/playlist.controller');
const validation = require('../validations/playlists.validation');

const router = express.Router();

router
  .route('/')
  .get(validate(validation.getPlaylistsOfUser), catchAsync(getPlaylistsOfUser))
  .post(validate(validation.postPlaylist), catchAsync(postPlaylist));

router.use('/:playlistId', catchAsync(validatePlaylistId));

router
  .route('/:playlistId')
  .get(validate(validation.getPlaylistById), catchAsync(getPlaylistById))
  .post(validate(validation.updatePlaylistById), catchAsync(updatePlaylistById))
  .delete(
    validate(validation.deletePlaylistById),
    catchAsync(deletePlaylistById),
  );

module.exports = router;

/**
 * get /user/:userId/playlists
 * post /user/:userId/playlists
 * get /user/:userId/playlists/:plId
 * post /user/:userId/playlists/:plId
 * delete /user/:userId/playlists/:plId
 */
