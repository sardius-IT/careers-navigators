"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const categories = [
    { name: "Engineering", path: "/engineering", icon: "👷‍♂️" },
    { name: "Management", path: "/management", icon: "👔" },
    { name: "Medical", path: "/medical", icon: "📞" },
    { name: "Arts & Humanities", path: "/arts-humanities", icon: "🌍" },
    { name: "Agriculture", path: "/agriculture", icon: "🐰" },
    { name: "Law", path: "/law", icon: "⚖️" },
    { name: "Pharmacy", path: "/pharmacy", icon: "💊" },
  ];

  const pathname = usePathname();
  const [showPromotion, setShowPromotion] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowPromotion(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <header className="w-full bg-white  shadow-2xl sticky top-0 z-[100]">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
         <div className="flex items-center gap-2">
  <Link href="/hero" className="cursor-pointer">
    <Image
  src="/logo.png"
  alt="Logo"
  width={120}  // ✅ required
  height={50}  // ✅ required
  className="object-contain hover:opacity-80 transition-opacity"
/>

  </Link>
</div>


          {/* Desktop Menu */}
          <div className="hidden md:flex gap-3 text-sm">
            {categories.map((cat) => (
              <Link
                key={cat.path}
                href={cat.path}
                className={`px-3 py-2 rounded-full font-semibold transition ${
                  pathname === cat.path
                    ? "bg-green-200 text-green-800"
                    : "bg-gray-100 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Book Call */}
          <Link
            href="/book-call"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-md hover:scale-105 transition"
          >
            Book Call
          </Link>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Sub Menu */}
        <div
          className="hidden md:flex justify-center gap-2 pb-3 relative w-full z-[200]"
          ref={dropdownRef}
        >
          <Link
            href="/all-courses"
            className={`px-4 py-1 rounded-full font-medium ${
              pathname === "/all-courses" ? "bg-green-200" : "bg-green-100"
            } hover:bg-green-200 transition`}
          >
            All Courses
          </Link>

          <Link
            href="/ranking"
            className={`px-4 py-1 rounded-full font-medium ${
              pathname === "/ranking" ? "bg-yellow-200" : "bg-yellow-100"
            } hover:bg-yellow-200 transition`}
          >
            Ranking
          </Link>

          <button
            onClick={() => setShowPromotion(!showPromotion)}
            className="px-4 py-1 rounded-full font-medium bg-lime-100 hover:bg-lime-200 transition"
          >
            Promotion ▼
          </button>

          {showPromotion && (
            <div className="absolute top-12 bg-white shadow-lg rounded-xl p-3 flex flex-col gap-2 w-56 border z-[500]">
              <Link
                href="/promotion/education-fair"
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition"
              >
                <Image src="/education-fair-logo.png" alt="Education Fair" className="h-6" />
                <span>Education Fair-2025</span>
              </Link>
              <Link
                href="/promotion/irst-lms"
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition"
              >
                <Image src="/irst-lms-logo.png" alt="IRST-LMS" className="h-6" />
                <span>IRST-LMS</span>
              </Link>
              <Link
                href="/promotion/job"
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition"
              >
                <Image src="/job-logo.png" alt="Job" className="h-6" />
                <span>Job</span>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Drawer Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/50 z-[300] md:hidden" onClick={() => setMenuOpen(false)}>
            <div
              className="absolute top-0 left-0 h-full w-72 bg-white shadow-2xl rounded-r-2xl p-5 flex flex-col gap-3 animate-slideIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <Image src="/logo.png" alt="Logo" className="h-10" />
                <X
                  size={24}
                  className="cursor-pointer hover:text-red-500"
                  onClick={() => setMenuOpen(false)}
                />
              </div>

              {/* Categories */}
              {categories.map((cat) => (
                <Link
                  key={cat.path}
                  href={cat.path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 py-3 text-base font-medium rounded-lg transition ${
                    pathname === cat.path ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50"
                  }`}
                >
                  <span className="text-lg">{cat.icon}</span>
                  {cat.name}
                </Link>
              ))}

              <hr className="my-3" />

              {/* Sub Actions */}
              <Link
                href="/all-courses"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-2 rounded-lg font-semibold bg-gradient-to-r from-green-100 to-yellow-100 hover:from-green-200 hover:to-yellow-200 transition"
              >
                All Courses
              </Link>

              <Link
                href="/ranking"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-2 rounded-lg font-semibold bg-gradient-to-r from-yellow-100 to-yellow-200 hover:from-yellow-200 hover:to-yellow-300 transition"
              >
                Ranking
              </Link>

              <button
                onClick={() => setShowPromotion(!showPromotion)}
                className="w-full text-center py-2 rounded-lg font-semibold bg-gradient-to-r from-lime-100 to-lime-200 hover:from-lime-200 hover:to-lime-300 transition"
              >
                Promotion ▼
              </button>

              {showPromotion && (
                <div className="flex flex-col mt-2 bg-white border rounded-xl shadow-md p-3">
                  <Link href="/promotion/education-fair" className="py-2 hover:bg-gray-50 rounded-md">
                    Education Fair-2025
                  </Link>
                  <Link href="/promotion/irst-lms" className="py-2 hover:bg-gray-50 rounded-md">
                    IRST-LMS
                  </Link>
                  <Link href="/promotion/job" className="py-2 hover:bg-gray-50 rounded-md">
                    Job
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

