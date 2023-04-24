const { getAllContacts } = require("./getAllContacts");
const { getContactById } = require("./getContactById");
const { removeContact } = require("./removeContact");
const { addContact } = require("./addContact");
const { updateContact } = require("./updateContact");
const { updateFavorite } = require("./updateFavorite");

module.exports = {
  getAllContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateFavorite,
};
