const Joi = require('joi');
const { objectId } = require('./custom.validation');

const video = Joi.object().keys({
  youtubeId: Joi.string().required(),
  title: Joi.string().required(),
  imdbPage: Joi.string(),
  imageURL: Joi.string(),
  description: Joi.string(),
  tagline: Joi.string(),
  genre: Joi.string(),
  languages: Joi.array().items(Joi.string()),
  countries: Joi.array().items(Joi.string()),
  rating: Joi.object().keys({
    imdb: Joi.number(),
    rottenTomatoes: Joi.number(),
  }),
  tags: Joi.array().items(Joi.string()),
  officialSite: Joi.string(),
  releaseDate: Joi.object().keys({
    day: Joi.number().integer().min(1).max(31),
    year: Joi.number().integer(),
    month: Joi.number().integer().min(1).max(12),
  }),
  directors: Joi.array().items(Joi.string()),
  durationMin: Joi.number(),
});

const getVideoById = {
  params: Joi.object().keys({
    videoId: Joi.string().required().custom(objectId),
  }),
};

const postVideos = {
  body: Joi.object().keys({
    videos: Joi.array().items(video),
  }),
};

module.exports = {
  getVideoById,
  postVideos,
  video,
};
