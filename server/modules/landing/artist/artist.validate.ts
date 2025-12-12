import { z } from "zod";
import type { Request, Response, NextFunction } from "express";



export const artistSchema = z.object({
    name: z.string().optional(),
    artistLink: z.string().url("Invalid artist link URL"),
    image: z.string().optional(),   // Base64 or URL allowed
});

export const artist = (req: Request, res: Response, next: NextFunction) => {

    const parsed = artistSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({
            error: parsed.error.message,
        });
    }
    req.body = parsed.data;
    next();
} 