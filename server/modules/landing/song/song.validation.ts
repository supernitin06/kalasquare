import { z } from "zod";
import type { Request, Response, NextFunction } from "express";

export const songSchema = z.object({
  name: z.string().optional(),
  songLink: z.string().url("Invalid song link URL"),
  views: z.string().min(1, "Views is required"),
  image: z.string().optional(), // Base64 or URL allowed
});



export const validateSong = (req: Request, res: Response, next: NextFunction) => {
  const parsed = songSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: parsed.error.message,
    });
  }

  req.body = parsed.data;
  next();
};
