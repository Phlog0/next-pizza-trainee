/*
  Warnings:

  - You are about to drop the `Ingridient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CartItemToIngridient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_IngridientToProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_CartItemToIngridient" DROP CONSTRAINT "_CartItemToIngridient_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_CartItemToIngridient" DROP CONSTRAINT "_CartItemToIngridient_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."_IngridientToProduct" DROP CONSTRAINT "_IngridientToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_IngridientToProduct" DROP CONSTRAINT "_IngridientToProduct_B_fkey";

-- DropTable
DROP TABLE "public"."Ingridient";

-- DropTable
DROP TABLE "public"."_CartItemToIngridient";

-- DropTable
DROP TABLE "public"."_IngridientToProduct";

-- CreateTable
CREATE TABLE "public"."Ingredient" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_IngredientToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_IngredientToProduct_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_CartItemToIngredient" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CartItemToIngredient_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_title_key" ON "public"."Ingredient"("title");

-- CreateIndex
CREATE INDEX "_IngredientToProduct_B_index" ON "public"."_IngredientToProduct"("B");

-- CreateIndex
CREATE INDEX "_CartItemToIngredient_B_index" ON "public"."_CartItemToIngredient"("B");

-- AddForeignKey
ALTER TABLE "public"."_IngredientToProduct" ADD CONSTRAINT "_IngredientToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_IngredientToProduct" ADD CONSTRAINT "_IngredientToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_CartItemToIngredient" ADD CONSTRAINT "_CartItemToIngredient_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."CartItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_CartItemToIngredient" ADD CONSTRAINT "_CartItemToIngredient_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
