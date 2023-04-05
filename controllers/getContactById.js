const fs = require("fs/promises");
const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  return contacts.find((contact) => contact.id === contactId) || null;
};

module.exports = getContactById;
