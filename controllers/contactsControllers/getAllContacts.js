const { Contact } = require("../../models");
const { ctrlWrapper } = require("../../utils");

const getAllContacts = async (req, res) => {
  res.json(await Contact.find());
};

module.exports = { getAllContacts: ctrlWrapper(getAllContacts) };
