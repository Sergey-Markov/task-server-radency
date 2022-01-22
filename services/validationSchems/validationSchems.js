const Joi = require("joi");

const joiSchemaForPost = Joi.object({
  name: Joi.string(),
  category: Joi.symbol()
    .map({
      "Random Tought": Symbol("Random Tought"),
      Task: Symbol("Task"),
      Idea: Symbol("Idea"),
    })
    .required(),
  content: Joi.string(),
});

const joiSchemaForPatch = Joi.object({
  content: Joi.string(),
  archived: Joi.bool(),
});

module.exports = {
  joiSchemaForPost,
  joiSchemaForPatch,
};
