const jwt = require('jsonwebtoken');
import type { Request, Response } from "express";

export const authenticateUser = (req: Request, res: Response, next: Function) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Authentication token missing" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string || "default_secret");
        (req as any).user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid authentication token" });
    }
};  
