import Tabs from "./components/Tabs";
import Footer from "./components/Footer";

export default function Home() {
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
          <h1 className="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[60px] xl:text-[60px] font-semibold leading-tight">
            تصویرسازی مفاهیم پیچیده به زبان ساده
          </h1>
        </div>
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
