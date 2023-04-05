const { asyncHandler } = require("../helpers");
const { remove } = require("../models");

const removeContact = async (req, res, next) => {
  asyncHandler(() => remove(req.params.contactId), res, next);
};

module.exports = removeContact;
