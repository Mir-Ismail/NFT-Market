const NFTItem = require("../models/NFTItem");

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "File is required" });
    }

    const { name, category, description, price, royalties, size, copies } =
      req.body;

    const nftItem = new NFTItem({
      file: {
        originalName: req.file.originalname,
        storagePath: req.file.path,
        mimeType: req.file.mimetype,
        size: req.file.size,
      },
      name,
      category,
      description,
      price: parseFloat(price),
      royalties: parseInt(royalties) || 0,
      size,
      copies: parseInt(copies) || 1,
      creator: "current_user",
    });

    await nftItem.save();

    res.status(201).json({
      message: "NFT created successfully",
      nftItem,
    });
  } catch (err) {
    console.error("NFT Upload Error:", err);
    res.status(500).json({ error: err.message });
  }
};

const getItems = async (req, res) => {
  try {
    const items = await NFTItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getItems,
  uploadFile,
};
