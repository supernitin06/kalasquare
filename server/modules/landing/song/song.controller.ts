import type { Request, Response } from "express";
import {
    createSongService,
    getAllSongsService,
    getSongByIdService,
    updateSongService,
    deleteSongService,
    findSongByNameService,
} from "./song.service.js";

export const createSong = async (req: Request, res: Response) => {
    try {
        const songregister = req.body
        const existingSong = await findSongByNameService(songregister.name);

        if (existingSong) {
            return res.status(409).json({
                success: false,
                message: "Song already exists with this name",
            });
        }


        const song = await createSongService(req.body);
        return res.status(201).json({
            message: "Song created successfully",
            data: song,
        });
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ message: "Error creating song" });
    }
};

export const getAllSongs = async (req: Request, res: Response) => {
    try {
        const songs = await getAllSongsService();
        return res.status(200).json({
            message: "Songs fetched successfully",
            data: songs,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error fetching songs" });
    }
};

export const getSongById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const song = await getSongByIdService(id);
        if (!song) {
            return res.status(404).json({ message: "Song not found" });
        }

        return res.status(200).json({
            message: "Song fetched successfully",
            data: song,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error fetching song" });
    }
};

export const updateSong = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const song = await updateSongService(id, req.body);

        return res.status(200).json({
            message: "Song updated successfully",
            data: song,
        });
    } catch (error: any) {
        console.error(error);

        if (error?.code === "P2025") {
            return res.status(404).json({ message: "Song not found" });
        }

        return res.status(500).json({ message: "Error updating song" });
    }
};

export const deleteSong = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        await deleteSongService(id);

        return res.status(200).json({
            message: "Song deleted successfully",
        });
    } catch (error: any) {
        console.error(error);

        if (error?.code === "P2025") {
            return res.status(404).json({ message: "Song not found" });
        }

        return res.status(500).json({ message: "Error deleting song" });
    }
};
