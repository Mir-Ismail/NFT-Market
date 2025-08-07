const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");
const { errorHandler, notFound } = require("./middleware/errormiddleware");
const nftItemsRouter = require("./routes/nftRoutes");
const userRoutes = require("./routes/userRoutes");
const path = require("path");
const fs = require("fs");

dotenv.config();

const app = express();

// Middleware
// app.use(cors({ origin: "https://nft.softheight.tech", credentials: true }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", (req, res, next) => {
  const filePath = path.join(__dirname, "uploads", req.path);

  // Check if file exists
  if (fs.existsSync(filePath)) {
    // File exists, serve it normally
    return express.static(path.join(__dirname, "uploads"))(req, res, next);
  } else {
    const missingFile = req.path;
    if (!app.locals.missingFiles) {
      app.locals.missingFiles = new Set();
    }

    if (!app.locals.missingFiles.has(missingFile)) {
      app.locals.missingFiles.add(missingFile);
      console.log(
        `Missing upload file: ${missingFile} - will serve default image`
      );
    }

    return res.status(404).json({
      message: "File not found",
      defaultImage: "https://i.ibb.co/JpmYDNf/profile.jpg",
    });
  }
});

// Connect DB
connectDb();

// Routes
app.use("/api/nfts", nftItemsRouter);
app.use("/api/users", userRoutes);

// Error handler (optional)
app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 8234;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
