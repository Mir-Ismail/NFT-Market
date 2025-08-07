const config = {
  // API Configuration
  // API_BASE_URL: "https://nftmarket.softheight.com",
  API_BASE_URL: "http://localhost:8234",

  // Environment
  NODE_ENV: process.env.NODE_ENV || "development",

  // Feature flags
  ENABLE_DEBUG: process.env.NODE_ENV === "development",
};

export default config;
