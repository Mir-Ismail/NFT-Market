const NFTItem = require("../models/NFTItem");

const createNFT = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "File is required" });
    }

    const {
      name,
      category,
      description,
      price,
      royalties,
      width,
      height,
      copies,
      totalCopies,
    } = req.body;

    // Validate required fields
    if (!name || !category) {
      return res.status(400).json({
        error: "Name and category are required",
      });
    }

    // Validate price - ensure it's a valid number
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      return res.status(400).json({
        error: "Valid price is required (must be a positive number)",
      });
    }

    // Validate width and height
    if (
      !width ||
      !height ||
      isNaN(parseInt(width)) ||
      isNaN(parseInt(height))
    ) {
      return res.status(400).json({
        error: "Valid width and height are required",
      });
    }

    const size = `${width}x${height}`;

    const nftItem = new NFTItem({
      file: `/uploads/${req.file.filename}`,
      name,
      category,
      description,
      price: parsedPrice,
      royalties: parseInt(royalties) || 0,
      size,
      copies: parseInt(copies) || 1,
      totalCopies: parseInt(totalCopies) || 1,
      author: req.user._id, // Use authenticated user's ID
    });

    await nftItem.save();

    // Populate author details for response
    await nftItem.populate('author', 'name email pic');

    res.status(201).json({
      message: "NFT created successfully",
      nftItem,
    });
  } catch (err) {
    console.error("NFT Upload Error:", err);
    res.status(500).json({ error: err.message });
  }
};

const getAllNFTs = async (req, res) => {
  try {
    const items = await NFTItem.find()
      .sort({ createdAt: -1 })
      .populate("author", "name email pic");
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single NFT by ID
const getNFTById = async (req, res) => {
  try {
    const item = await NFTItem.findById(req.params.id).populate(
      "author",
      "name email pic"
    );

    if (!item) {
      return res.status(404).json({ error: "NFT not found" });
    }
    res.json(item);
  } catch (err) {
    console.error("Backend - Error fetching NFT:", err);
    res.status(500).json({ error: err.message });
  }
};

// Get NFTs by creator
const getNFTsByCreator = async (req, res) => {
  try {
    const items = await NFTItem.find({ author: req.params.creatorId })
      .sort({ createdAt: -1 })
      .populate("author", "name email pic");
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get NFTs by logged-in user
const getMyNFTs = async (req, res) => {
  try {
    const items = await NFTItem.find({ author: req.user._id })
      .sort({ createdAt: -1 })
      .populate("author", "name email pic");
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllNFTs,
  getNFTById,
  createNFT,
  getNFTsByCreator,
  getMyNFTs,
};
