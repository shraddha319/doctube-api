const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  youtubeId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  imdbPage: String,
  imageURL: String,
  description: String,
  tagline: String,
  genre: String,
  languages: [String],
  countries: [String],
  rating: {
    imdb: Number,
    rottenTomatoes: Number,
  },
  tags: [String],
  officialSite: String,
  releaseDate: {
    day: Number,
    year: Number,
    month: Number,
  },
  directors: [String],
  durationMin: Number,
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
