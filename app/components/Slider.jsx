"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCube, Navigation } from "swiper/modules"; // Import Navigation module
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/navigation"; // Import the navigation CSS
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"; // Updated import for Heroicons v2

export default function ProjectSlider() {
  const slides = [
    {
      id: 1,
      title: "خانه ۷۷ کلارندون",
      description:
        "تجربه‌ای از زندگی لوکس در سطحی جدید، با دقت توسط ریچارد ونگل طراحی شده و توسط شرکت‌های Menkes Developments Ltd. و Pinedale Properties توسعه یافته است.",
      buttonText: "کاوش کنید",
      images: [
        "https://qoostudio.com/wp-content/uploads/2023/04/harbour2.gif",
        "https://qoostudio.com/wp-content/uploads/2023/04/harbour3.gif",
        "https://qoostudio.com/wp-content/uploads/2023/04/beausoleil1.jpg",
      ],
    },
    {
      id: 2,
      title: "رزیدنس سمیِت",
      description:
        "معماری خیره‌کننده و طراحی مدرن، تجربه‌ای بی‌نظیر از زندگی شهری را برای شما رقم می‌زند.",
      buttonText: "بیشتر بدانید",
      images: [
        "https://qoostudio.com/wp-content/uploads/2023/04/harbour2.gif",
        "https://qoostudio.com/wp-content/uploads/2023/04/harbour3.gif",
        "https://qoostudio.com/wp-content/uploads/2023/04/beausoleil1.jpg",
      ],
    },
  ];

  return (
    <div className="py-[200px] px-8 bg-gray-200" dir="rtl">
      <Swiper
        modules={[Pagination, Navigation, EffectCube]} // Add EffectCube module
        spaceBetween={50}
        slidesPerView={1}
        loop
        effect="cube" // Use cube effect
        cubeEffect={{
          shadow: false, // Enable shadow effect
        }}
        navigation={{
          prevEl: ".swiper-button-prev", // Link to custom previous button
          nextEl: ".swiper-button-next", // Link to custom next button
        }}
        className="custom-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              {/* متن */}
              <div className="flex-1 max-w-md text-right">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {slide.description}
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
                  {slide.buttonText}
                </button>
              </div>

              {/* تصاویر */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
                {slide.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidded group"
                  >
                    <img
                      src={img}
                      alt={`تصویر ${idx}`}
                      className="object-cover w-full h-40 md:h-130 transform group-hover:translate-y-[-20px] transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Circle at Bottom-Right */}
      <div className="absolute bottom-12 right-12 flex gap-4">
        {/* Previous Button */}
        <button className="swiper-button-prev text-xl text-black rounded-full p-4 shadow-lg transition-all duration-300">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button className="swiper-button-next text-xl text-black rounded-full p-4 shadow-l transition-all duration-300">
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .custom-swiper {
          position: relative;
        }

        /* Style for the circular buttons */
        .swiper-button-prev,
        .swiper-button-next {
          font-size: 1.5rem;
          width: 60px; /* Increase the button size */
          height: 60px; /* Increase the button size */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Position the buttons side by side */
        .absolute {
          position: absolute;
          top: 105%;
          right: 10%;
        }

        .swiper-button-prev {
          margin-right: 15px; /* Increase spacing between buttons */
        }

        /* Additional styles for better appearance */
        .swiper-button-prev,
        .swiper-button-next {
          background-color: transparent;
          border-radius: 50%;
          color: #000;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background-color: transparent;
        }
      `}</style>
    </div>
  );
}
