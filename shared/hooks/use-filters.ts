import { useSet } from "react-use";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FILTER_KEYS } from "@/shared/constants";

export type RangeSliderPrice = Partial<{
  priceFrom: number;
  priceTo: number;
}>;

type QueryFilters = RangeSliderPrice & {
  selectedIngredientsValues: string;
  selectedSizesValues: string;
  selectedPizzaTypesValues: string;
};

export type FiltersValues = {
  selectedIngredientsValues: Set<string>;
  selectedSizesValues: Set<string>;
  selectedPizzaTypesValues: Set<string>;
  price: RangeSliderPrice;
};
type ReturnTypes = FiltersValues & {
  toggleIngredientsValues: (key: string) => void;
  toggleSizesValues: (key: string) => void;
  togglePizzaTypesValues: (key: string) => void;
  setPrice: Dispatch<
    SetStateAction<
      Partial<{
        priceFrom: number;
        priceTo: number;
      }>
    >
  >;
};

export function useFilters(): ReturnTypes {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  const [selectedIngredientsValues, { toggle: toggleIngredientsValues }] =
    useSet(
      new Set<string>(
        new Set(
          searchParams.has(FILTER_KEYS.SELECTED_INGREDIENTS_VALUES)
            ? searchParams
                .get(FILTER_KEYS.SELECTED_INGREDIENTS_VALUES)
                ?.split(",")
            : []
        )
      )
    );

  const [selectedSizesValues, { toggle: toggleSizesValues }] = useSet(
    new Set<string>(
      new Set(
        searchParams.has(FILTER_KEYS.SELECTED_SIZES_VALUES)
          ? searchParams.get(FILTER_KEYS.SELECTED_SIZES_VALUES)?.split(",")
          : []
      )
    )
  );
  const [selectedPizzaTypesValues, { toggle: togglePizzaTypesValues }] = useSet(
    new Set<string>(
      searchParams.has(FILTER_KEYS.SELECTED_PIZZA_TYPES_VALUES)
        ? searchParams.get(FILTER_KEYS.SELECTED_PIZZA_TYPES_VALUES)?.split(",")
        : []
    )
  );
  const [price, setPrice] = useState<RangeSliderPrice>({
    // Намеренно нужен //undefined чтобы при первичной загрузке не было priceFrom=0;
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  return useMemo(
    () => ({
      selectedIngredientsValues,
      toggleIngredientsValues,
      selectedSizesValues,
      toggleSizesValues,
      selectedPizzaTypesValues,
      togglePizzaTypesValues,
      price,
      setPrice,
    }),
    [
      price,
      selectedIngredientsValues,
      selectedPizzaTypesValues,
      selectedSizesValues,
      toggleIngredientsValues,
      togglePizzaTypesValues,
      toggleSizesValues,
    ]
  );
}
