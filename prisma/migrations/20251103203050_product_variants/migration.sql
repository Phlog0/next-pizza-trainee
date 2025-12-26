/*
  Warnings:

  - You are about to drop the `ProductItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."CartItem" DROP CONSTRAINT "CartItem_productItemId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ProductItem" DROP CONSTRAINT "ProductItem_productId_fkey";

-- DropTable
DROP TABLE "public"."ProductItem";

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "size" INTEGER,
    "pizzaType" INTEGER,
    "productId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productItemId_fkey" FOREIGN KEY ("productItemId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
