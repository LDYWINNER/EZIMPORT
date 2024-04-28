/*
  Warnings:

  - A unique constraint covering the columns `[kakao_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "kakao_id" TEXT;

-- CreateTable
CREATE TABLE "CrawlingRecord" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "ople" TEXT,
    "iherb" TEXT,
    "rakuten" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CrawlingRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CrawlingRecord_userId_key" ON "CrawlingRecord"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_kakao_id_key" ON "User"("kakao_id");

-- AddForeignKey
ALTER TABLE "CrawlingRecord" ADD CONSTRAINT "CrawlingRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
