/*
  Warnings:

  - Added the required column `duration` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxTourist` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tour" ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "maxTourist" INTEGER NOT NULL;
