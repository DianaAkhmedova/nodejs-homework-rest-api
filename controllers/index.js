const {
  getAllContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateFavorite,
} = require("./contactsControllers");

const { register, login } = require("./authControllers");

module.exports = {
  getAllContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateFavorite,
  register,
  login,
};
