import { IBrand } from "@/src/types/car";
import {
  mock_complectations_changan,
  mock_complectations_chery,
  mock_complectations_exeed,
  mock_complectations_geely,
  mock_complectations_haval,
  mock_complectations_jaecoo,
  mock_complectations_omoda,
} from "../mocks";

export const convertEngineToString = (engine: number): string => {
  switch (engine) {
    case 1.5:
      return "1,5";
    case 1.6:
      return "1,6";
    case 2:
      return "2,0";
    default:
      return "";
  }
};

export const getComplectations = (brand: IBrand): string[] => {
  const complectations = {
    Chery: mock_complectations_chery,
    Haval: mock_complectations_haval,
    Geely: mock_complectations_geely,
    Exeed: mock_complectations_exeed,
    Omoda: mock_complectations_omoda,
    Changan: mock_complectations_changan,
    Jaecoo: mock_complectations_jaecoo,
  };
  return complectations[brand];
};
