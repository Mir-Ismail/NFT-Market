const mongoose = require("mongoose");
const { Schema } = mongoose;

const nftItemSchema = new Schema({
  file: {
    type: Schema.Types.Mixed,
    required: true,
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
  size: { type: String, required: true },
  copies: { type: Number, default: 1 },
  totalCopies: { type: Number, default: 1 },

  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },

  createdAt: { type: Date, default: Date.now },
});

const NFTItem = mongoose.model("NFTItem", nftItemSchema);
module.exports = NFTItem;
