"use client";

import TestimonialSlider from "../components/TestimonialSlider";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      {/* Hero Video Section */}
      <div className="relative w-full h-[700px] md:h-[800px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://qoostudio.com/wp-content/uploads/2022/08/Qoo-About-logo.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/50 px-6 md:px-[100px]">
          <div className="text-right text-white max-w-5xl">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              طراحی محور تسلط فنی
            </h1>
            <p className="mt-6 text-base md:text-xl leading-relaxed">
              ما شریک قابل اعتمادی برای بسیاری از توسعه‌دهندگان املاک و مستغلات،
              آژانس‌های بازاریابی و تیم‌های فروش در سطح جهانی هستیم. ما طراحی و
              اجرای تجسم را از طریق یک فرآیند مشارکتی که از بهترین فناوری ما با
              هنر طراحی محور بهره می‌برد، شکل می‌دهیم.
            </p>
          </div>
        </div>

        {/* Oval Scroll Button */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={() =>
              document
                .getElementById("about-text-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-10 h-16 rounded-full border-2 border-white flex items-center justify-center animate-pulse hover:scale-110 transition duration-300 shadow-[0_0_12px_rgba(255,255,255,0.3)]"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* About Text Section */}
      <div
        id="about-text-section"
        className="flex items-center justify-center min-h-[500px] py-16 bg-[#1a1a1a] px-6 md:px-[100px]"
      >
        <div className="text-right text-white max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            ساختن بهترین راه‌حل‌ها در عین حال که لذت می‌بریم.
          </h1>
          <p className="mt-8 md:mt-16 text-base md:text-xl leading-relaxed">
            مردم به یکدیگر اعتماد دارند. به همین دلیل است که حمایت از شما در هر
            شرایطی برای ما فقط یک شعار نیست، بلکه این دیدگاه ماست که چگونه دنیا
            را تغییر می‌دهیم و به شما در پیشبرد کسب و کارتان کمک می‌کنیم. ما هر
            کاری که لازم باشد انجام خواهیم داد. فقط از هر یک از شرکای ما بپرسید.
          </p>
        </div>
      </div>

      {/* Testimonial Slider */}
      <TestimonialSlider />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
