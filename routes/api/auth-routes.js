const express = require("express");

const router = express.Router();

const { validateBody } = require("../../utils");
const {
  userSchema,
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
} = require("../../schemas");
const ctrl = require("../../controllers");

router.post("/register", validateBody(registerSchema), ctrl.register);

router.post("/login", validateBody(loginSchema), ctrl.login);

module.exports = router;
