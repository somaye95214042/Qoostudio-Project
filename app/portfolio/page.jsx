"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import portfolioData from "../database/portfoliodata.json";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Portfolio = () => {
  // State to handle loading state
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const categories = [...new Set(portfolioData.map((item) => item.category))];

  // Simulate data fetching
  useEffect(() => {
    setTimeout(() => {
      setSelectedCategory(categories[0]);
      setFilteredData(
        portfolioData.filter((item) => item.category === categories[0])
      );
      setIsLoading(false); // Set loading to false when data is ready
    }, 1000); // Simulate a delay for loading data
  }, []);

  return (
    <>
      <Slider />
      <main className="min-h-screen px-4 sm:px-6 lg:px-20 bg-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black pt-[200px] pb-12 text-right">
          کارهای ما
        </h1>

        <div className="flex flex-wrap gap-4 mb-12 justify-start">
          {portfolioData &&
            categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setFilteredData(
                    portfolioData.filter((item) => item.category === category)
                  );
                }}
                className={`px-4 py-2 text-sm sm:text-base font-semibold rounded transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {category}
              </button>
            ))}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-top min-h-screen">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>{" "}
            {/* Tailwind Spinner */}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-32">
            {filteredData.map((item) => (
              <Link key={item.id} href={`/portfolio/${item.id}`}>
                <div className="relative group cursor-pointer overflow-hidden shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-6">
                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold text-right">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
