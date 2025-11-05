"use client";
import Navbar from "./../../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NewsletterSection from "../../app/NewsletterSection/page";
import OurOffices from "../../components/OurOffices";
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
  // === Kerala Medical Colleges ===
{
  name: "Government Medical College, Thiruvananthapuram",
  state: "Kerala",
  city: "Thiruvananthapuram",
  type: "Medical",
  image: "/Government Medical College Thiruvananthapuram.jpg",
},
{
  name: "Government Medical College, Kozhikode",
  state: "Kerala",
  city: "Kozhikode",
  type: "Medical",
  image: "/Government Medical College Kozhikode.jpg",
},
{
  name: "Amrita Institute of Medical Sciences (AIMS)",
  state: "Kerala",
  city: "Kochi",
  type: "Medical",
  image: "/Amrita Institute of Medical Sciences Kochi.jpg",
},
{
  name: "Jubilee Mission Medical College and Research Institute",
  state: "Kerala",
  city: "Thrissur",
  type: "Medical",
  image: "/Jubilee Mission Medical College Thrissur.jpg",
},
{
  name: "MES Medical College",
  state: "Kerala",
  city: "Malappuram",
  type: "Medical",
  image: "/MES Medical College Malappuram.jpg",
},

// === Andhra Pradesh Medical Colleges ===
{
  name: "All India Institute of Medical Sciences (AIIMS) Mangalagiri",
  state: "Andhra Pradesh",
  city: "Mangalagiri",
  type: "Medical",
  image: "/AIIMS Mangalagiri.jpg",
},
{
  name: "Andhra Medical College",
  state: "Andhra Pradesh",
  city: "Visakhapatnam",
  type: "Medical",
  image: "/Andhra Medical College Visakhapatnam.jpg",
},
{
  name: "Guntur Medical College",
  state: "Andhra Pradesh",
  city: "Guntur",
  type: "Medical",
  image: "/Guntur Medical College.jpg",
},
{
  name: "Sri Venkateswara Institute of Medical Sciences (SVIMS)",
  state: "Andhra Pradesh",
  city: "Tirupati",
  type: "Medical",
  image: "/Sri Venkateswara Institute of Medical Sciences Tirupati.jpg",
},
{
  name: "NRI Medical College",
  state: "Andhra Pradesh",
  city: "Guntur",
  type: "Medical",
  image: "/NRI Medical College Guntur.jpg",
},

// === Gujarat Medical Colleges ===
{
  name: "B. J. Medical College",
  state: "Gujarat",
  city: "Ahmedabad",
  type: "Medical",
  image: "/BJ Medical College Ahmedabad.jpg",
},
{
  name: "Pandit Deendayal Upadhyay Medical College",
  state: "Gujarat",
  city: "Rajkot",
  type: "Medical",
  image: "/Pandit Deendayal Upadhyay Medical College Rajkot.jpg",
},
{
  name: "Government Medical College, Surat",
  state: "Gujarat",
  city: "Surat",
  type: "Medical",
  image: "/Government Medical College Surat.jpg",
},
{
  name: "Smt. NHL Municipal Medical College",
  state: "Gujarat",
  city: "Ahmedabad",
  type: "Medical",
  image: "/Smt NHL Municipal Medical College Ahmedabad.jpg",
},
{
  name: "Baroda Medical College",
  state: "Gujarat",
  city: "Vadodara",
  type: "Medical",
  image: "/Baroda Medical College Vadodara.jpg",
},

// === Telangana Medical Colleges ===
{
  name: "Osmania Medical College",
  state: "Telangana",
  city: "Hyderabad",
  type: "Medical",
  image: "/Osmania Medical College Hyderabad.jpg",
},
{
  name: "Kakatiya Medical College",
  state: "Telangana",
  city: "Warangal",
  type: "Medical",
  image: "/Kakatiya Medical College Warangal.jpg",
},
{
  name: "Gandhi Medical College",
  state: "Telangana",
  city: "Hyderabad",
  type: "Medical",
  image: "/Gandhi Medical College Hyderabad.jpg",
},
{
  name: "Deccan College of Medical Sciences",
  state: "Telangana",
  city: "Hyderabad",
  type: "Medical",
  image: "/Deccan College of Medical Sciences Hyderabad.jpg",
},
{
  name: "MNR Medical College and Hospital",
  state: "Telangana",
  city: "Sangareddy",
  type: "Medical",
  image: "/MNR Medical College and Hospital Sangareddy.jpg",
},

// === Madhya Pradesh Medical Colleges ===
{
  name: "All India Institute of Medical Sciences (AIIMS) Bhopal",
  state: "Madhya Pradesh",
  city: "Bhopal",
  type: "Medical",
  image: "/AIIMS Bhopal.jpg",
},
{
  name: "Gandhi Medical College",
  state: "Madhya Pradesh",
  city: "Bhopal",
  type: "Medical",
  image: "/Gandhi Medical College Bhopal.jpg",
},
{
  name: "Mahatma Gandhi Memorial Medical College (MGMMC)",
  state: "Madhya Pradesh",
  city: "Indore",
  type: "Medical",
  image: "/Mahatma Gandhi Memorial Medical College Indore.jpg",
},
{
  name: "Netaji Subhash Chandra Bose Medical College",
  state: "Madhya Pradesh",
  city: "Jabalpur",
  type: "Medical",
  image: "/Netaji Subhash Chandra Bose Medical College Jabalpur.jpg",
},
{
  name: "Gajra Raja Medical College",
  state: "Madhya Pradesh",
  city: "Gwalior",
  type: "Medical",
  image: "/Gajra Raja Medical College Gwalior.jpg",
},

// === Odisha Medical Colleges ===
{
  name: "All India Institute of Medical Sciences (AIIMS) Bhubaneswar",
  state: "Odisha",
  city: "Bhubaneswar",
  type: "Medical",
  image: "/AIIMS Bhubaneswar.jpg",
},
{
  name: "S.C.B. Medical College and Hospital",
  state: "Odisha",
  city: "Cuttack",
  type: "Medical",
  image: "/SCB Medical College Cuttack.jpg",
},
{
  name: "VSS Institute of Medical Sciences and Research (VIMSAR)",
  state: "Odisha",
  city: "Burla, Sambalpur",
  type: "Medical",
  image: "/VSS Institute of Medical Sciences and Research Burla.jpg",
},
{
  name: "Kalinga Institute of Medical Sciences (KIMS)",
  state: "Odisha",
  city: "Bhubaneswar",
  type: "Medical",
  image: "/Kalinga Institute of Medical Sciences Bhubaneswar.jpg",
},
{
  name: "Hi-Tech Medical College and Hospital",
  state: "Odisha",
  city: "Bhubaneswar",
  type: "Medical",
  image: "/Hi-Tech Medical College Bhubaneswar.jpg",
},

// === West Bengal Medical Colleges ===
{
  name: "All India Institute of Medical Sciences (AIIMS) Kalyani",
  state: "West Bengal",
  city: "Kalyani",
  type: "Medical",
  image: "/AIIMS Kalyani.jpg",
},
{
  name: "Calcutta National Medical College",
  state: "West Bengal",
  city: "Kolkata",
  type: "Medical",
  image: "/Calcutta National Medical College Kolkata.jpg",
},
{
  name: "Medical College and Hospital, Kolkata",
  state: "West Bengal",
  city: "Kolkata",
  type: "Medical",
  image: "/Medical College and Hospital Kolkata.jpg",
},
{
  name: "R.G. Kar Medical College and Hospital",
  state: "West Bengal",
  city: "Kolkata",
  type: "Medical",
  image: "/RG Kar Medical College Kolkata.jpg",
},
{
  name: "Nil Ratan Sircar Medical College and Hospital",
  state: "West Bengal",
  city: "Kolkata",
  type: "Medical",
  image: "/Nil Ratan Sircar Medical College Kolkata.jpg",
},

// === Uttar Pradesh Medical Colleges ===
{
  name: "King George's Medical University (KGMU)",
  state: "Uttar Pradesh",
  city: "Lucknow",
  type: "Medical",
  image: "/King Georges Medical University Lucknow.jpg",
},
{
  name: "All India Institute of Medical Sciences (AIIMS) Gorakhpur",
  state: "Uttar Pradesh",
  city: "Gorakhpur",
  type: "Medical",
  image: "/AIIMS Gorakhpur.jpg",
},
{
  name: "Banaras Hindu University Institute of Medical Sciences (BHU IMS)",
  state: "Uttar Pradesh",
  city: "Varanasi",
  type: "Medical",
  image: "/BHU Institute of Medical Sciences Varanasi.jpg",
},
{
  name: "Motilal Nehru Medical College",
  state: "Uttar Pradesh",
  city: "Prayagraj (Allahabad)",
  type: "Medical",
  image: "/Motilal Nehru Medical College Prayagraj.jpg",
},
{
  name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
  state: "Uttar Pradesh",
  city: "Lucknow",
  type: "Medical",
  image: "/SGPGIMS Lucknow.jpg",
},

// === Arunachal Pradesh Medical Colleges ===
{
  name: "Tomo Riba Institute of Health and Medical Sciences (TRIHMS)",
  state: "Arunachal Pradesh",
  city: "Naharlagun",
  type: "Medical",
  image: "/Tomo Riba Institute of Health and Medical Sciences Naharlagun.jpg",
},
{
  name: "North Eastern Institute of Folk Medicine (NEIFM)",
  state: "Arunachal Pradesh",
  city: "Pasighat",
  type: "Medical",
  image: "/North Eastern Institute of Folk Medicine Pasighat.jpg",
},
{
  name: "Zonal General Hospital Training Centre",
  state: "Arunachal Pradesh",
  city: "Naharlagun",
  type: "Medical",
  image: "/Zonal General Hospital Training Centre Naharlagun.jpg",
},
{
  name: "R.K. Mission Hospital (Training Centre)",
  state: "Arunachal Pradesh",
  city: "Itanagar",
  type: "Medical",
  image: "/RK Mission Hospital Itanagar.jpg",
},
{
  name: "Bakin Pertin General Hospital and Training Centre",
  state: "Arunachal Pradesh",
  city: "Pasighat",
  type: "Medical",
  image: "/Bakin Pertin General Hospital Pasighat.jpg",
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
  "Arunachal Pradesh",
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
      <OurOffices/>
      <NewsletterSection />
    </>
  );
}
