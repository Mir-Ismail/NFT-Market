const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");
const { errorHandler, notFound } = require("./middleware/errormiddleware");
const nftItemsRouter = require("./routes/items");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads")); // Serve static uploaded files

// Connect DB
connectDb();

// Routes
app.use("/api/nft", nftItemsRouter);

// Error handler (optional)
app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
