import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import Image from "next/image";

import "swiper/css/navigation";
import "./scrollbar.scss";
import "./swiper.scss";

interface CustomSwiperProps {
  images: string[];
}

export const CustomSwiper: FC<CustomSwiperProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Scrollbar]}
      scrollbar={{ draggable: true }}
      grabCursor={true}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="swiper-slide-chd">
          <Image src={image} fill alt="" loading="eager" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swiper;
