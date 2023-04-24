const { User } = require("../../models");
const { ctrlWrapper } = require("../../utils");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  await User.findByIdAndUpdate(_id, { subscription });

  res.json({
    message: `Subscription successfully changed to '${subscription}'`,
  });
};

module.exports = { updateSubscription: ctrlWrapper(updateSubscription) };
