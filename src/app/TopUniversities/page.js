"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const universities = [
  {
    id: 1,
    rank: 2,
    name: "IIM Bangalore - Indian Institute of Management",
    location: "Karnataka",
    course: "MBA/PGDM",
    fees: "24.50 Lacs",
    rating: 4.8,
    reviews: 120,
    image: "/imgi_26_1723460409phpbxbMfl.jpg",
  },
  {
    id: 2,
    rank: 3,
    name: "IIT Delhi - Indian Institute of Technology",
    location: "Delhi",
    course: "Engineering",
    fees: "8.50 Lacs",
    rating: 4.6,
    reviews: 105,
    image: "/imgi_24_IITMADRAS.webp",
  },
  {
    id: 3,
    rank: 4,
    name: "IIM Ahmedabad - Indian Institute of Management",
    location: "Ahmedabad, Gujarat",
    course: "MBA/PGDM",
    fees: "23.00 Lacs",
    rating: 4.9,
    reviews: 180,
    image: "/imgi_26_1723460409phpbxbMfl.jpg",
  },
  {
    id: 4,
    rank: 5,
    name: "BITS Pilani - Birla Institute of Technology & Science",
    location: "Pilani, Rajasthan",
    course: "Engineering",
    fees: "16.50 Lacs",
    rating: 4.5,
    reviews: 90,
    image: "/imgi_39_0d03991ee41346ffcd25eec71abf2460.jpg",
  },
  {
    id: 5,
    rank: 6,
    name: "University of Delhi",
    location: "Delhi",
    course: "Various",
    fees: "1.20 Lacs",
    rating: 4.4,
    reviews: 200,
    image: "/imgi_32_1616589106php08n5IE.jpg",
  },
];

export default function TopUniversities() {
  const scrollRef = useRef(null);

  // 🖱 Enable horizontal scroll with mouse wheel
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft + e.deltaY,
        behavior: "smooth",
      });
    };

    scrollContainer.addEventListener("wheel", handleWheel);
    return () => scrollContainer.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="py-16 px-5 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
        >
          Top Universities
        </motion.h2>

        {/* Horizontal Scroll Section */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
        >
          {universities.map((uni, index) => (
            <motion.div
              key={uni.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative min-w-[250px] bg-white rounded-2xl shadow-md hover:shadow-xl 
                         border border-gray-100 overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={uni.image}
                  alt={uni.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Rank {uni.rank}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-1">
                <h3 className="text-base font-semibold text-gray-800 leading-tight">
                  {uni.name}
                </h3>
                <p className="text-sm text-gray-500">{uni.location}</p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium text-gray-900">Course:</span> {uni.course}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium text-gray-900">Fees:</span>{" "}
                  <span className="text-blue-600 font-semibold">{uni.fees}</span>
                </p>

                <div className="flex items-center gap-1 pt-1">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-sm text-gray-700">
                    {uni.rating}/5 ({uni.reviews} reviews)
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hide scrollbars */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
