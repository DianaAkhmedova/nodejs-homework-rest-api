const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

const { authenticate } = require("../../middlewares");

router.get("/", authenticate, ctrl.getAllContacts);

router.get("/:contactId", authenticate, ctrl.getContactById);

router.post("/", authenticate, ctrl.addContact);

router.delete("/:contactId", authenticate, ctrl.removeContact);

router.put("/:contactId", authenticate, ctrl.updateContact);

router.patch("/:contactId/favorite", authenticate, ctrl.updateFavorite);

module.exports = router;
