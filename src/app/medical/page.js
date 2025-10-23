"use client";
import Navbar from "./../../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const colleges = [
  // === Tamil Nadu Medical Colleges ===
  {
    name: "Christian Medical College (CMC)",
    state: "Tamil Nadu",
    city: "Vellore",
    type: "Medical",
    image: "/colleges/cmc.jpg",
  },
  {
    name: "Madras Medical College (MMC)",
    state: "Tamil Nadu",
    city: "Chennai",
    type: "Medical",
    image: "/colleges/mmc.jpg",
  },
  {
    name: "SRM Medical College Hospital and Research Centre",
    state: "Tamil Nadu",
    city: "Kattankulathur",
    type: "Medical",
    image: "/colleges/srm_medical.jpg",
  },

  // === Bangalore Medical Colleges ===
  {
    name: "St. John’s Medical College",
    state: "Bangalore",
    city: "Bangalore",
    type: "Medical",
    image: "/colleges/stjohns.jpg",
  },
  {
    name: "Bangalore Medical College and Research Institute",
    state: "Bangalore",
    city: "Bangalore",
    type: "Medical",
    image: "/colleges/bmcri.jpg",
  },
  {
    name: "Kempegowda Institute of Medical Sciences (KIMS)",
    state: "Bangalore",
    city: "Bangalore",
    type: "Medical",
    image: "/colleges/kims.jpg",
  },

  // === Maharashtra Medical Colleges ===
  {
    name: "Grant Medical College and Sir J.J. Group of Hospitals",
    state: "Maharashtra",
    city: "Mumbai",
    type: "Medical",
    image: "/colleges/grant_medical.jpg",
  },
  {
    name: "Byramjee Jeejeebhoy Government Medical College (BJMC)",
    state: "Maharashtra",
    city: "Pune",
    type: "Medical",
    image: "/colleges/bjmc.jpg",
  },
  {
    name: "Seth G.S. Medical College and KEM Hospital",
    state: "Maharashtra",
    city: "Mumbai",
    type: "Medical",
    image: "/colleges/kem.jpg",
  },
];

const states = [
  "Tamil Nadu",
  "Bangalore",
  "Maharashtra",
  "Kerala",
  "Andhra Pradesh",
  "Gujarat",
  "Telangana",
  "Madhya Pradesh",
  "Odisha",
  "West Bengal",
  "Uttar Pradesh",
];

export default function TopMedicalColleges() {
  const [selectedState, setSelectedState] = useState("Tamil Nadu");

  // Filter by both state and medical type
  const filteredColleges = colleges.filter(
    (college) =>
      college.state === selectedState && college.type === "Medical"
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-cyan-500 py-10 px-4">
        {/* Page Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-center  mb-10"
        >
          Discover Top Medical Colleges in India
        </motion.h2>

        {/* State Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {states.map((state) => (
            <motion.button
              key={state}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedState(state)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedState === state
                  ? "bg-cyan-800 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-green-100 hover:text-gray-700 "
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
            {filteredColleges.map((college, index) => (
              <motion.div
                key={college.name}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.1 }}
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
                    ● Medical College
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

        {filteredColleges.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-6"
          >
            No medical colleges found for this state.
          </motion.p>
        )}
      </div>
    </>
  );
}
