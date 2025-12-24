import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./modules/user/user.route.js";
import adminRoutes from "./modules/admin/admin.route.js";
import songRoute from "./modules/landing/song/song.route.js";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/landing", songRoute);

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

export default app;
