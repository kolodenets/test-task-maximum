import { IFilters } from "@/src/components/MainPage/MainPage";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useCarsFilters() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const brand = pathname.slice(
    pathname.lastIndexOf("/") + 1
  ) as IFilters["brandName"];
  const engineSize = searchParams.get("EngineSize");
  const complectation = searchParams.get("Complectation");

  const setCarsFilters = useCallback(
    (filters: IFilters) => {
      const params = new URLSearchParams(searchParams.toString());
      if (filters.engineSize !== undefined) {
        params.set("EngineSize", filters.engineSize.toString());
      }
      if (filters.complectation !== undefined) {
        params.set("Complectation", filters.complectation);
      }
      return params;
    },
    [searchParams]
  );

  return {
    brand,
    engineSize,
    complectation,
    setCarsFilters,
  };
}
