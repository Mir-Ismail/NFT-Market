const fs = require('fs');
const path = require('path');
const connectDb = require('../config/db');
const User = require('../models/userModel');
const NFTItem = require('../models/NFTItem');

// Connect to database
connectDb();

const cleanupMissingFiles = async () => {
  try {
    console.log('Starting cleanup of missing file references...');
    
    // Get all files in uploads directory
    const uploadsDir = path.join(__dirname, '../uploads');
    const existingFiles = new Set();
    
    if (fs.existsSync(uploadsDir)) {
      const files = fs.readdirSync(uploadsDir);
      files.forEach(file => {
        existingFiles.add(file);
      });
    }
    
    console.log(`Found ${existingFiles.size} existing files in uploads directory`);
    
    // Clean up user profile pictures
    const users = await User.find({});
    let userUpdates = 0;
    
    for (const user of users) {
      if (user.pic && user.pic.includes('/uploads/')) {
        const fileName = path.basename(user.pic);
        if (!existingFiles.has(fileName)) {
          console.log(`Removing missing profile picture reference for user: ${user.name}`);
          user.pic = null;
          await user.save();
          userUpdates++;
        }
      }
    }
    
    // Clean up NFT file references
    const nfts = await NFTItem.find({});
    let nftUpdates = 0;
    
    for (const nft of nfts) {
      if (nft.file && nft.file.includes('/uploads/')) {
        const fileName = path.basename(nft.file);
        if (!existingFiles.has(fileName)) {
          console.log(`Removing missing file reference for NFT: ${nft.name}`);
          nft.file = null;
          await nft.save();
          nftUpdates++;
        }
      }
    }
    
    console.log(`Cleanup completed!`);
    console.log(`- Updated ${userUpdates} users with missing profile pictures`);
    console.log(`- Updated ${nftUpdates} NFTs with missing files`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error during cleanup:', error);
    process.exit(1);
  }
};

// Run cleanup if this script is executed directly
if (require.main === module) {
  cleanupMissingFiles();
}

module.exports = cleanupMissingFiles; 