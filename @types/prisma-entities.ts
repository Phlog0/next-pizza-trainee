import { Prisma } from "@prisma/client";

export type ProductWithVariants = Prisma.ProductGetPayload<{
  include: {
    variants: true;
  };
}>;
export type ProductWithVariantsAndIngredients = Prisma.ProductGetPayload<{
  include: {
    variants: true;
    ingredients: true;
  };
}>;

export type CategoryWithVariantsAndIngredients = Prisma.CategoryGetPayload<{
  include: {
    products: {
      include: {
        variants: true;
        ingredients: true;
      };
    };
  };
}>;
