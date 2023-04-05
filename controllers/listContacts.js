const fs = require("fs/promises");
const contactsPath = require("../models");

const listContacts = async () => {
  return JSON.parse(await fs.readFile(contactsPath, "utf8"));
};

module.exports = listContacts;
