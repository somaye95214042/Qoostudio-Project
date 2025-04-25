"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import postData from "../database/postData.json";
import AutoSlideshow from "../components/Auto-Slide-Show";
import Footer from "../components/Footer";

const insights = () => {
  // State to handle loading state
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  // Simulate data fetching
  useEffect(() => {
    setTimeout(() => {
      setData(postData);
      setIsLoading(false); // Set loading to false when data is ready
    }, 1000); // Simulate a delay for loading data
  }, []);

  return (
    <>
      <main>
        <AutoSlideshow />
        {isLoading ? (
          <div className="flex justify-center items-top min-h-screen">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>{" "}
            {/* Tailwind Spinner */}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-32 pt-[100px]">
            {data.map((item) => (
              <Link key={item.id} href={`/insights/${item.id}`}>
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

export default insights;
