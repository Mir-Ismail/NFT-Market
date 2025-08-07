const express = require("express");
const router = express.Router();
const {
  getAllNFTs,
  getNFTById,
  createNFT,
  getNFTsByCreator,
  getMyNFTs,
} = require("../controller/nftItems");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// Public routes
router.get("/", getAllNFTs);
router.get("/:id", getNFTById);
router.get("/creator/:Id", getNFTsByCreator);

// Protected routes
router.post("/create", protect, upload.single("file"), createNFT);
router.get("/my-nfts", protect, getMyNFTs);

module.exports = router;
