const fs = require("fs/promises");
const contactsPath = require("../models");
const listContacts = require("./listContacts");

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();

  const idx = contacts.findIndex((contact) => contact.id === contactId);

  if (idx === -1) {
    return null;
  }

  contacts[idx] = { id: contactId, ...body };

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[idx];
};

module.exports = updateContact;
