/*
  Warnings:

  - You are about to drop the column `userId` on the `refreshTokens` table. All the data in the column will be lost.
  - Added the required column `sub` to the `refreshTokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userAgent` to the `refreshTokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `refreshTokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "refreshTokens" DROP COLUMN "userId",
ADD COLUMN     "sub" INTEGER NOT NULL,
ADD COLUMN     "userAgent" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;
