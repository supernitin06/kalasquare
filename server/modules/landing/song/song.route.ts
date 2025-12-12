import { Router } from "express";
import {
  createSong,
  getAllSongs,
  getSongById,
  updateSong,
  deleteSong,
} from "./song.controller.js";

import {validateSong} from "./song.validation.js";

const router = Router();

// Public Routes
router.get("/songs", getAllSongs);
router.get("/song/:id", getSongById);

// CRUD with Validation Only
router.post("/registersong", validateSong, createSong);
router.put("/song/:id", validateSong, updateSong);
router.delete("/song/:id", deleteSong);

export default router;
