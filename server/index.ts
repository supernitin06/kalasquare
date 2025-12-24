import http from "http";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

http.createServer(app).listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

