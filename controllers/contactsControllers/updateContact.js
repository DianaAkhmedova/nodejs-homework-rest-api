const { Contact } = require("../../models");
const { ctrlWrapper } = require("../../utils");
const { addSchema } = require("../../schemas");

const updateContact = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (!Object.keys(req.body).length) {
    return res.status(400).json({
      message: "Missing field",
    });
  }
  if (error) {
    return res.status(400).json({
      message: "Missing required name field",
    });
  }
  res.json(
    await Contact.findByIdAndUpdate(req.params.contactId, req.body, {
      new: true,
    })
  );
};

module.exports = { updateContact: ctrlWrapper(updateContact) };
