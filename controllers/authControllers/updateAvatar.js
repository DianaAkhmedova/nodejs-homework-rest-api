const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models");
const { ctrlWrapper } = require("../../utils");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, filename } = req.file;
  const avatarName = `${_id}_${filename}`;
  const resultUpload = path.join(avatarsDir, avatarName);

  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("public", "avatars", avatarName);

  Jimp.read(avatarURL).then((avatar) => {
    return avatar.resize(250, 250).write(avatarURL);
  });

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
};

module.exports = { updateAvatar: ctrlWrapper(updateAvatar) };
