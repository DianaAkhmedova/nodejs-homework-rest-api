const { asyncHandler } = require("../helpers");
const { listContacts } = require("../models");

const getAllContacts = (req, res, next) => {
  asyncHandler(() => listContacts(), res, next);
};

module.exports = getAllContacts;
