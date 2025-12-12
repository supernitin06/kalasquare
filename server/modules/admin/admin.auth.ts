import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

export const authenticateAdmin = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.adminToken || req.headers.authorization?.split(" ")[1];
        
        if (!token) {
            return res.status(401).json({ message: "Authentication token missing" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret") as {
            id: number;
            email: string;
            role: string;
        };
        
        (req as any).admin = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired authentication token" });
    }
};

