"use client";
import Navbar from "./../../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NewsletterSection from "../../app/NewsletterSection/page";
import OurOffices from "../../components/OurOffices";
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
  // === Kerala Law Colleges ===
{
  name: "Government Law College, Thiruvananthapuram",
  state: "Kerala",
  city: "Thiruvananthapuram",
  type: "Law",
  image: "/Government Law College Thiruvananthapuram.jpg",
},
{
  name: "National University of Advanced Legal Studies (NUALS)",
  state: "Kerala",
  city: "Kochi",
  type: "Law",
  image: "/National University of Advanced Legal Studies Kochi.jpg",
},
{
  name: "Government Law College, Ernakulam",
  state: "Kerala",
  city: "Ernakulam",
  type: "Law",
  image: "/Government Law College Ernakulam.jpg",
},
{
  name: "Kerala Law Academy Law College",
  state: "Kerala",
  city: "Thiruvananthapuram",
  type: "Law",
  image: "/Kerala Law Academy Law College Thiruvananthapuram.jpg",
},
{
  name: "Mar Gregorios College of Law",
  state: "Kerala",
  city: "Thiruvananthapuram",
  type: "Law",
  image: "/Mar Gregorios College of Law Thiruvananthapuram.jpg",
},

// === Andhra Pradesh Law Colleges ===
{
  name: "Damodaram Sanjivayya National Law University (DSNLU)",
  state: "Andhra Pradesh",
  city: "Visakhapatnam",
  type: "Law",
  image: "/Damodaram Sanjivayya National Law University Visakhapatnam.jpg",
},
{
  name: "Dr. B.R. Ambedkar College of Law, Andhra University",
  state: "Andhra Pradesh",
  city: "Visakhapatnam",
  type: "Law",
  image: "/Dr BR Ambedkar College of Law Visakhapatnam.jpg",
},
{
  name: "S.K.R. Government Law College",
  state: "Andhra Pradesh",
  city: "Anantapur",
  type: "Law",
  image: "/SKR Government Law College Anantapur.jpg",
},
{
  name: "D.N.R. College of Law",
  state: "Andhra Pradesh",
  city: "Bhimavaram",
  type: "Law",
  image: "/DNR College of Law Bhimavaram.jpg",
},
{
  name: "VR Law College",
  state: "Andhra Pradesh",
  city: "Nellore",
  type: "Law",
  image: "/VR Law College Nellore.jpg",
},

// === Gujarat Law Colleges ===
{
  name: "Gujarat National Law University (GNLU)",
  state: "Gujarat",
  city: "Gandhinagar",
  type: "Law",
  image: "/Gujarat National Law University Gandhinagar.jpg",
},
{
  name: "Faculty of Law, Maharaja Sayajirao University",
  state: "Gujarat",
  city: "Vadodara",
  type: "Law",
  image: "/Faculty of Law Maharaja Sayajirao University Vadodara.jpg",
},
{
  name: "Sir L.A. Shah Law College",
  state: "Gujarat",
  city: "Ahmedabad",
  type: "Law",
  image: "/Sir LA Shah Law College Ahmedabad.jpg",
},
{
  name: "Nirma University, Institute of Law",
  state: "Gujarat",
  city: "Ahmedabad",
  type: "Law",
  image: "/Nirma University Institute of Law Ahmedabad.jpg",
},
{
  name: "Siddharth Law College",
  state: "Gujarat",
  city: "Gandhinagar",
  type: "Law",
  image: "/Siddharth Law College Gandhinagar.jpg",
},

// === Telangana Law Colleges ===
{
  name: "NALSAR University of Law",
  state: "Telangana",
  city: "Hyderabad",
  type: "Law",
  image: "/NALSAR University of Law Hyderabad.jpg",
},
{
  name: "University College of Law, Osmania University",
  state: "Telangana",
  city: "Hyderabad",
  type: "Law",
  image: "/University College of Law Osmania University Hyderabad.jpg",
},
{
  name: "Kakatiya University College of Law",
  state: "Telangana",
  city: "Warangal",
  type: "Law",
  image: "/Kakatiya University College of Law Warangal.jpg",
},
{
  name: "Pendekanti Law College",
  state: "Telangana",
  city: "Hyderabad",
  type: "Law",
  image: "/Pendekanti Law College Hyderabad.jpg",
},
{
  name: "Mahatma Gandhi Law College",
  state: "Telangana",
  city: "Hyderabad",
  type: "Law",
  image: "/Mahatma Gandhi Law College Hyderabad.jpg",
},

// === Madhya Pradesh Law Colleges ===
{
  name: "National Law Institute University (NLIU)",
  state: "Madhya Pradesh",
  city: "Bhopal",
  type: "Law",
  image: "/National Law Institute University Bhopal.jpg",
},
{
  name: "Faculty of Law, Barkatullah University",
  state: "Madhya Pradesh",
  city: "Bhopal",
  type: "Law",
  image: "/Faculty of Law Barkatullah University Bhopal.jpg",
},
{
  name: "School of Law, Devi Ahilya Vishwavidyalaya",
  state: "Madhya Pradesh",
  city: "Indore",
  type: "Law",
  image: "/School of Law Devi Ahilya Vishwavidyalaya Indore.jpg",
},
{
  name: "Hitkarini Law College",
  state: "Madhya Pradesh",
  city: "Jabalpur",
  type: "Law",
  image: "/Hitkarini Law College Jabalpur.jpg",
},
{
  name: "Government State Law College",
  state: "Madhya Pradesh",
  city: "Bhopal",
  type: "Law",
  image: "/Government State Law College Bhopal.jpg",
},

// === Odisha Law Colleges ===
{
  name: "National Law University Odisha (NLUO)",
  state: "Odisha",
  city: "Cuttack",
  type: "Law",
  image: "/National Law University Odisha Cuttack.jpg",
},
{
  name: "University Law College, Utkal University",
  state: "Odisha",
  city: "Bhubaneswar",
  type: "Law",
  image: "/University Law College Utkal University Bhubaneswar.jpg",
},
{
  name: "M.S. Law College",
  state: "Odisha",
  city: "Cuttack",
  type: "Law",
  image: "/MS Law College Cuttack.jpg",
},
{
  name: "Capital Law College",
  state: "Odisha",
  city: "Bhubaneswar",
  type: "Law",
  image: "/Capital Law College Bhubaneswar.jpg",
},
{
  name: "The Law College, Sambalpur University",
  state: "Odisha",
  city: "Sambalpur",
  type: "Law",
  image: "/The Law College Sambalpur University.jpg",
},

// === West Bengal Law Colleges ===
{
  name: "The West Bengal National University of Juridical Sciences (WBNUJS)",
  state: "West Bengal",
  city: "Kolkata",
  type: "Law",
  image: "/West Bengal National University of Juridical Sciences Kolkata.jpg",
},
{
  name: "Department of Law, University of Calcutta",
  state: "West Bengal",
  city: "Kolkata",
  type: "Law",
  image: "/Department of Law University of Calcutta.jpg",
},
{
  name: "South Calcutta Law College",
  state: "West Bengal",
  city: "Kolkata",
  type: "Law",
  image: "/South Calcutta Law College Kolkata.jpg",
},
{
  name: "Snehangshu Kanta Acharya Institute of Law",
  state: "West Bengal",
  city: "Kalyani",
  type: "Law",
  image: "/Snehangshu Kanta Acharya Institute of Law Kalyani.jpg",
},
{
  name: "Jogesh Chandra Chaudhuri Law College",
  state: "West Bengal",
  city: "Kolkata",
  type: "Law",
  image: "/Jogesh Chandra Chaudhuri Law College Kolkata.jpg",
},

// === Uttar Pradesh Law Colleges ===
{
  name: "Dr. Ram Manohar Lohiya National Law University (RMLNLU)",
  state: "Uttar Pradesh",
  city: "Lucknow",
  type: "Law",
  image: "/Dr Ram Manohar Lohiya National Law University Lucknow.jpg",
},
{
  name: "Faculty of Law, Banaras Hindu University (BHU)",
  state: "Uttar Pradesh",
  city: "Varanasi",
  type: "Law",
  image: "/Faculty of Law Banaras Hindu University Varanasi.jpg",
},
{
  name: "Aligarh Muslim University Faculty of Law",
  state: "Uttar Pradesh",
  city: "Aligarh",
  type: "Law",
  image: "/Aligarh Muslim University Faculty of Law Aligarh.jpg",
},
{
  name: "Lloyd Law College",
  state: "Uttar Pradesh",
  city: "Greater Noida",
  type: "Law",
  image: "/Lloyd Law College Greater Noida.jpg",
},
{
  name: "Amity Law School, Amity University",
  state: "Uttar Pradesh",
  city: "Noida",
  type: "Law",
  image: "/Amity Law School Noida.jpg",
},

// === Arunachal Pradesh Law Colleges ===
{
  name: "Arunachal Law Academy",
  state: "Arunachal Pradesh",
  city: "Itanagar",
  type: "Law",
  image: "/Arunachal Law Academy Itanagar.jpg",
},
{
  name: "Tomo Riba Institute of Law Studies",
  state: "Arunachal Pradesh",
  city: "Naharlagun",
  type: "Law",
  image: "/Tomo Riba Institute of Law Studies Naharlagun.jpg",
},
{
  name: "Indira Gandhi Government College (Law Department)",
  state: "Arunachal Pradesh",
  city: "Tezu",
  type: "Law",
  image: "/Indira Gandhi Government College Tezu Law Department.jpg",
},
{
  name: "Dera Natung Government College (Law Faculty)",
  state: "Arunachal Pradesh",
  city: "Itanagar",
  type: "Law",
  image: "/Dera Natung Government College Itanagar Law Faculty.jpg",
},
{
  name: "North Eastern Regional Institute of Law and Research",
  state: "Arunachal Pradesh",
  city: "Pasighat",
  type: "Law",
  image: "/North Eastern Regional Institute of Law and Research Pasighat.jpg",
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
  "Arunachal Pradesh",
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
      <OurOffices/>
      <NewsletterSection />
    </>
  );
}
