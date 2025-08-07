const express = require("express");
const {
  registerUser,
  loginUser,
  getUserById,
  getUsersByRole,
  updateUserProfile,
} = require("../controller/userController");
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/role/:role", getUsersByRole);
router.get("/:id", getUserById);
router.put("/:id", updateUserProfile);

module.exports = router;
