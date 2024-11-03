"use client";

import { useEffect, useRef, useState } from "react";

import cn from "classnames";
import s from "./MainPage.module.scss";

import { IBrand, ICard, IComplectation, IEngine } from "@/src/types/car";
import { mock_brands, mock_engines } from "@/src/utils/mocks";
import { convertEngineToString, getComplectations } from "@/src/utils/helpers";
import { baseUrl } from "@/src/utils/constants";
import CarCard from "@/src/ui/CarCard/CarCard";

export interface IFilters {
  brandName: IBrand;
  engineSize?: IEngine;
  complectation?: IComplectation;
}

export const MainPage = ({ cars }: { cars: ICard[] }) => {
  const [carsToShow, setCarsToShow] = useState(cars);
  const initialRenderRef = useRef<boolean>(true);
  const [filters, setFilters] = useState<IFilters>({
    brandName: "Chery",
  });

  const handleFilter = (field: string, value: string | number) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };
  const handleResetFilter = () => {
    setFilters({ brandName: "Chery" });
  };

  useEffect(() => {
    const getCars = async () => {
      const data = await fetch(
        `${baseUrl}${filters.brandName}?${
          filters.engineSize ? `EngineSize=${filters.engineSize}&` : ""
        }${
          filters.complectation ? `Complectation=${filters.complectation}&` : ""
        }`
      );
      const newCars = await data.json();
      setCarsToShow(newCars);
    };
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
    } else {
      getCars();
    }
  }, [filters.brandName, filters.complectation, filters.engineSize]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Автомобили {filters.brandName ?? "Chery"} в СпБ
      </h1>
      <div className={s.wrapper}>
        <div className={s.filtersContentWrapper}>
          <div className={s.filterWrapper}>
            <span className={s.filterTitle}>Бренд</span>
            <div className={s.filters}>
              {mock_brands.map((brand) => (
                <div
                  key={brand}
                  className={cn(
                    s.filter,
                    brand === filters.brandName && s.activeFilter
                  )}
                  onClick={() => setFilters({ brandName: brand })}
                >
                  <span>{brand}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={s.filterWrapper}>
            <span className={s.filterTitle}>Объем двигателя</span>
            <div className={s.filters}>
              {mock_engines.map((engine) => (
                <div
                  key={engine}
                  className={cn(
                    s.filter,
                    engine === filters.engineSize && s.activeFilter
                  )}
                  onClick={() => handleFilter("engineSize", engine)}
                >
                  <span>{convertEngineToString(engine)} л.</span>
                </div>
              ))}
            </div>
          </div>
          <div className={s.filterWrapper}>
            <span className={s.filterTitle}>Комплектация</span>
            <div className={s.filters}>
              {getComplectations(filters.brandName).map((complectation) => (
                <div
                  key={complectation}
                  className={cn(
                    s.filter,
                    complectation === filters.complectation && s.activeFilter
                  )}
                  onClick={() => handleFilter("complectation", complectation)}
                >
                  <span>{complectation}</span>
                </div>
              ))}
            </div>
          </div>
          <button className={s.resetFiltersBtn} onClick={handleResetFilter}>
            Сбросить фильтр
          </button>
        </div>
        <div className={s.filtersMobileBlock}>
          {mock_brands.map((brand) => (
            <div
              key={brand}
              className={cn(
                s.filter,
                brand === filters.brandName && s.activeFilter
              )}
              onClick={() => setFilters({ brandName: brand })}
            >
              <span>{brand}</span>
            </div>
          ))}
        </div>
        <div className={s.carsWrapper}>
          {carsToShow.length > 0 ? (
            carsToShow.map((car: ICard) => (
              <CarCard key={car.car_id} car={car} />
            ))
          ) : (
            <p className={s.notFound}>Ничего не найдено</p>
          )}
        </div>
      </div>
    </div>
  );
};
