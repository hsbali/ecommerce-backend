/*
  Warnings:

  - You are about to drop the column `username` on the `operators` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `operators` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "operators_username_key";

-- AlterTable
ALTER TABLE "operators" DROP COLUMN "username";

-- CreateIndex
CREATE UNIQUE INDEX "operators_email_key" ON "operators"("email");
