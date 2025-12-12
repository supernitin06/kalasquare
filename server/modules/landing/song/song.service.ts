import prisma from "../../../config/db.config.js";
import type { SongDTO } from "./song.type.js";

export const createSongService = async (data: SongDTO) => {
  const song = await prisma.song.create({
    // Spread the validated DTO directly into Prisma's data object
    data,
  });

  return song;
};

export const getAllSongsService = async () => {
  return await prisma.song.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const getSongByIdService = async (id: number) => {
  return await prisma.song.findUnique({
    where: { id },
  });
};

export const updateSongService = async (id: number, data: Partial<SongDTO>) => {
  return await prisma.song.update({
    where: { id },
    data,
  });
};

export const deleteSongService = async (id: number) => {
  return await prisma.song.delete({
    where: { id },
  });
};


export const findSongByNameService = async (name: string) => {
  return await prisma.song.findFirst({
    where: {
      name: {
        equals: name,
        mode: "insensitive", // case-insensitive search
      },
    },
  });
};
