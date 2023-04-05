const { asyncHandler } = require("../helpers");
const addSchema = require("../schemas");
const { update } = require("../models");

const updateContact = async (req, res, next) => {
  const { error } = addSchema.validate(req.body);
  if (!Object.keys(req.body).length) {
    return res.status(400).json({
      message: "Missing field",
    });
  }
  if (error) {
    return res.status(400).json({
      message: "Missing required name field",
    });
  }
  asyncHandler(() => update(req.params.contactId, req.body), res, next);
};

module.exports = updateContact;
