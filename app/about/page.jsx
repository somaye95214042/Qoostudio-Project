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
        <div className="relative z-10 flex items-center justify-center h-full bg-black/50 px-6 md:px-[100px]">
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
      </div>

      {/* About Text Section */}
      <div className="flex items-center justify-center min-h-[500px] py-16 bg-[#1a1a1a] px-6 md:px-[100px]">
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
