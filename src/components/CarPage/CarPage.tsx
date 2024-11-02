"use client";

import { ICard } from "@/src/types/car";
import { FC } from "react";
import Image from "next/image";
import WarrantyIcon from "../../../public/assets/warranty.svg";
import ProductionYearIcon from "../../../public/assets/carProductionYear.svg";
import EngineIcon from "../../../public/assets/engine.svg";
import TransmissionIcon from "../../../public/assets/transmission.svg";
import s from "./CarPage.module.scss";
import {
  convertEngineToString,
  formatNumberWithSpaces,
} from "@/src/utils/helpers";
import { CustomSwiper } from "@/src/ui/CustomSwiper/CustomSwiper";
import { useWindowDimensions } from "@/src/utils/hooks/useWindowDimensions";

interface CarPageProps {
  car: ICard;
}

const CarPage: FC<CarPageProps> = ({ car }: CarPageProps) => {
  const { width: sreenWidth } = useWindowDimensions();
  const getCarImages = (): string[] => {
    return car.photos.imgs.map((img) => img.url);
  };

  const getBlockHeight = () => {
    const size = sreenWidth * 0.435;
    return Math.min(836, size);
  };

  return (
    <>
      <div className={s.container}>
        <h1 className={s.title}>
          {car.brandName} {car.modelName} {car.modelYear} года
        </h1>
        <p className={s.vin}>VIN {car.vin}</p>
        <div className={s.wrapper}>
          <div className={s.info}>
            <div className={s.priceBlock}>
              <div className={s.smallGreyContainer}>
                <p className={s.price}>{formatNumberWithSpaces(car.price)} ₽</p>
              </div>
              <div className={s.smallGreyContainer}>
                <Image src={WarrantyIcon} alt="" />
                <p className={s.warranty}>Гарантия юр. чистоты</p>
              </div>
            </div>
            <span className={s.characteristics}>Характеристики</span>
            <div className={s.bigGreyContainer}>
              <div className={s.inlineWrapper}>
                <Image src={ProductionYearIcon} alt="" />
                <p className={s.text}>{car.modelYear} год выпуска</p>
              </div>
              <div className={s.inlineWrapper}>
                <Image src={EngineIcon} alt="" />
                <p className={s.text}>
                  {convertEngineToString(car.EngineSize)} л. / {car.Power} л.с.
                  / {car.FuelType}
                </p>
              </div>
              <div className={s.inlineWrapper}>
                <Image src={TransmissionIcon} alt="" />
                <p className={s.text}>КП - {car.Transmission}</p>
              </div>
            </div>
          </div>
          <div className={s.swiper}>
            <CustomSwiper images={getCarImages()} />
          </div>
        </div>
      </div>
      <div className={s.bottomBlock} style={{ height: getBlockHeight() }}>
        <div className={s.wrapper}>
          <div className={s.textBlock}>
            <p>
              Кредит на новый {car.brandName} {car.modelName}
            </p>
            <span>
              Оформите кредит на любой автомобиль ассортимента дилерского центра
              «Максимум»
            </span>
            <button>Оформить</button>
          </div>
        </div>
        <div className={s.bottomImage}></div>
      </div>
    </>
  );
};

export default CarPage;
