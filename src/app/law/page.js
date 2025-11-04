"use client";
import Navbar from "./../../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NewsletterSection from "../../app/NewsletterSection/page";
const colleges = [
  // === Tamil Nadu Law Colleges ===
  {
    name: "Dr. Ambedkar Government Law College, Chennai",
    state: "Tamil Nadu",
    city: "Chennai",
    type: "Law",
    image: "/colleges/ambedkar_law_chennai.jpg",
  },
  {
    name: "The Tamil Nadu Dr. Ambedkar Law University (TNDALU)",
    state: "Tamil Nadu",
    city: "Chennai",
    type: "Law",
    image: "/colleges/tndalu.jpg",
  },
  {
    name: "VIT School of Law, Chennai",
    state: "Tamil Nadu",
    city: "Chennai",
    type: "Law",
    image: "/colleges/vit_law.jpg",
  },

  // === Karnataka Law Colleges ===
  {
    name: "National Law School of India University (NLSIU)",
    state: "Karnataka",
    city: "Bangalore",
    type: "Law",
    image: "/colleges/nlsiu.jpg",
  },
  {
    name: "KLE Society’s Law College",
    state: "Karnataka",
    city: "Bangalore",
    type: "Law",
    image: "/colleges/kle_law.jpg",
  },
  {
    name: "Christ University School of Law",
    state: "Karnataka",
    city: "Bangalore",
    type: "Law",
    image: "/colleges/christ_law.jpg",
  },

  // === Maharashtra Law Colleges ===
  {
    name: "Government Law College (GLC), Mumbai",
    state: "Maharashtra",
    city: "Mumbai",
    type: "Law",
    image: "/colleges/glc_mumbai.jpg",
  },
  {
    name: "ILS Law College, Pune",
    state: "Maharashtra",
    city: "Pune",
    type: "Law",
    image: "/colleges/ils_law_pune.jpg",
  },
  {
    name: "Symbiosis Law School (SLS), Pune",
    state: "Maharashtra",
    city: "Pune",
    type: "Law",
    image: "/colleges/sls_pune.jpg",
  },

  // === Delhi Law Colleges ===
  {
    name: "National Law University (NLU Delhi)",
    state: "Delhi",
    city: "New Delhi",
    type: "Law",
    image: "/colleges/nlu_delhi.jpg",
  },
  {
    name: "Faculty of Law, University of Delhi",
    state: "Delhi",
    city: "New Delhi",
    type: "Law",
    image: "/colleges/du_law.jpg",
  },
];

const states = [
  "Tamil Nadu",
  "Karnataka",
  "Maharashtra",
  "Delhi",
  "Kerala",
  "Andhra Pradesh",
  "Gujarat",
  "Telangana",
  "Madhya Pradesh",
  "Odisha",
  "Uttar Pradesh",
];

export default function TopLawColleges() {
  const [selectedState, setSelectedState] = useState("Tamil Nadu");

  const filteredColleges = colleges.filter(
    (college) => college.state === selectedState && college.type === "Law"
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-neutral-400 py-10 px-4">
        {/* Page Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-center  mb-10"
        >
          Explore Top Law Colleges in India
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
                  ? "bg-neutral-500 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-blue-100"
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
                  <span className="text-blue-700 text-sm font-semibold">
                    ● Law College
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
            No law colleges found for this state.
          </motion.p>
        )}
      </div>
      <NewsletterSection />
    </>
  );
}
