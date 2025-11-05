"use client";
import Navbar from "./../../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NewsletterSection from "../../app/NewsletterSection/page";
import OurOffices from "../../components/OurOffices";
const colleges = [
  // === Tamil Nadu Engineering Colleges ===
  {
    name: "Indian Institute of Technology Madras (IIT Madras)",
    state: "Tamil Nadu",
    city: "Chennai",
    type: "Engineering",
    image: "/indian institute of technology.jpg",
  },
  {
    name: "Vellore Institute of Technology (VIT)",
    state: "Tamil Nadu",
    city: "Vellore",
    type: "Engineering",
    image: "/vellore-institute-of-technology-chennai.jpg",
  },
  {
    name: "SRM Institute of Science and Technology",
    state: "Tamil Nadu",
    city: "Kattankulathur",
    type: "Engineering",
    image: "/SRM.webp",
  },

  // === Bangalore Engineering Colleges ===
  {
    name: "R.V. College of Engineering",
    state: "Bangalore",
    city: "Bangalore",
    type: "Engineering",
    image: "/R.V. College of Engineering.webp",
  },
  {
    name: "BMS College of Engineering",
    state: "Bangalore",
    city: "Bangalore",
    type: "Engineering",
    image: "/BMS-College-of-Engineering.jpg",
  },
  {
    name: "PES University",
    state: "Bangalore",
    city: "Bangalore",
    type: "Engineering",
    image: "/PES University.jpg",
  },

  // === Maharashtra Engineering Colleges ===
  {
    name: "Indian Institute of Technology Bombay (IIT Bombay)",
    state: "Maharashtra",
    city: "Mumbai",
    type: "Engineering",
    image: "/Indian Institute of Technology Bombay.jpg",
  },
  {
    name: "College of Engineering Pune (COEP)",
    state: "Maharashtra",
    city: "Pune",
    type: "Engineering",
    image: "/College of Engineering Pune (COEP).jpg",
  },
  {
    name: "VJTI (Veermata Jijabai Technological Institute)",
    state: "Maharashtra",
    city: "Mumbai",
    type: "Engineering",
    image: "/VJTI (Veermata Jijabai Technological Institute).jpg",
  },
  // === Kerala Engineering Colleges ===
{
  name: "National Institute of Technology Calicut (NIT Calicut)",
  state: "Kerala",
  city: "Kozhikode",
  type: "Engineering",
  image: "/National Institute of Technology Calicut (NIT Calicut).png",
},
{
  name: "Indian Institute of Technology Palakkad (IIT Palakkad)",
  state: "Kerala",
  city: "Palakkad",
  type: "Engineering",
  image: "/Indian Institute of Technology Palakkad (IIT Palakkad).jpg",
},
{
  name: "College of Engineering Trivandrum (CET)",
  state: "Kerala",
  city: "Thiruvananthapuram",
  type: "Engineering",
  image: "/College of Engineering Trivandrum (CET).avif",
},
{
  name: "Government Engineering College Thrissur (GEC Thrissur)",
  state: "Kerala",
  city: "Thrissur",
  type: "Engineering",
  image: "/Government Engineering College Thrissur (GEC Thrissur).jpeg",
},
// === Andhra Pradesh Engineering Colleges ===
{
  name: "Indian Institute of Technology Tirupati (IIT Tirupati)",
  state: "Andhra Pradesh",
  city: "Tirupati",
  type: "Engineering",
  image: "/Indian Institute of Technology Tirupati.jpeg",
},
{
  name: "National Institute of Technology Andhra Pradesh (NIT Andhra Pradesh)",
  state: "Andhra Pradesh",
  city: "Tadepalligudem",
  type: "Engineering",
  image: "/NIT.jpg",
},
{
  name: "Vellore Institute of Technology Amaravati (VIT-AP University)",
  state: "Andhra Pradesh",
  city: "Amaravati",
  type: "Engineering",
  image: "/Vellore Institute of Technolog.jpg",
},

// === Telangana Engineering Colleges ===
{
  name: "Indian Institute of Technology Hyderabad (IIT Hyderabad)",
  state: "Telangana",
  city: "Hyderabad",
  type: "Engineering",
  image: "/IIT.jpg",
},
{
  name: "International Institute of Information Technology Hyderabad (IIIT Hyderabad)",
  state: "Telangana",
  city: "Hyderabad",
  type: "Engineering",
  image: "/International Institute.jpg",
},
{
  name: "National Institute of Technology Warangal (NIT Warangal)",
  state: "Telangana",
  city: "Warangal",
  type: "Engineering",
  image: "/National Insti.jpeg",
},


// === Gujarat Engineering Colleges ===
{
  name: "Indian Institute of Technology Gandhinagar (IIT Gandhinagar)",
  state: "Gujarat",
  city: "Gandhinagar",
  type: "Engineering",
  image: "/(IIT Gandhinagar).jpeg",
},
{
  name: "Sardar Vallabhbhai National Institute of Technology Surat (SVNIT Surat)",
  state: "Gujarat",
  city: "Surat",
  type: "Engineering",
  image: "/SVNIT Surat.jpg",
},
{
  name: "Pandit Deendayal Energy University (PDEU)",
  state: "Gujarat",
  city: "Gandhinagar",
  type: "Engineering",
  image: "/(PDEU).jpeg",
},



// === Madhya Pradesh Engineering Colleges ===
{
  name: "Indian Institute of Technology Indore (IIT Indore)",
  state: "Madhya Pradesh",
  city: "Indore",
  type: "Engineering",
  image: "/Indian Institute of Technology Indore (IIT Indore).jpg",
},
{
  name: "Maulana Azad National Institute of Technology Bhopal (MANIT Bhopal)",
  state: "Madhya Pradesh",
  city: "Bhopal",
  type: "Engineering",
  image: "/Maulana Azad National Institute of Technology Bhopal (MANIT Bhopal).jpg",
},
{
  name: "Indian Institute of Information Technology and Management Gwalior (IIITM Gwalior)",
  state: "Madhya Pradesh",
  city: "Gwalior",
  type: "Engineering",
  image: "/Indian Institute of Information Technology and Management Gwalior (IIITM Gwalior).jpg",
},
{
  name: "Shri Govindram Seksaria Institute of Technology and Science (SGSITS)",
  state: "Madhya Pradesh",
  city: "Indore",
  type: "Engineering",
  image: "/Shri Govindram Seksaria Institute of Technology and Science (SGSITS).jpg",
},
// === West Bengal Engineering Colleges ===
{
  name: "Indian Institute of Technology Kharagpur (IIT Kharagpur)",
  state: "West Bengal",
  city: "Kharagpur",
  type: "Engineering",
  image: "/Indian Institute of Technology Kharagpur (IIT Kharagpur).jpg",
},
{
  name: "Jadavpur University, Faculty of Engineering and Technology",
  state: "West Bengal",
  city: "Kolkata",
  type: "Engineering",
  image: "/Jadavpur University Faculty of Engineering and Technology.jpg",
},
{
  name: "Indian Institute of Engineering Science and Technology Shibpur (IIEST Shibpur)",
  state: "West Bengal",
  city: "Howrah",
  type: "Engineering",
  image: "/Indian Institute of Engineering Science and Technology Shibpur (IIEST Shibpur).jpg",
},
{
  name: "National Institute of Technology Durgapur (NIT Durgapur)",
  state: "West Bengal",
  city: "Durgapur",
  type: "Engineering",
  image: "/National Institute of Technology Durgapur (NIT Durgapur).jpg",
},
{
  name: "National Institute of Technology Durgapur (NIT Durgapur)",
  state: "West Bengal",
  city: "Durgapur",
  type: "Engineering",
  image: "/National Institute of Technology Durgapur (NIT Durgapur).jpg",
},

// === Uttar Pradesh Engineering Colleges ===
{
  name: "Indian Institute of Technology Kanpur (IIT Kanpur)",
  state: "Uttar Pradesh",
  city: "Kanpur",
  type: "Engineering",
  image: "/Indian Institute of Technology Kanpur (IIT Kanpur).jpg",
},
{
  name: "Indian Institute of Information Technology Allahabad (IIIT Allahabad)",
  state: "Uttar Pradesh",
  city: "Prayagraj (Allahabad)",
  type: "Engineering",
  image: "/Indian Institute of Information Technology Allahabad (IIIT Allahabad).jpg",
},
{
  name: "Motilal Nehru National Institute of Technology Allahabad (MNNIT Allahabad)",
  state: "Uttar Pradesh",
  city: "Prayagraj (Allahabad)",
  type: "Engineering",
  image: "/Motilal Nehru National Institute of Technology Allahabad (MNNIT Allahabad).jpg",
},
{
  name: "Harcourt Butler Technical University (HBTU Kanpur)",
  state: "Uttar Pradesh",
  city: "Kanpur",
  type: "Engineering",
  image: "/Harcourt Butler Technical University (HBTU Kanpur).jpg",
},
{
  name: "Indian Institute of Technology (BHU) Varanasi",
  state: "Uttar Pradesh",
  city: "Varanasi",
  type: "Engineering",
  image: "/Indian Institute of Technology (BHU) Varanasi.jpg",
},
// === Arunachal Pradesh Engineering Colleges ===
{
  name: "National Institute of Technology Arunachal Pradesh (NIT Arunachal Pradesh)",
  state: "Arunachal Pradesh",
  city: "Yupia",
  type: "Engineering",
  image: "/National Institute of Technology Arunachal Pradesh (NIT Arunachal Pradesh).jpg",
},
{
  name: "North Eastern Regional Institute of Science and Technology (NERIST)",
  state: "Arunachal Pradesh",
  city: "Nirjuli, Itanagar",
  type: "Engineering",
  image: "/North Eastern Regional Institute of Science and Technology (NERIST).jpg",
},
{
  name: "National Institute of Electronics and Information Technology Itanagar (NIELIT Itanagar)",
  state: "Arunachal Pradesh",
  city: "Itanagar",
  type: "Engineering",
  image: "/National Institute of Electronics and Information Technology Itanagar (NIELIT Itanagar).jpg",
},
{
  name: "Rajiv Gandhi Government Polytechnic (RGGP)",
  state: "Arunachal Pradesh",
  city: "Itanagar",
  type: "Engineering",
  image: "/Rajiv Gandhi Government Polytechnic (RGGP).jpg",
},
{
  name: "Tomi Polytechnic College",
  state: "Arunachal Pradesh",
  city: "Basar",
  type: "Engineering",
  image: "/Tomi Polytechnic College.jpg",
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
  "West Bengal",
  "Uttar Pradesh",
  "Arunachal Pradesh ",
];

export default function TopUniversities() {
  const [selectedState, setSelectedState] = useState("Tamil Nadu");

  // Filter by both state and engineering type
  const filteredColleges = colleges.filter(
    (college) =>
      college.state === selectedState && college.type === "Engineering"
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
     <Navbar/>
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-10 px-4">
     
      {/* Page Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-extrabold text-center  mb-10"
      >
        Discover Top Engineering Colleges in India
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
                ? "bg-blue-600 text-white shadow-md"
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
                <span className="text-green-600 text-sm font-semibold">
                  ● Engineering College
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
          No engineering colleges found for this state.
        </motion.p>
      )}
    </div>
    <OurOffices/>
    <NewsletterSection />
    </>
  );
}

