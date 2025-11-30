import type { Request, Response } from "express";
import * as userService from "./user.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";





export const createUser = async (req: Request, res: Response) => {
   try {
      const userData = req.body;

    
      // Check email or callingNumber exist
      const userExists = await userService.findUserByEmailOrPhone(
         userData.email,
         userData.callingNumber
      );

      if (userExists) {
         if (userExists.email === userData.email) {
            return res.status(400).json({ message: "Email already registered" });
         }
         if (userExists.callingNumber === userData.callingNumber) {
            return res.status(400).json({ message: "callingNumber number already registered" });
         }
      }

     
      // Create new user
      const newUser = await userService.createUser(userData);

      return res.status(201).json({
         message: "User created successfully",
         data: newUser
      });

   } catch (error) {
      console.error("Error creating user:", error);
      return res.status(500).json({
         message: "Internal server error",
         error: process.env.NODE_ENV === "development" ? (error as Error).message : undefined
      });
   }
};


export const loginUser = async (req: Request, res: Response) => {
   try {
      const userData = req.body;
      const user = await userService.getUserByEmail(userData.email);
      if (!user) {
         return res.status(400).json({
            message: "Invalid email or password"
         });
      }
 
      return res.status(200).json({
         message: "User logged in successfully",
         data: user
      });   
   } catch (error) {
      console.error("Error logging in user:", error);
      return res.status(500).json({
         message: "Internal server error",
         error: process.env.NODE_ENV === "development" ? (error as Error).message : undefined
      });
   }
};





   export const getUser = async (req: Request, res: Response) => {
      try {
         const users = await userService.getUser()
         if (users && users.length > 0) {
            res.status(200).json({
               message: "Users retrieved successfully",
               data: users
            });
         } else {
            res.status(404).json({
               message: "No users found"
            });
         }
      } catch (error) {
         console.error("Error getting users:", error);
         res.status(500).json({
            message: "Internal server error",
            error: process.env.NODE_ENV === "development" ? (error as Error).message : undefined
         });
      }

   }