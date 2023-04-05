const { listContacts } = require("../models");
const ctrlWrapper = require("../utils");

const getAllContacts = async (req, res) => {
  res.json(await listContacts());
};

module.exports = { getAllContacts: ctrlWrapper(getAllContacts) };
