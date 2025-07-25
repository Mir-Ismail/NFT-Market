const multer = require("multer");
const path = require("path");

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// File type filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/png",
    "image/gif",
    "image/webp",
    "image/jpeg", // add this
     "image/jpg",  // add this
    "video/mp4",
    "audio/mpeg",
  ];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

// Multer config
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB
});

// Export middleware
module.exports = upload;
