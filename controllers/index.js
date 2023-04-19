const {
  getAllContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateFavorite,
} = require("./contactsControllers");

const {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
} = require("./authControllers");

module.exports = {
  getAllContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateFavorite,
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
};
