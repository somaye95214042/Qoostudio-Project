"use client";

import { useState } from "react";
import Link from "next/link";
import portfolioData from "../database/portfoliodata.json";

const Portfolio = () => {
  const categories = [...new Set(portfolioData.map((item) => item.category))];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredData = portfolioData.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-20 bg-white">
      {/* Header */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black pt-20 pb-12 text-right">
        کارهای ما
      </h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 mb-12 justify-start">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
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

      {/* Portfolio Grid */}
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
    </main>
  );
};

export default Portfolio;
