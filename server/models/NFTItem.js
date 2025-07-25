const mongoose = require("mongoose");
const { Schema } = mongoose;

const nftItemSchema = new Schema({
  file: {
    originalName: { type: String, required: true },
    storagePath: { type: String, required: true },
    mimeType: {
      type: String,
      required: true,
      enum: [
        "image/png",
        "image/gif",
        "image/webp",
        "image/jpeg",
        "image/jpg",
        "video/mp4",
        "audio/mpeg",
      ],
    },
    size: { type: Number, required: true },
  },

  name: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: [
      "Art",
      "Virtual Worlds",
      "Purchases",
      "NFT Gifts",
      "Collectibles",
      "Gifts",
      "Trading Cards",
    ],
  },
  description: { type: String },
  price: { type: Number, required: true },
  royalties: { type: Number, default: 0 },
  size: { type: String },
  copies: { type: Number, default: 1 },

  creator: { type: String },

  createdAt: { type: Date, default: Date.now },
});

const NFTItem = mongoose.model("NFTItem", nftItemSchema);
module.exports = NFTItem;
