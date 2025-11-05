"use client";
import Navbar from "./../../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NewsletterSection from "../../app/NewsletterSection/page";
import OurOffices from "../../components/OurOffices";

const colleges = [
  // === Tamil Nadu Management Colleges ===
  {
    name: "Indian Institute of Management Tiruchirappalli (IIM Trichy)",
    state: "Tamil Nadu",
    city: "Tiruchirappalli",
    type: "Management",
    image: "/indian institute of technology nagpur images.jpg",
  },
  {
    name: "Loyola Institute of Business Administration (LIBA)",
    state: "Tamil Nadu",
    city: "Chennai",
    type: "Management",
    image: "/loyola institute of business administration.jpg",
  },
  {
    name: "Great Lakes Institute of Management",
    state: "Tamil Nadu",
    city: "Chennai",
    type: "Management",
    image: "/great lakes institute of management.jpg",
  },

  // === Bangalore Management Colleges ===
  {
    name: "Indian Institute of Management Bangalore (IIMB)",
    state: "Bangalore",
    city: "Bangalore",
    type: "Management",
    image: "/indian institute of management bangalore.jpg",
  },
  {
    name: "Alliance School of Business",
    state: "Bangalore",
    city: "Bangalore",
    type: "Management",
    image: "/alliance school of business.jpg",
  },
  {
    name: "Christ University - School of Business and Management",
    state: "Bangalore",
    city: "Bangalore",
    type: "Management",
    image: "/christ university school of business and management bangalore.jpg",
  },

  // === Maharashtra Management Colleges ===
  {
    name: "Indian Institute of Management Nagpur (IIM Nagpur)",
    state: "Maharashtra",
    city: "Nagpur",
    type: "Management",
    image: "/indian institute of technology nagpur images.jpg",
  },
  {
    name: "Jamnalal Bajaj Institute of Management Studies (JBIMS)",
    state: "Maharashtra",
    city: "Mumbai",
    type: "Management",
    image: "/jamnalal bajaj institute of management studies.jpg",
  },
  {
    name: "Symbiosis Institute of Business Management (SIBM)",
    state: "Maharashtra",
    city: "Pune",
    type: "Management",
    image: "/symbiosis institute of business management maharashtra.jpg",
  },
 

// === Kerala Management Colleges ===
{
  name: "Indian Institute of Management Kozhikode (IIM Kozhikode)",
  state: "Kerala",
  city: "Kozhikode",
  type: "Management",
  image: "/IIM-Kozhikode.jpg",
},
{
  name: "Rajagiri Centre for Business Studies",
  state: "Kerala",
  city: "Kochi",
  type: "Management",
  image: "/Rajagiri-Centre-for-Business-Studies.jpg",
},
{
  name: "SCMS Cochin School of Business",
  state: "Kerala",
  city: "Cochin",
  type: "Management",
  image: "/SCMS-Cochin.jpg",
},
{
  name: "Amrita School of Business (Kochi Campus)",
  state: "Kerala",
  city: "Kochi",
  type: "Management",
  image: "/Amrita-School-of-Business-Kochi.jpg",
},
{
  name: "DC School of Management and Technology (DCSMAT)",
  state: "Kerala",
  city: "Vagamon",
  type: "Management",
  image: "/DCSMAT-Vagamon.jpg",
},

// === Andhra Pradesh Management Colleges ===
{
  name: "Indian Institute of Management Visakhapatnam (IIM Vizag)",
  state: "Andhra Pradesh",
  city: "Visakhapatnam",
  type: "Management",
  image: "/IIM-Visakhapatnam.jpg",
},
{
  name: "GITAM School of Business",
  state: "Andhra Pradesh",
  city: "Visakhapatnam",
  type: "Management",
  image: "/GITAM-School-of-Business.jpg",
},
{
  name: "KL Business School (KL University)",
  state: "Andhra Pradesh",
  city: "Guntur",
  type: "Management",
  image: "/KL-Business-School.jpg",
},
{
  name: "Vignan Institute of Information Technology - School of Management",
  state: "Andhra Pradesh",
  city: "Visakhapatnam",
  type: "Management",
  image: "/Vignan-School-of-Management.jpg",
},
{
  name: "Andhra University School of Management Studies",
  state: "Andhra Pradesh",
  city: "Visakhapatnam",
  type: "Management",
  image: "/Andhra-University-School-of-Management.jpg",
},

// === Gujarat Management Colleges ===
{
  name: "Indian Institute of Management Ahmedabad (IIM Ahmedabad)",
  state: "Gujarat",
  city: "Ahmedabad",
  type: "Management",
  image: "/IIM-Ahmedabad.jpg",
},
{
  name: "Institute of Management, Nirma University",
  state: "Gujarat",
  city: "Ahmedabad",
  type: "Management",
  image: "/Nirma-University-Management.jpg",
},
{
  name: "Pandit Deendayal Energy University (School of Management)",
  state: "Gujarat",
  city: "Gandhinagar",
  type: "Management",
  image: "/PDEU-School-of-Management.jpg",
},
{
  name: "B.K. School of Professional and Management Studies",
  state: "Gujarat",
  city: "Ahmedabad",
  type: "Management",
  image: "/BK-School-of-Management.jpg",
},
{
  name: "Entrepreneurship Development Institute of India (EDII)",
  state: "Gujarat",
  city: "Gandhinagar",
  type: "Management",
  image: "/EDII-Gandhinagar.jpg",
},

// === Telangana Management Colleges ===
{
  name: "Indian School of Business (ISB Hyderabad)",
  state: "Telangana",
  city: "Hyderabad",
  type: "Management",
  image: "/ISB-Hyderabad.jpg",
},
{
  name: "Institute of Public Enterprise (IPE)",
  state: "Telangana",
  city: "Hyderabad",
  type: "Management",
  image: "/IPE-Hyderabad.jpg",
},
{
  name: "ICFAI Business School (IBS Hyderabad)",
  state: "Telangana",
  city: "Hyderabad",
  type: "Management",
  image: "/IBS-Hyderabad.jpg",
},
{
  name: "Vignana Jyothi Institute of Management (VJIM)",
  state: "Telangana",
  city: "Hyderabad",
  type: "Management",
  image: "/VJIM-Hyderabad.jpg",
},
{
  name: "GITAM Hyderabad Business School",
  state: "Telangana",
  city: "Hyderabad",
  type: "Management",
  image: "/GITAM-Hyderabad-Business-School.jpg",
},

// === Madhya Pradesh Management Colleges ===
{
  name: "Indian Institute of Management Indore (IIM Indore)",
  state: "Madhya Pradesh",
  city: "Indore",
  type: "Management",
  image: "/IIM-Indore.jpg",
},
{
  name: "Institute of Management Studies, DAVV",
  state: "Madhya Pradesh",
  city: "Indore",
  type: "Management",
  image: "/IMS-DAVV-Indore.jpg",
},
{
  name: "Prestige Institute of Management and Research (PIMR)",
  state: "Madhya Pradesh",
  city: "Indore",
  type: "Management",
  image: "/PIMR-Indore.jpg",
},
{
  name: "Indian Institute of Forest Management (IIFM)",
  state: "Madhya Pradesh",
  city: "Bhopal",
  type: "Management",
  image: "/IIFM-Bhopal.jpg",
},
{
  name: "VIT Business School, Bhopal",
  state: "Madhya Pradesh",
  city: "Bhopal",
  type: "Management",
  image: "/VIT-Business-School-Bhopal.jpg",
},

// === Odisha Management Colleges ===
{
  name: "Xavier Institute of Management Bhubaneswar (XIMB)",
  state: "Odisha",
  city: "Bhubaneswar",
  type: "Management",
  image: "/XIMB.jpg",
},
{
  name: "KIIT School of Management (KSOM)",
  state: "Odisha",
  city: "Bhubaneswar",
  type: "Management",
  image: "/KSOM-Bhubaneswar.jpg",
},
{
  name: "Institute of Management and Information Science (IMIS)",
  state: "Odisha",
  city: "Bhubaneswar",
  type: "Management",
  image: "/IMIS-Bhubaneswar.jpg",
},
{
  name: "Birla Global University - School of Management",
  state: "Odisha",
  city: "Bhubaneswar",
  type: "Management",
  image: "/Birla-Global-University.jpg",
},
{
  name: "Regional College of Management (RCM)",
  state: "Odisha",
  city: "Bhubaneswar",
  type: "Management",
  image: "/RCM-Bhubaneswar.jpg",
},

// === West Bengal Management Colleges ===
{
  name: "Indian Institute of Management Calcutta (IIM Calcutta)",
  state: "West Bengal",
  city: "Kolkata",
  type: "Management",
  image: "/IIM-Calcutta.jpg",
},
{
  name: "Indian Institute of Social Welfare and Business Management (IISWBM)",
  state: "West Bengal",
  city: "Kolkata",
  type: "Management",
  image: "/IISWBM-Kolkata.jpg",
},
{
  name: "International Management Institute (IMI Kolkata)",
  state: "West Bengal",
  city: "Kolkata",
  type: "Management",
  image: "/IMI-Kolkata.jpg",
},
{
  name: "Army Institute of Management Kolkata (AIMK)",
  state: "West Bengal",
  city: "Kolkata",
  type: "Management",
  image: "/AIMK-Kolkata.jpg",
},
{
  name: "Globsyn Business School",
  state: "West Bengal",
  city: "Kolkata",
  type: "Management",
  image: "/Globsyn-Business-School.jpg",
},

// === Uttar Pradesh Management Colleges ===
{
  name: "Indian Institute of Management Lucknow (IIM Lucknow)",
  state: "Uttar Pradesh",
  city: "Lucknow",
  type: "Management",
  image: "/IIM-Lucknow.jpg",
},
{
  name: "Institute of Management Technology (IMT Ghaziabad)",
  state: "Uttar Pradesh",
  city: "Ghaziabad",
  type: "Management",
  image: "/IMT-Ghaziabad.jpg",
},
{
  name: "Amity Business School",
  state: "Uttar Pradesh",
  city: "Noida",
  type: "Management",
  image: "/Amity-Business-School.jpg",
},
{
  name: "Jaipuria Institute of Management",
  state: "Uttar Pradesh",
  city: "Lucknow",
  type: "Management",
  image: "/Jaipuria-Institute-of-Management.jpg",
},
{
  name: "Birla Institute of Management Technology (BIMTECH)",
  state: "Uttar Pradesh",
  city: "Greater Noida",
  type: "Management",
  image: "/BIMTECH.jpg",
},
// === Arunachal Pradesh Management Colleges ===
{
  name: "Rajiv Gandhi University – Department of Management",
  state: "Arunachal Pradesh",
  city: "Doimukh, Itanagar",
  type: "Management",
  image: "/Rajiv-Gandhi-University-Department-of-Management.jpg",
},
{
  name: "North Eastern Regional Institute of Science and Technology (NERIST) – Centre for Management Studies",
  state: "Arunachal Pradesh",
  city: "Nirjuli, Itanagar",
  type: "Management",
  image: "/NERIST-Centre-for-Management-Studies.jpg",
},
{
  name: "Himalayan University – School of Business and Management",
  state: "Arunachal Pradesh",
  city: "Itanagar",
  type: "Management",
  image: "/Himalayan-University-School-of-Business-and-Management.jpg",
},
{
  name: "Arunachal University of Studies – Faculty of Management",
  state: "Arunachal Pradesh",
  city: "Namsai",
  type: "Management",
  image: "/Arunachal-University-of-Studies-Faculty-of-Management.jpg",
},
{
  name: "Indira Gandhi Technological and Medical Sciences University (IGTAMSU) – School of Management",
  state: "Arunachal Pradesh",
  city: "Ziro",
  type: "Management",
  image: "/IGTAMSU-School-of-Management.jpg",
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

export default function TopManagementColleges() {
  const [selectedState, setSelectedState] = useState("Tamil Nadu");

  // Filter by both state and management type
  const filteredColleges = colleges.filter(
    (college) =>
      college.state === selectedState && college.type === "Management"
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 py-10 px-4">
        {/* Page Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-orange-700 mb-10"
        >
          Discover Top Management Colleges in India
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
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-orange-100"
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
                  <span className="text-blue-600 text-sm font-semibold">
                    ● Management College
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
            No management colleges found for this state.
          </motion.p>
        )}
      </div>
      <OurOffices/>
      <NewsletterSection />
    </>
  );
}
