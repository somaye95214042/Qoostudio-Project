'use client'; // if using Next.js 13+ in app directory

import { useEffect, useState } from 'react';
import postData from '../database/postData.json';

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % postData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {postData.map((data, index) => (
        <img
          key={data.id}
          src={data.image}
          alt={`Slide ${index}`}
          className={`absolute w-full h-screen object-cover transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}
