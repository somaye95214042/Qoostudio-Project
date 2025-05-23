"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import portfolioData from "../../database/portfolioData.json";
import Footer from "@/app/components/Footer";
import PortfolioSlider from "@/app/components/PortfolioSlider";

const PortfolioItem = () => {
  const params = useParams(); // ✅ correctly get params in client component
  const id = params?.id;

  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const foundItem = portfolioData.find((p) => p.id.toString() === id);
      setItem(foundItem);
      setIsLoading(false);
    };

    if (id) {
      setTimeout(fetchData, 1000); // simulate loading
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!item) {
    return <div className="p-4 text-red-500">Project not found</div>;
  }

  return (
    <main className="bg-white flex flex-col">
      {/* Hero Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-[600px] object-cover"
      />

      {/* Main Content Block */}
      <section className="flex flex-col md:flex-row px-6 md:px-40 xl:px-52 mt-16 gap-2 pt-[50px]">
        {/* Left Column */}
        <div className="md:w-1/4">
          <h1 className="text-[57px] font-bold text-black">{item.title}</h1>

          <div className="space-y-6 text-sm py-[120px]">
            <Info label="Developer" value={item.developer} />
            <Info label="Architect" value={item.architect} />
            <Info label="Interior Designer" value={item.interiordesign} />
            <Info label="Marketing" value={item.marketing} />
            <Info label="Sales" value={item.sales} />
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-3/4 flex flex-col justify-start">
          <div className="self-end mb-8">
            <button className="text-[18px] px-10 py-3 text-black font-semibold rounded-full hover:bg-gray-100 transition border-2">
              بیشتر بدانید
            </button>
          </div>

          <div className="text-[19px] text-gray-800 font-bold text-justify leading-relaxed py-[120px]">
            <p>{item.description}</p>
          </div>
        </div>
      </section>
      <PortfolioSlider />
      <iframe
        src="https://player.vimeo.com/video/743089835?h=5f2d86aa43&autoplay=1&loop=1&title=0&byline=0&portrait=0"
        width="100%"
        height="500"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="my-[200px]"
      ></iframe>

      <Footer />
    </main>
  );
};

// Small reusable component for labeled info
const Info = ({ label, value }) => (
  <div>
    <p className="text-gray-500">{label}:</p>
    <p className="font-medium">{value}</p>
  </div>
);

export default PortfolioItem;
