import { ICard } from "@/src/types/car";
import Image from "next/image";
import s from "./CarCard.module.scss";
import { convertEngineToString } from "@/src/utils/helpers";

interface ICarCard {
  car: ICard;
}

export const CarCard = ({ car }: ICarCard) => {
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

      <button>Подробнее</button>
    </div>
  );
};

export default CarCard;
