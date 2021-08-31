const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: process.env.PORT,
  mongodb: process.env.MONGODB,
  rapidAPIKey: process.env.RAPID_API_KEY,
};
