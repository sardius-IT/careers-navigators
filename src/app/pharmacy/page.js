"use client";
import Navbar from "./../../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NewsletterSection from "../../app/NewsletterSection/page";
const colleges = [
  // === Tamil Nadu Pharmacy Colleges ===
  {
    name: "JSS College of Pharmacy, Ooty",
    state: "Tamil Nadu",
    city: "Ooty",
    type: "Pharmacy",
    image: "/colleges/jss_ooty.jpg",
  },
  {
    name: "SRM College of Pharmacy, Kattankulathur",
    state: "Tamil Nadu",
    city: "Kattankulathur",
    type: "Pharmacy",
    image: "/colleges/srm_pharmacy.jpg",
  },
  {
    name: "PSG College of Pharmacy, Coimbatore",
    state: "Tamil Nadu",
    city: "Coimbatore",
    type: "Pharmacy",
    image: "/colleges/psg_pharmacy.jpg",
  },

  // === Karnataka Pharmacy Colleges ===
  {
    name: "Manipal College of Pharmaceutical Sciences (MCOPS)",
    state: "Karnataka",
    city: "Manipal",
    type: "Pharmacy",
    image: "/colleges/mcops.jpg",
  },
  {
    name: "Krupanidhi College of Pharmacy",
    state: "Karnataka",
    city: "Bangalore",
    type: "Pharmacy",
    image: "/colleges/krupanidhi_pharmacy.jpg",
  },
  {
    name: "Al-Ameen College of Pharmacy",
    state: "Karnataka",
    city: "Bangalore",
    type: "Pharmacy",
    image: "/colleges/alameen_pharmacy.jpg",
  },

  // === Maharashtra Pharmacy Colleges ===
  {
    name: "Bombay College of Pharmacy (BCP)",
    state: "Maharashtra",
    city: "Mumbai",
    type: "Pharmacy",
    image: "/colleges/bcp_mumbai.jpg",
  },
  {
    name: "Poona College of Pharmacy (Bharati Vidyapeeth)",
    state: "Maharashtra",
    city: "Pune",
    type: "Pharmacy",
    image: "/colleges/poona_pharmacy.jpg",
  },
  {
    name: "Institute of Chemical Technology (ICT)",
    state: "Maharashtra",
    city: "Mumbai",
    type: "Pharmacy",
    image: "/colleges/ict_pharmacy.jpg",
  },

  // === Delhi Pharmacy Colleges ===
  {
    name: "Delhi Institute of Pharmaceutical Sciences and Research (DIPSAR)",
    state: "Delhi",
    city: "New Delhi",
    type: "Pharmacy",
    image: "/colleges/dipsar.jpg",
  },
  {
    name: "Jamia Hamdard University, School of Pharmaceutical Education and Research",
    state: "Delhi",
    city: "New Delhi",
    type: "Pharmacy",
    image: "/colleges/jamia_pharmacy.jpg",
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

export default function TopPharmacyColleges() {
  const [selectedState, setSelectedState] = useState("Tamil Nadu");

  const filteredColleges = colleges.filter(
    (college) => college.state === selectedState && college.type === "Pharmacy"
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-orange-200 py-10 px-4">
        {/* Page Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-center  mb-10"
        >
          Explore Top Pharmacy Colleges in India
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
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-green-100"
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
                  <span className="text-green-700 text-sm font-semibold">
                    ● Pharmacy College
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
            No pharmacy colleges found for this state.
          </motion.p>
        )}
      </div>
      <NewsletterSection />
    </>
  );
}
