import { z } from 'zod';
import type { Request, Response, NextFunction } from 'express';

export const createAdminSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(['SUPER_ADMIN', 'ADMIN']).optional().default('ADMIN'),
});

export const loginAdminSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export const validateCreateAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = createAdminSchema.safeParse(req.body);

  if (!result.success) {
    const message = result.error.issues?.[0]?.message || "Invalid input";
    return res.status(400).json({ error: message });
  }

  req.body = result.data;
  next();
};

export const validateLoginAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = loginAdminSchema.safeParse(req.body);

  if (!result.success) {
    const message = result.error.issues?.[0]?.message || "Invalid input";
    return res.status(400).json({ error: message });
  }

  req.body = result.data;
  next();
};

