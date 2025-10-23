"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const colleges = [
  {
    name: "Academy of Maritime Education and Training",
    state: "Tamil Nadu",
    city: "Chennai",
    image: "/colleges/amet.jpg",
  },
  {
    name: "Amrita Vishwa Vidyapeetham",
    state: "Tamil Nadu",
    city: "Coimbatore",
    image: "/colleges/amrita.jpg",
  },
  {
    name: "Avinashilingam Institute for Home Science & Higher Education for Women",
    state: "Tamil Nadu",
    city: "Coimbatore",
    image: "/colleges/avinashilingam.jpg",
  },
  {
    name: "B.S. Abdur Rahman Institute of Science and Technology",
    state: "Tamil Nadu",
    city: "Chennai",
    image: "/colleges/bsabdur.jpg",
  },
  {
    name: "Bharath Institute of Higher Education & Research",
    state: "Tamil Nadu",
    city: "Chennai",
    image: "/colleges/bharath.jpg",
  },
  {
    name: "Chennai Mathematical Institute",
    state: "Tamil Nadu",
    city: "Chennai",
    image: "/colleges/cmi.jpg",
  },
  {
    name: "Christ University",
    state: "Bangalore",
    city: "Bangalore",
    image: "/colleges/christ.jpg",
  },
  {
    name: "St. Joseph’s College of Engineering",
    state: "Bangalore",
    city: "Bangalore",
    image: "/colleges/stjoseph.jpg",
  },
];

const states = [
  "Tamil Nadu",
  "Bangalore",
  "Andhra Pradesh",
  "Maharashtra",
  "Kerala",
  "Madhya Pradesh",
  "Gujarat",
  "Telangana",
  "Odisha",
  "Arunachal Pradesh",
  "West Bengal",
  "Uttar Pradesh",
];

export default function TopColleges() {
  const [selectedState, setSelectedState] = useState("Tamil Nadu");

  const filteredColleges = colleges.filter(
    (college) => college.state === selectedState
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-10 px-4">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 mb-8"
      >
        Discover Our Top Colleges
      </motion.h2>

      {/* State Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {states.map((state) => (
          <motion.button
            key={state}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedState(state)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold backdrop-blur-md border transition-all duration-300 ${
              selectedState === state
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white/60 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {state}
          </motion.button>
        ))}
      </motion.div>

      {/* Colleges Grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        <AnimatePresence>
          {filteredColleges.map((college, idx) => (
            <motion.div
              key={college.name}
              layout
              variants={fadeUp}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={college.image}
                  alt={college.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <span className="text-green-600 text-sm font-semibold">
                  ● Available
                </span>
                <h3 className="text-lg font-semibold mt-1 text-gray-800">
                  {college.name}
                </h3>
                <p className="text-gray-500 text-sm">{college.state}</p>
                <div className="flex items-center mt-2 text-gray-700 text-sm">
                  <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                  {college.city}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
