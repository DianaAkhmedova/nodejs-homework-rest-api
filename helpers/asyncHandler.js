const e = require("express");
const HttpError = require("./HttpError");

const asyncHandler = async (clb, res, next) => {
  try {
    const result = await clb();

    if (!result) {
      throw HttpError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = asyncHandler;
