"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import portfolioData from "../database/portfolioData.json";

export default function PortfolioSlider() {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={50} // 👈 this creates the cut-off/peek effect
        loop={false} // optional
        className="screenshot-slider"
      >
        {portfolioData.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
