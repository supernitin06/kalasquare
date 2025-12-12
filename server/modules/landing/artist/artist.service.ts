import prisma from "../../../config/db.config.js";
import type  {artistDTO} from "./artist.type.js";



export const create = async (data: artistDTO) => {
    return await prisma.artist.create({
        data
    });
}