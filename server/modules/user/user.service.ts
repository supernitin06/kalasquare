import prisma from "../../config/db.config.js"
import type {CreateUserDTO} from "./user.type.js";

export const createUser = async (userData: CreateUserDTO) => {
    return prisma.user.create({
        data: userData,
    });
};


export const findUserByEmailOrPhone = async (email: string, callingNumber: string) => {
  return prisma.user.findFirst({
    where: {
      OR: [
        { email },
        { callingNumber }
      ]
    }
  });
};



export const getUserByEmail = async (email: string) => {
    return prisma.user.findUnique({
        where: {    
            email
        }
    });
};

export const getUser = async () => {
    const user = await prisma.user.findMany();
    return user;
}

