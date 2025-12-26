/*
  Warnings:

  - You are about to drop the column `pizzaSize` on the `ProductVariant` table. All the data in the column will be lost.
  - You are about to drop the column `pizzaType` on the `ProductVariant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductVariant" DROP COLUMN "pizzaSize",
DROP COLUMN "pizzaType",
ADD COLUMN     "productSize" INTEGER,
ADD COLUMN     "productType" INTEGER;
