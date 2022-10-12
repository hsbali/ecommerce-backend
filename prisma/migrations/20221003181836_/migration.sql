/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `operators` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fName` to the `operators` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lName` to the `operators` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `operators` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "operators" ADD COLUMN     "fName" TEXT NOT NULL,
ADD COLUMN     "lName" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "operators_username_key" ON "operators"("username");
