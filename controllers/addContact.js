const ctrlWrapper = require("../utils");
const addSchema = require("../schemas");
const { add } = require("../models");

const addContact = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Missing required name field",
    });
  }
  res.status(201).json(await add(req.body));
};

module.exports = { addContact: ctrlWrapper(addContact) };
