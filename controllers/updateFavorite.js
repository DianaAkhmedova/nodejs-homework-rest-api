const Contact = require("../models");
const ctrlWrapper = require("../utils");
const { updateFavoriteSchema } = require("../schemas");

const updateFavorite = async (req, res) => {
  const { error } = updateFavoriteSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Missing field favorite",
    });
  }
  res.json(
    await Contact.findByIdAndUpdate(req.params.contactId, req.body, {
      new: true,
    })
  );
};

module.exports = { updateFavorite: ctrlWrapper(updateFavorite) };
