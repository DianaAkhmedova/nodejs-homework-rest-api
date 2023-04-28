const express = require("express");

const router = express.Router();

const { validateBody } = require("../../utils");

const { authenticate, upload } = require("../../middlewares");

const {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
} = require("../../schemas");

const ctrl = require("../../controllers");

router.post("/register", validateBody(registerSchema), ctrl.register);

router.post("/login", validateBody(loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/",
  authenticate,
  validateBody(updateSubscriptionSchema),
  ctrl.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
