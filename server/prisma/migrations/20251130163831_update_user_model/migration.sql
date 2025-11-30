/*
  Warnings:

  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `language` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `pincode` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `whatsappNumber` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
DROP COLUMN "category",
DROP COLUMN "language",
DROP COLUMN "password",
DROP COLUMN "pincode",
DROP COLUMN "state",
DROP COLUMN "whatsappNumber",
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "videoLink" TEXT;
