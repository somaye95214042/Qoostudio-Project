import Tabs from "./components/Tabs";

export default function Home() {

  return (
    <>
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

        {/* Overlay text container */}
        <div className="absolute inset-0 flex items-center justify-center px-4 text-white text-center">
          <h1 className="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[60px] xl:text-[60px] font-semibold leading-tight">
            تصویرسازی مفاهیم پیچیده به زبان ساده
          </h1>
        </div>
      </section>


      {/* Section title */}
      <h1 className="text-[40px] sm:text-[45] md:text-[40px] lg:text-[60px] xl:text-[60px] bg-white text-black font-semibold pt-20 pb-12 px-6 md:px-20 text-right">
        راه حل های ما
      </h1>

      <Tabs />

      <section className="relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://qoostudio.com/wp-content/uploads/2022/07/Lakeshore-.mp4" type="video/mp4" />
        </video>

        {/* Overlay text container */}
        <div className="absolute inset-0 flex items-center justify-center px-4 text-white text-center">
          <h1 className="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[60px] xl:text-[60px] font-semibold leading-tight">
            تصویرسازی مفاهیم پیچیده به زبان ساده
          </h1>
        </div>
      </section>
    </>
  )
}
