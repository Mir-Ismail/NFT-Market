const express = require("express");
const router = express.Router();
const { getItems, uploadFile } = require("../controller/nftItems");
const upload = require("../middleware/uploadMiddleware");

router.get("/", getItems);

router.post("/create", upload.single("file"), uploadFile);

module.exports = router;
