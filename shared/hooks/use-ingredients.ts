import { useEffect, useState } from "react";

import { Api } from "@/shared/services/api-client";
type SelectedIngredients = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};
export function useIngredients() {
  const [ingredientItems, setIngredientItems] = useState<SelectedIngredients[]>(
    []
  );
  const [isLoading, setIsLodaing] = useState(true);
  useEffect(() => {
    const getAllIngredients = async () => {
      try {
        setIsLodaing(true);
        const data = await Api.ingredients.getAll();
        setIngredientItems(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLodaing(false);
      }
    };
    getAllIngredients();
  }, []);
  return {
    isLoading,
    ingredientItems,
  };
}
