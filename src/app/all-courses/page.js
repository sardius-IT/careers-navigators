"use client";
import { useState } from "react";
import Navbar from "./../../components/Navbar";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const colleges = [
  // === ENGINEERING ===
  {
    name: "IIT Madras",
    category: "Engineering",
    state: "Tamil Nadu",
    city: "Chennai",
    image: "/colleges/iitm.jpg",
  },
  {
    name: "Vellore Institute of Technology (VIT)",
    category: "Engineering",
    state: "Tamil Nadu",
    city: "Vellore",
    image: "/colleges/vit.jpg",
  },

  // === MANAGEMENT ===
  {
    name: "IIM Bangalore",
    category: "Management",
    state: "Karnataka",
    city: "Bangalore",
    image: "/colleges/iimb.jpg",
  },
  {
    name: "IIM Ahmedabad",
    category: "Management",
    state: "Gujarat",
    city: "Ahmedabad",
    image: "/colleges/iima.jpg",
  },

  // === MEDICAL ===
  {
    name: "All India Institute of Medical Sciences (AIIMS), Delhi",
    category: "Medical",
    state: "Delhi",
    city: "New Delhi",
    image: "/colleges/aiims.jpg",
  },
  {
    name: "Christian Medical College (CMC), Vellore",
    category: "Medical",
    state: "Tamil Nadu",
    city: "Vellore",
    image: "/colleges/cmc_vellore.jpg",
  },

  // === LAW ===
  {
    name: "National Law School of India University (NLSIU)",
    category: "Law",
    state: "Karnataka",
    city: "Bangalore",
    image: "/colleges/nlsiu.jpg",
  },
  {
    name: "Faculty of Law, University of Delhi",
    category: "Law",
    state: "Delhi",
    city: "New Delhi",
    image: "/colleges/du_law.jpg",
  },

  // === PHARMACY ===
  {
    name: "JSS College of Pharmacy, Ooty",
    category: "Pharmacy",
    state: "Tamil Nadu",
    city: "Ooty",
    image: "/colleges/jss_ooty.jpg",
  },
  {
    name: "Bombay College of Pharmacy (BCP)",
    category: "Pharmacy",
    state: "Maharashtra",
    city: "Mumbai",
    image: "/colleges/bcp_mumbai.jpg",
  },

  // === AGRICULTURE ===
  {
    name: "Tamil Nadu Agricultural University (TNAU)",
    category: "Agriculture",
    state: "Tamil Nadu",
    city: "Coimbatore",
    image: "/colleges/tnau.jpg",
  },
  {
    name: "Punjab Agricultural University",
    category: "Agriculture",
    state: "Punjab",
    city: "Ludhiana",
    image: "/colleges/pau.jpg",
  },

  // === ARTS & HUMANITIES ===
  {
    name: "Loyola College, Chennai",
    category: "Arts & Humanities",
    state: "Tamil Nadu",
    city: "Chennai",
    image: "/colleges/loyola.jpg",
  },
  {
    name: "Miranda House, Delhi University",
    category: "Arts & Humanities",
    state: "Delhi",
    city: "New Delhi",
    image: "/colleges/miranda_house.jpg",
  },
];

const categories = [
  "All",
  "Engineering",
  "Management",
  "Medical",
  "Law",
  "Pharmacy",
  "Agriculture",
  "Arts & Humanities",
];

export default function AllCoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredColleges =
    selectedCategory === "All"
      ? colleges
      : colleges.filter((c) => c.category === selectedCategory);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 py-10 px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8"
        >
          Explore All Courses in India
        </motion.h2>

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-green-100"
              }`}
            >
              {cat}
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
                exit={{ opacity: 0 }}
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
                    ● {college.category} College
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
            className="text-center text-gray-500 mt-8"
          >
            No colleges found for this category.
          </motion.p>
        )}
      </div>
    </>
  );
}
