"use client"; // If you're in Next.js 13/14 app folder

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slidesData = [
  {
    quote:
      "ما افتخار همکاری با Qoo را برای چندین پروژه داشته‌ایم و تحت تأثیر فداکاری تیم برای رعایت مهلت‌های دقیق، واکنش به تغییرات و فراتر رفتن از انتظارات برای اطمینان از رضایت ما از نتایج نهایی قرار گرفته‌ایم. آنها حتی یک رندر برنده جایزه برای پروژه باغ‌های هایبوری ما ایجاد کردند! این تیم همیشه در حال نوآوری و ایجاد پلتفرم‌های مفید جدید برای صنعت است و ما مشتاقیم ببینیم که در مرحله بعدی چه چیزی خلق خواهند کرد.",
    author: "ندا کشاورز",
    position: "مدیر بازاریابی و استراتژی، شرکت توسعه‌ی استافورد",
  },
  {
    quote:
      "شرکت ما در طول دهه گذشته از شرکت‌های رندرینگ زیادی برای یافتن گزینه مناسب استفاده کرده است. ما آن را با Qoo پیدا کردیم! کار با آنها فوق‌العاده آسان است و پیشنهادهای خلاقانه‌ای برای افزایش واقع‌گرایی و روایت رندرها و ویدیوهای ما ارائه می‌دهند. کیفیت کار واقعاً فوق‌العاده است و ما از کاری که آنها برای پروژه Century Condos ما انجام داده‌اند، تعریف‌های زیادی دریافت کرده‌ایم. حتی یکی از خریداران به ما گفت که ساختمان ما را انتخاب کرده است زیرا تصاویر به وضوح و زیبایی سبک زندگی مورد انتظار آنها را در Century نشان می‌دهد.",
    author: "امیر زارع",
    position: "مدیر فروش و بازاریابی، خانه‌های دسانتیس",
  },
  {
    quote:
      "ما افتخار همکاری با QOO را در تعدادی از پروژه‌ها داشته‌ایم و خدمات و تخصص آنها فوق‌العاده بوده است.",
    author: "محمد عزیزی",
    position: "شریک ارشد، رایان دیزاین اینترنشنال",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://qoostudio.com/wp-content/uploads/2022/04/02-estimation.png')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Swiper Slider */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          className="w-full max-w-4xl text-center px-4"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="text-white mx-[70px]">
                <p className="text-[20px] md:text-[20px] font-semibold mb-6">“{slide.quote}”</p>
                <p className="text-white-400 italic">{slide.author}</p>
                <p className="text-white-400 italic">{slide.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Custom style for arrows */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          width: 30px;
          height: 30px;
          top: 50%; /* Center vertically */
          transform: translateY(-50%); /* Fix vertical centering */
        }
        .swiper-button-next {
          right: 90%; /* Push away from right */
        }
        .swiper-button-prev {
          left: 90%; /* Push away from left */
        }
      `}</style>
    </section>
  );
}
