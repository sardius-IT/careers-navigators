"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";


export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white px-6 py-3 flex items-center justify-between">
      {/* Left Section: Logo + Title */}
      <div className="flex items-center gap-3">
        <Image
          src="/imgi_1_logo.gif" // replace with your logo image path
          alt="IRST Logo"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h1 className="text-xl font-bold leading-tight">
            International Institution Ranking
          </h1>
          <p className="text-sm font-semibold text-gray-200">(An IRST Group)</p>
        </div>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex gap-8 font-medium">
        <a href="/hero" className="hover:text-blue-300">
          Home
        </a>
        <a href="#" className="hover:text-blue-300">
          About Us
        </a>
        

        {/* Dropdown for Indian Ranking */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="flex items-center gap-1 hover:text-blue-300">
            Indian Ranking <ChevronDown size={16} />
          </button>
          {dropdownOpen && (
            <div className="absolute bg-white text-black rounded shadow-md mt-2 w-40">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-green-100"
              >
                University
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-green-100"
              >
                College
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-green-100"
              >
                School
              </a>
            </div>
          )}
        </div>

        <a href="/book-call" className="hover:text-blue-300">
          Contact
        </a>
      </div>

    
    </nav>
  );
}
