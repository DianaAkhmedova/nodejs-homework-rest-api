const { Contact } = require("../../models");
const { ctrlWrapper } = require("../../utils");
const { addSchema } = require("../../schemas");

const addContact = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Missing required name field",
    });
  }
  const { _id: owner } = req.user;
  res.status(201).json(await Contact.create({ ...req.body, owner }));
};

module.exports = { addContact: ctrlWrapper(addContact) };
