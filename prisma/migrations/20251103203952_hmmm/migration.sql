/*
  Warnings:

  - You are about to drop the column `productItemId` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."CartItem" DROP CONSTRAINT "CartItem_productItemId_fkey";

-- DropForeignKey
ALTER TABLE "public"."product" DROP CONSTRAINT "product_productId_fkey";

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "productItemId",
ADD COLUMN     "productId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "public"."product";

-- CreateTable
CREATE TABLE "ProductVariant" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "size" INTEGER,
    "pizzaType" INTEGER,
    "productId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
