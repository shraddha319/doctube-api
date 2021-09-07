const mongoose = require('mongoose');

const playlistSchema = mongoose.Schema(
  {
    // _id: playlist ID
    name: {
      type: String,
      required: true,
    },
    user: {
      // _id: user ID
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    videos: [
      {
        // _id: video ID
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video',
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
