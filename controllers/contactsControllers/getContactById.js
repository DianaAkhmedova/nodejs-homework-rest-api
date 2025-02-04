const { Contact } = require("../../models");

const { ctrlWrapper } = require("../../utils");
const {HttpError} = require("../../helpers");

const getContactById = async (req, res) => {
  const result = await Contact.findById(req.params.contactId);

  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = { getContactById: ctrlWrapper(getContactById) };
