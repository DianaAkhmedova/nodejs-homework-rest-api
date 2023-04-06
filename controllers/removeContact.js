const ctrlWrapper = require("../utils");
const HttpError = require("../helpers");
const { remove } = require("../models");

const removeContact = async (req, res, next) => {
  const result = await remove(req.params.contactId);
  if (!result) {
    throw HttpError(404);
  }
  res.json({ message: "Contact deleted" });
};

module.exports = { removeContact: ctrlWrapper(removeContact) };
