"use client"

import { useState, useEffect } from "react";
import postData from "../../database/postData.json";
import Footer from "@/app/components/Footer";

const PostItem = ({ params }) => {
  // State to handle loading state
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState(null);

  // Simulate data fetching (or loading state)
  useEffect(() => {
    // Simulate a delay in loading the item (e.g., from an API)
    const fetchData = () => {
      const foundItem = postData.find((p) => p.id.toString() === params.id);
      setItem(foundItem);
      setIsLoading(false); // Set loading to false once data is fetched
    };

    setTimeout(fetchData, 1000); // Simulate a 1-second delay
  }, [params.id]);

  // Show loading spinner while data is being fetched
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>{" "}
        {/* Tailwind Spinner */}
      </div>
    );
  }

  // Show error message if item is not found
  if (!item) {
    return <div className="p-4 text-red-500">Project not found</div>;
  }

  return (
    <main className="bg-white">
      <img src={item.image} alt={item.title} className="w-full h-150 object-cover" />
      <h1 className="text-[70px] font-bold text-[#000] text-center my-[50px]">{item.title}</h1>
      <p className="text-[20px] justify-items-center text-black font-semibold pb-[150px] px-[200px]">
        {item.description}
      </p>
      <Footer />
    </main>
  );
};

export default PostItem;
