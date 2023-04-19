const { Contact } = require("../../models");
const { ctrlWrapper } = require("../../utils");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;

  if (Boolean(favorite)) {
    const result = await Contact.find({ owner, favorite }, "", {
      skip,
      limit,
    }).populate("owner", "email");

    res.json(result);
  }

  res.json(
    await Contact.find({ owner }, "", { skip, limit }).populate(
      "owner",
      "email"
    )
  );
};

module.exports = { getAllContacts: ctrlWrapper(getAllContacts) };
