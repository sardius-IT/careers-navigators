"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { CheckCircle } from "lucide-react";

const colleges = [
  {
    id: 1,
    name: "Chennai Mathematical Institute",
    location: "Tamil Nadu",
    status: "Available",
    image: "/imgi_28_IIT_Delhi_Entrance-e1531132159388-1024x535.jpg",
  },
  {
    id: 2,
    name: "Chettinad Academy of Research and Education, Kanchipuram",
    location: "Tamil Nadu",
    status: "Available",
    image: "/imgi_32_1616589106php08n5IE.jpg",
  },
  {
    id: 3,
    name: "Dr. M.G.R. Educational and Research Institute",
    location: "Tamil Nadu",
    status: "Available",
    image: "/imgi_37_1532931640phpRti6L6.png",
  },
  {
    id: 4,
    name: "Hindustan Institute of Technology and Science (HITS)",
    location: "Tamil Nadu",
    status: "Available",
    image: "/imgi_26_1723460409phpbxbMfl.jpg",
  },
  {
    id: 5,
    name: "Kalasalingam Academy of Research and Education",
    location: "Tamil Nadu",
    status: "Available",
    image: "/imgi_81_university-6699377_1280.jpg",
  },
];

export default function TopColleges() {
  const scrollRef = useRef(null);

  // 🖱 Scroll horizontally with mouse wheel
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY,
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", handleWheel);
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="py-16  bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Top Colleges for Admission
        </motion.h2>
        <p className="text-gray-500 mt-2 mb-10 max-w-2xl mx-auto">
          Explore our handpicked list of top colleges to choose the right institution and easily book your admission consultation today.
        </p>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6 "
        >
          {colleges.map((college, index) => (
            <motion.div
              key={college.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="min-w-[250px] bg-white rounded-xl shadow-md hover:shadow-xl 
                         overflow-hidden border border-gray-100 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={college.image}
                  alt={college.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle size={14} className="text-green-500" />
                  <span className="text-green-600 text-sm font-semibold">{college.status}</span>
                </div>
                <h3 className="font-semibold text-gray-800 text-base leading-snug">
                  {college.name}
                </h3>
                <p className="text-sm text-gray-500">{college.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
          >
            View More Colleges
          </motion.button>
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
