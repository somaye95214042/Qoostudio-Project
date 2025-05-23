'use client'

import Tabs from "./components/Tabs";
import Footer from "./components/Footer";
import { useState } from "react";


export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hero Section with Video */}
      <section className="relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="home.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex items-center justify-center px-4 text-white text-center">
          <div className="relative max-w-4xl flex flex-col items-end text-right space-y-[100px]">
            <h1 className="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[60px] xl:text-[60px] font-semibold leading-tight">
              تصویرسازی مفاهیم پیچیده به زبان ساده
            </h1>
            <button onClick={() => setIsOpen(true)}
              className="text-[15px] text-white px-6 py-3
            bg-[url('https://qoostudio.com/wp-content/uploads/2022/08/Exclusion-1@2x.png')] 
             bg-center bg-contain bg-no-repeat bg-[rgba(0,0,0,0)]
             hover:scale-115 cursor-pointer transition-transform duration-300">
              ویدیوهای ما را بررسی کنید
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl bg-black p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-1/2 translate-x-1/2 bg-white text-pink-600 rounded-full w-12 h-12 flex items-center justify-center font-bold z-10"
              >
                ✕
              </button>

              {/* Video container with background image */}
              <div className="relative w-full pt-[56.25%] overflow-hidden rounded-lg">
                <div className="absolute top-0 left-0 w-full h-full">
                  {/* This image is shown before video loads */}
                  <img
                    src="https://i.vimeocdn.com/video/1502939854-492cb58553b18483ee872af6989dc2f68ec780ddb08fc88d0246beae498228ed-d_640"
                    alt="Video placeholder"
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                  />
                  {/* Vimeo iframe */}
                  <iframe
                    src="https://player.vimeo.com/video/875367930?autoplay=1&muted=1&loop=1&background=1"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full z-10"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}

      </section>

      {/* Section Title */}
      <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] bg-white text-black font-semibold pt-20 pb-12 px-6 md:px-20 text-right">
        راه حل های ما
      </h1>

      {/* Tabs Component */}
      <Tabs />

      {/* Another Section with Video */}
      <section className="relative h-auto md:h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://qoostudio.com/wp-content/uploads/2022/07/Lakeshore-.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center container mx-auto px-4 py-16 text-white space-y-12 md:space-y-0 md:space-x-8">
          {/* Info Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center space-y-4 order-2 md:order-1">
            <div className="text-[18px] font-bold leading-normal text-right" dir="rtl">
              <div>توسعه دهنده: Carriage Gate</div>
              <div>معمار: ترنر فلیشر</div>
              <div>طراح داخلی: توماس پیرس</div>
              <div>بازاریابی: 52 پیک آپ</div>
              <div>فروش: Spectrum Sky</div>
            </div>
            <button className="text-[16px] sm:text-[18px] font-semibold mt-6 rounded-full bg-black px-6 py-2">
              بیشتر بخوانید
            </button>
          </div>

          {/* Image Section */}
          <div className="w-2/3 md:w-1/3 order-1 md:order-2">
            <img
              className="w-full max-w-xs md:max-w-full mx-auto"
              src="https://qoostudio.com/wp-content/uploads/2022/07/f002-768x768.png"
              alt="Project Image"
            />
          </div>

          {/* Title Section */}
          <div className="w-full md:w-1/3 text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] font-semibold leading-tight order-3">
            میدان تقاطع
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
