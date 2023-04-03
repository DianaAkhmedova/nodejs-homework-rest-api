const express = require("express");
const Joi = require("joi");
const router = express.Router();

const { asyncHandler } = require("../../helpers");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

router.get("/", async (req, res, next) => {
  asyncHandler(() => listContacts(), res, next);
});

router.get("/:contactId", async (req, res, next) => {
  asyncHandler(() => getContactById(req.params.contactId), res, next);
});

router.post("/", async (req, res, next) => {
  const { error } = addSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: "Missing required name field",
    });
  }

  res.status(201);
  asyncHandler(() => addContact(req.body), res, next);
});

router.delete("/:contactId", async (req, res, next) => {
  asyncHandler(() => removeContact(req.params.contactId), res, next);
});

router.put("/:contactId", async (req, res, next) => {
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

  asyncHandler(() => updateContact(req.params.contactId, req.body), res, next);
});

module.exports = router;
