/*
  Warnings:

  - You are about to drop the column `email` on the `refreshTokens` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "refreshTokens" DROP COLUMN "email";
