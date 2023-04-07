const Contact = require("../models");
const ctrlWrapper = require("../utils");
const HttpError = require("../helpers");

const removeContact = async (req, res) => {
  const result = await Contact.findByIdAndDelete(req.params.contactId);
  if (!result) {
    throw HttpError(404);
  }
  res.json({ message: "Contact deleted" });
};

module.exports = { removeContact: ctrlWrapper(removeContact) };
