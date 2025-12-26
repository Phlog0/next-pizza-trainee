import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FiltersValues } from "./use-filters";
import qs from "qs";
export function useQueryFilters(filters: FiltersValues) {
  const router = useRouter();

  useEffect(() => {
    const params = {
      ...filters.price,
      selectedPizzaTypesValues: Array.from(filters.selectedPizzaTypesValues),
      selectedIngredientsValues: Array.from(filters.selectedIngredientsValues),
      selectedSizesValues: Array.from(filters.selectedSizesValues),
    };
    const query = qs.stringify(params, {
      arrayFormat: "comma",
    });

    router.push(`?${query}`, {
      scroll: false,
    });
  }, [filters, router]);
}
