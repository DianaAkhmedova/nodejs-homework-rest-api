const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const contactsPath = require("../models");
const listContacts = require("./listContacts");

const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...body,
  };

  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

module.exports = addContact;
