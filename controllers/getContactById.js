const { asyncHandler } = require("../helpers");
const { getContact } = require("../models");

const getContactById = (req, res, next) => {
  asyncHandler(() => getContact(req.params.contactId), res, next);
};

module.exports = getContactById;
