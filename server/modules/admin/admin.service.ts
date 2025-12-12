import prisma from "../../config/db.config.js"
import type {CreateAdminDTO} from "./admin.type.js";


export const createAdmin = async (adminData: CreateAdminDTO) => {
    const newAdmin = await prisma.admin.create({
        data: adminData,
    });
    return newAdmin;
}


export const findAdminByEmail = async (email: string) => {
  return prisma.admin.findUnique({
    where: {
      email: email
    }
  });
}

export const findAdminById = async (id: number) => {
  return prisma.admin.findUnique({
    where: {
      id: id
    }
  });
}