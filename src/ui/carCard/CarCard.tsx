"use client";

import { ICard } from "@/src/types/car";
import Image from "next/image";
import s from "./CarCard.module.scss";
import { convertEngineToString } from "@/src/utils/helpers";
import { useRouter } from "next/navigation";

interface ICarCard {
  car: ICard;
}

export const CarCard = ({ car }: ICarCard) => {
  const router = useRouter();
  return (
    <div className={s.cardWrapper}>
      <div className={s.image}>
        <Image src={car.photos.imgs[0].url} fill alt="" />
      </div>

      <p className={s.title}>
        {car.brandName} {car.modelName}
      </p>
      <p className={s.info}>
        {convertEngineToString(car.EngineSize)} л. / {car.Power} л.с. /{" "}
        {car.Transmission}
      </p>

      <button onClick={() => router.push(`/${car.brandName}/${car.car_id}`)}>
        Подробнее
      </button>
    </div>
  );
};

export default CarCard;
