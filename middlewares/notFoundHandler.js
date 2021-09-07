const { ApplicationError, ErrorTypes } = require('../lib');

const { RESOURCE_NOT_FOUND } = ErrorTypes;

const notFoundHandler = (req, res, next) => {
  const err = new ApplicationError(RESOURCE_NOT_FOUND, {
    message: `${req.originalUrl} not found`,
  });
  return next(err);
};

module.exports = notFoundHandler;
