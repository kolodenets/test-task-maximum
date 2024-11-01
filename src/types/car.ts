export interface ICard {
  car_id: string;
  brandName: string;
  modelName: string;
  vin: string;
  Year: number;
  Color: string;
  interiorColor: null;
  modelYear: number;
  bodyType: string;
  Complectation: string;
  DriveType: string;
  EngineSize: number;
  Power: number;
  FuelType: string;
  Transmission: string;
  transmissionRu: string;
  steeringWheelSide: string;
  storageAdress: string;
  price: number;
  photos: Photos;
  modificationName: string;
}

export interface Photos {
  imgs: Img[];
  wrap: boolean;
}

export interface Img {
  _id: string;
  season: Season;
  position: number;
  complect: number;
  accepted: boolean;
  url: string;
  urlThumb: string;
}

export enum Season {
  Осень = "Осень",
}

export type IBrand =
  | "Chery"
  | "Haval"
  | "Geely"
  | "Exeed"
  | "Omoda"
  | "Changan"
  | "Jaecoo";

export type IComplectation =
  | "Premium"
  | "Tech Plus"
  | "X Premium"
  | "Business"
  | "Cosmo"
  | "Trek"
  | "Comfort"
  | "Family"
  | "Prestige"
  | "Elite"
  | "Dreamline"
  | "Speedline"
  | "Ultimate"

export type IEngine = 1.5 | 1.6 | 2.0;
