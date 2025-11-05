"use client";
import Navbar from "./../../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NewsletterSection from "../../app/NewsletterSection/page";
import OurOffices from "../../components/OurOffices";
const colleges = [
  // === Tamil Nadu Arts & Humanities Colleges ===
  {
    name: "Loyola College",
    state: "Tamil Nadu",
    city: "Chennai",
    type: "Arts & Humanities",
    image: "/colleges/loyola.jpg",
  },
  {
    name: "Madras Christian College (MCC)",
    state: "Tamil Nadu",
    city: "Chennai",
    type: "Arts & Humanities",
    image: "/colleges/mcc.jpg",
  },
  {
    name: "PSG College of Arts and Science",
    state: "Tamil Nadu",
    city: "Coimbatore",
    type: "Arts & Humanities",
    image: "/colleges/psg.jpg",
  },

  // === Bangalore Arts & Humanities Colleges ===
  {
    name: "Christ University",
    state: "Bangalore",
    city: "Bangalore",
    type: "Arts & Humanities",
    image: "/colleges/christ_arts.jpg",
  },
  {
    name: "Mount Carmel College",
    state: "Bangalore",
    city: "Bangalore",
    type: "Arts & Humanities",
    image: "/colleges/mountcarmel.jpg",
  },
  {
    name: "St. Joseph’s College (Autonomous)",
    state: "Bangalore",
    city: "Bangalore",
    type: "Arts & Humanities",
    image: "/colleges/stjosephs.jpg",
  },

  // === Maharashtra Arts & Humanities Colleges ===
  {
    name: "St. Xavier’s College",
    state: "Maharashtra",
    city: "Mumbai",
    type: "Arts & Humanities",
    image: "/colleges/stxaviers.jpg",
  },
  {
    name: "Fergusson College",
    state: "Maharashtra",
    city: "Pune",
    type: "Arts & Humanities",
    image: "/colleges/fergusson.jpg",
  },
  {
    name: "Sophia College for Women",
    state: "Maharashtra",
    city: "Mumbai",
    type: "Arts & Humanities",
    image: "/colleges/sophia.jpg",
  },
  // === Kerala Arts & Humanities Colleges ===
{
  name: "University of Kerala",
  state: "Kerala",
  city: "Thiruvananthapuram",
  type: "Arts & Humanities",
  image: "/University-of-Kerala.jpg",
},
{
  name: "Mahatma Gandhi University",
  state: "Kerala",
  city: "Kottayam",
  type: "Arts & Humanities",
  image: "/Mahatma-Gandhi-University-Kottayam.jpg",
},
{
  name: "Calicut University",
  state: "Kerala",
  city: "Malappuram",
  type: "Arts & Humanities",
  image: "/University-of-Calicut.jpg",
},
{
  name: "St. Teresa’s College",
  state: "Kerala",
  city: "Ernakulam",
  type: "Arts & Humanities",
  image: "/St-Teresas-College-Ernakulam.jpg",
},
{
  name: "Loyola College of Social Sciences",
  state: "Kerala",
  city: "Thiruvananthapuram",
  type: "Arts & Humanities",
  image: "/Loyola-College-of-Social-Sciences.jpg",
},

// === Andhra Pradesh Arts & Humanities Colleges ===
{
  name: "Andhra University",
  state: "Andhra Pradesh",
  city: "Visakhapatnam",
  type: "Arts & Humanities",
  image: "/Andhra-University.jpg",
},
{
  name: "Sri Venkateswara University",
  state: "Andhra Pradesh",
  city: "Tirupati",
  type: "Arts & Humanities",
  image: "/Sri-Venkateswara-University.jpg",
},
{
  name: "Acharya Nagarjuna University",
  state: "Andhra Pradesh",
  city: "Guntur",
  type: "Arts & Humanities",
  image: "/Acharya-Nagarjuna-University.jpg",
},
{
  name: "Dr. B.R. Ambedkar University Srikakulam",
  state: "Andhra Pradesh",
  city: "Srikakulam",
  type: "Arts & Humanities",
  image: "/Dr-BR-Ambedkar-University-Srikakulam.jpg",
},
{
  name: "Adikavi Nannaya University",
  state: "Andhra Pradesh",
  city: "Rajamahendravaram",
  type: "Arts & Humanities",
  image: "/Adikavi-Nannaya-University.jpg",
},

// === Gujarat Arts & Humanities Colleges ===
{
  name: "The Maharaja Sayajirao University of Baroda",
  state: "Gujarat",
  city: "Vadodara",
  type: "Arts & Humanities",
  image: "/MSU-Baroda.jpg",
},
{
  name: "Gujarat University",
  state: "Gujarat",
  city: "Ahmedabad",
  type: "Arts & Humanities",
  image: "/Gujarat-University.jpg",
},
{
  name: "Sardar Patel University",
  state: "Gujarat",
  city: "Vallabh Vidyanagar",
  type: "Arts & Humanities",
  image: "/Sardar-Patel-University.jpg",
},
{
  name: "Pandit Deendayal Upadhyay Government College",
  state: "Gujarat",
  city: "Gandhinagar",
  type: "Arts & Humanities",
  image: "/Pandit-Deendayal-Upadhyay-College.jpg",
},
{
  name: "St. Xavier’s College Ahmedabad",
  state: "Gujarat",
  city: "Ahmedabad",
  type: "Arts & Humanities",
  image: "/St-Xaviers-College-Ahmedabad.jpg",
},

// === Telangana Arts & Humanities Colleges ===
{
  name: "Osmania University",
  state: "Telangana",
  city: "Hyderabad",
  type: "Arts & Humanities",
  image: "/Osmania-University.jpg",
},
{
  name: "University of Hyderabad",
  state: "Telangana",
  city: "Hyderabad",
  type: "Arts & Humanities",
  image: "/University-of-Hyderabad.jpg",
},
{
  name: "Kakatiya University",
  state: "Telangana",
  city: "Warangal",
  type: "Arts & Humanities",
  image: "/Kakatiya-University.jpg",
},
{
  name: "Nizam College",
  state: "Telangana",
  city: "Hyderabad",
  type: "Arts & Humanities",
  image: "/Nizam-College.jpg",
},
{
  name: "Loyola Academy Degree and PG College",
  state: "Telangana",
  city: "Secunderabad",
  type: "Arts & Humanities",
  image: "/Loyola-Academy-Secunderabad.jpg",
},

// === Madhya Pradesh Arts & Humanities Colleges ===
{
  name: "Barkatullah University",
  state: "Madhya Pradesh",
  city: "Bhopal",
  type: "Arts & Humanities",
  image: "/Barkatullah-University.jpg",
},
{
  name: "Devi Ahilya Vishwavidyalaya",
  state: "Madhya Pradesh",
  city: "Indore",
  type: "Arts & Humanities",
  image: "/Devi-Ahilya-Vishwavidyalaya.jpg",
},
{
  name: "Jiwaji University",
  state: "Madhya Pradesh",
  city: "Gwalior",
  type: "Arts & Humanities",
  image: "/Jiwaji-University.jpg",
},
{
  name: "Rani Durgavati Vishwavidyalaya",
  state: "Madhya Pradesh",
  city: "Jabalpur",
  type: "Arts & Humanities",
  image: "/Rani-Durgavati-Vishwavidyalaya.jpg",
},
{
  name: "Christ College Bhopal",
  state: "Madhya Pradesh",
  city: "Bhopal",
  type: "Arts & Humanities",
  image: "/Christ-College-Bhopal.jpg",
},

// === Odisha Arts & Humanities Colleges ===
{
  name: "Utkal University",
  state: "Odisha",
  city: "Bhubaneswar",
  type: "Arts & Humanities",
  image: "/Utkal-University.jpg",
},
{
  name: "Ravenshaw University",
  state: "Odisha",
  city: "Cuttack",
  type: "Arts & Humanities",
  image: "/Ravenshaw-University.jpg",
},
{
  name: "Berhampur University",
  state: "Odisha",
  city: "Berhampur",
  type: "Arts & Humanities",
  image: "/Berhampur-University.jpg",
},
{
  name: "Sambalpur University",
  state: "Odisha",
  city: "Sambalpur",
  type: "Arts & Humanities",
  image: "/Sambalpur-University.jpg",
},
{
  name: "BJB Autonomous College",
  state: "Odisha",
  city: "Bhubaneswar",
  type: "Arts & Humanities",
  image: "/BJB-Autonomous-College.jpg",
},

// === West Bengal Arts & Humanities Colleges ===
{
  name: "University of Calcutta",
  state: "West Bengal",
  city: "Kolkata",
  type: "Arts & Humanities",
  image: "/University-of-Calcutta.jpg",
},
{
  name: "Jadavpur University",
  state: "West Bengal",
  city: "Kolkata",
  type: "Arts & Humanities",
  image: "/Jadavpur-University.jpg",
},
{
  name: "Presidency University",
  state: "West Bengal",
  city: "Kolkata",
  type: "Arts & Humanities",
  image: "/Presidency-University-Kolkata.jpg",
},
{
  name: "Visva-Bharati University",
  state: "West Bengal",
  city: "Santiniketan",
  type: "Arts & Humanities",
  image: "/Visva-Bharati-University.jpg",
},
{
  name: "St. Xavier’s College Kolkata",
  state: "West Bengal",
  city: "Kolkata",
  type: "Arts & Humanities",
  image: "/St-Xaviers-College-Kolkata.jpg",
},

// === Uttar Pradesh Arts & Humanities Colleges ===
{
  name: "Banaras Hindu University (BHU)",
  state: "Uttar Pradesh",
  city: "Varanasi",
  type: "Arts & Humanities",
  image: "/Banaras-Hindu-University.jpg",
},
{
  name: "Aligarh Muslim University (AMU)",
  state: "Uttar Pradesh",
  city: "Aligarh",
  type: "Arts & Humanities",
  image: "/Aligarh-Muslim-University.jpg",
},
{
  name: "University of Lucknow",
  state: "Uttar Pradesh",
  city: "Lucknow",
  type: "Arts & Humanities",
  image: "/University-of-Lucknow.jpg",
},
{
  name: "Allahabad University",
  state: "Uttar Pradesh",
  city: "Prayagraj (Allahabad)",
  type: "Arts & Humanities",
  image: "/Allahabad-University.jpg",
},
{
  name: "Dr. Ram Manohar Lohia Avadh University",
  state: "Uttar Pradesh",
  city: "Faizabad",
  type: "Arts & Humanities",
  image: "/Dr-Ram-Manohar-Lohia-Avadh-University.jpg",
},

// === Arunachal Pradesh Arts & Humanities Colleges ===
{
  name: "Rajiv Gandhi University",
  state: "Arunachal Pradesh",
  city: "Itanagar",
  type: "Arts & Humanities",
  image: "/Rajiv-Gandhi-University-Itanagar.jpg",
},
{
  name: "Dera Natung Government College",
  state: "Arunachal Pradesh",
  city: "Itanagar",
  type: "Arts & Humanities",
  image: "/Dera-Natung-Government-College.jpg",
},
{
  name: "Indira Gandhi Government College",
  state: "Arunachal Pradesh",
  city: "Tezu",
  type: "Arts & Humanities",
  image: "/Indira-Gandhi-Government-College-Tezu.jpg",
},
{
  name: "Jawaharlal Nehru College",
  state: "Arunachal Pradesh",
  city: "Pasighat",
  type: "Arts & Humanities",
  image: "/Jawaharlal-Nehru-College-Pasighat.jpg",
},
{
  name: "St. Claret College Ziro",
  state: "Arunachal Pradesh",
  city: "Ziro",
  type: "Arts & Humanities",
  image: "/St-Claret-College-Ziro.jpg",
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

export default function TopArtsColleges() {
  const [selectedState, setSelectedState] = useState("Tamil Nadu");

  // Filter by both state and type
  const filteredColleges = colleges.filter(
    (college) =>
      college.state === selectedState && college.type === "Arts & Humanities"
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-200 py-10 px-4">
        {/* Page Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-center  mb-10"
        >
          Discover Top Arts & Humanities Colleges in India
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
                  ? "bg-purple-500 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-pink-100"
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
                  <span className="text-pink-600 text-sm font-semibold">
                    ● Arts & Humanities College
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
            No Arts & Humanities colleges found for this state.
          </motion.p>
        )}
      </div>
      <OurOffices/>
      <NewsletterSection />
    </>
  );
}

