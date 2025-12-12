import type { Request, Response } from "express";
import * as AdminService from './admin.service.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createAdmin = async (req: Request, res: Response) => {
   try {
      const adminData = req.body;
      
      // Check if admin with email already exists
      const adminExists = await AdminService.findAdminByEmail(adminData.email);
      if (adminExists) {
         return res.status(400).json({
            message: "Email already registered"
         });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(adminData.password, 10);
      
      // Create admin with hashed password
      const newAdmin = await AdminService.createAdmin({
         ...adminData,
         password: hashedPassword
      });

      // Generate JWT token
      const token = jwt.sign(
         { id: newAdmin.id, email: newAdmin.email, role: newAdmin.role },
         process.env.JWT_SECRET || "default_secret",
         { expiresIn: "7d" }
      );

      // Set token in HTTP-only cookie
      res.cookie("adminToken", token, {
         httpOnly: true,
         secure: process.env.NODE_ENV === "production",
         sameSite: "strict",
         maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });

      // Remove password from response
      const { password, ...adminWithoutPassword } = newAdmin;

      return res.status(201).json({
         message: "Admin created successfully",
         data: adminWithoutPassword,
         token: token
      });
   } catch (error) {
      console.error("Error creating admin:", error);
      return res.status(500).json({
         message: "Internal server error",
         error: process.env.NODE_ENV === "development" ? (error as Error).message : undefined
      });
   }
};

export const loginAdmin = async (req: Request, res: Response) => {
   try {
      const { email, password } = req.body;

      // Find admin by email
      const admin = await AdminService.findAdminByEmail(email);
      if (!admin) {
         return res.status(401).json({
            message: "Invalid email or password"
         });
      }

      // Compare password with hashed password
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
         return res.status(401).json({
            message: "Invalid email or password"
         });
      }

      // Generate JWT token
      const token = jwt.sign(
         { id: admin.id, email: admin.email, role: admin.role },
         process.env.JWT_SECRET || "default_secret",
         { expiresIn: "7d" }
      );

      // Set token in HTTP-only cookie
      res.cookie("adminToken", token, {
         httpOnly: true,
         secure: process.env.NODE_ENV === "production",
         sameSite: "strict",
         maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });

      // Remove password from response
      const { password: _, ...adminWithoutPassword } = admin;

      return res.status(200).json({
         message: "Admin logged in successfully",
         data: adminWithoutPassword,
         token: token
      });
   } catch (error) {
      console.error("Error logging in admin:", error);
      return res.status(500).json({
         message: "Internal server error",
         error: process.env.NODE_ENV === "development" ? (error as Error).message : undefined
      });
   }
};