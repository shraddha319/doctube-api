const express = require('express');
const { catchAsync } = require('../lib');
const {
  tokenVerifier,
  validate,
  validatePlaylistId,
} = require('../middlewares');
const {
  postPlaylist,
  getPlaylistsOfUser,
  getPlaylistById,
  updatePlaylistById,
  deletePlaylistById,
} = require('../controllers/playlist.controller');

const router = express.Router();

router
  .route('/')
  .get(catchAsync(getPlaylistsOfUser))
  .post(catchAsync(postPlaylist));

router.use('/:playlistId', catchAsync(validatePlaylistId));

router
  .route('/:playlistId')
  .get(catchAsync(getPlaylistById))
  .post(catchAsync(updatePlaylistById))
  .delete(catchAsync(deletePlaylistById));

module.exports = router;
