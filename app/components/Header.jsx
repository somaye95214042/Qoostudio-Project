"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled ? "bg-black" : "bg-transparent"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 py-[20px] sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-auto cursor-pointer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-[80px] text-[22px] font-semibold items-center">
            <Link href="/about">درباره ما</Link>
            <Link href="/portfolio">کارهای ما</Link>
            <Link href="/insights">چشم انداز</Link>
            <Link href="/contact">تماس با ما</Link>
            <Link
              href="/book-a-demo"
              className="px-5 py-2 rounded-full hover:bg-black hover:text-white transition-colors border border-white"
            >
              چگونه با ما در ارتباط باشید
            </Link>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-black px-6 py-4 space-y-4">
          <Link href="/about" className="block text-right font-medium">
            درباره ما
          </Link>
          <Link href="/portfolio" className="block text-right font-medium">
            کارهای ما
          </Link>
          <Link href="/insights" className="block text-right font-medium">
            چشم انداز
          </Link>
          <Link href="/contact" className="block text-right font-medium">
            تماس با ما
          </Link>
          <button className="text-white py-2 rounded-full mt-2 transition">
            چگونه با ما در ارتباط باشید؟
          </button>
        </div>
      )}
    </header>
  );
}
