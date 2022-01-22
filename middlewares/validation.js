const createError = require("http-errors");

const validation = (schema) => {
  const middleware = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const newError = new createError(400, `${error.message}`);
      next(newError);
    }
    next();
  };
  return middleware;
};
module.exports = validation;
