const { asyncHandler } = require("../helpers");
const addSchema = require("../schemas");
const { add } = require("../models");

const addContact = async (req, res, next) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Missing required name field",
    });
  }
  res.status(201);
  asyncHandler(() => add(req.body), res, next);
};

module.exports = addContact;
