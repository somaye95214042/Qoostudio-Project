import TestimonialSlider from "../components/TestimonialSlider";

const about = () => {
  return (
    <>
      <div className="relative w-full h-[800px]">
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
        <div className="relative z-10 flex items-center justify-center h-full mx-[100px] bg-black/50">
          <div className="text-right text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              طراحی محور تسلط فنی
            </h1>
            <p className="mt-4 text-lg md:text-2xl">
              ما شریک قابل اعتمادی برای بسیاری از توسعه‌دهندگان املاک و مستغلات،
              آژانس‌های بازاریابی و تیم‌های فروش در سطح جهانی هستیم. ما طراحی و
              اجرای تجسم را از طریق یک فرآیند مشارکتی که از بهترین فناوری ما با
              هنر طراحی محور بهره می‌برد، شکل می‌دهیم.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-[500px] bg-[#1a1a1a]">
        <div className="text-right text-white mx-[100px]">
          <h1 className="text-4xl md:text-6xl font-bold">
            ساختن بهترین راه‌حل‌ها در عین حال که لذت می‌بریم.
          </h1>
          <p className="mt-[100px] text-lg md:text-2xl">
            مردم به یکدیگر اعتماد دارند. به همین دلیل است که حمایت از شما در هر
            شرایطی برای ما فقط یک شعار نیست، بلکه این دیدگاه ماست که چگونه دنیا
            را تغییر می‌دهیم و به شما در پیشبرد کسب و کارتان کمک می‌کنیم. ما هر
            کاری که لازم باشد انجام خواهیم داد. فقط از هر یک از شرکای ما بپرسید.
          </p>
        </div>
      </div>
      <TestimonialSlider />
    </>
  );
};

export default about;
