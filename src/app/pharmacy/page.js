"use client";
import Navbar from "./../../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NewsletterSection from "../../app/NewsletterSection/page";
import OurOffices from "../../components/OurOffices";
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
  // === Tamil Nadu Pharmacy Colleges ===
{
  name: "Madras Medical College - Department of Pharmacy",
  state: "Tamil Nadu",
  city: "Chennai",
  type: "Pharmacy",
  image: "/Madras Medical College Chennai.jpg",
},
{
  name: "SRM College of Pharmacy",
  state: "Tamil Nadu",
  city: "Kattankulathur",
  type: "Pharmacy",
  image: "/SRM College of Pharmacy Kattankulathur.jpg",
},
{
  name: "JSS College of Pharmacy",
  state: "Tamil Nadu",
  city: "Ooty",
  type: "Pharmacy",
  image: "/JSS College of Pharmacy Ooty.jpg",
},
{
  name: "PSG College of Pharmacy",
  state: "Tamil Nadu",
  city: "Coimbatore",
  type: "Pharmacy",
  image: "/PSG College of Pharmacy Coimbatore.jpg",
},
{
  name: "Sri Ramachandra Faculty of Pharmacy",
  state: "Tamil Nadu",
  city: "Chennai",
  type: "Pharmacy",
  image: "/Sri Ramachandra Faculty of Pharmacy Chennai.jpg",
},

// === Karnataka Pharmacy Colleges ===
{
  name: "Manipal College of Pharmaceutical Sciences (MCOPS)",
  state: "Karnataka",
  city: "Manipal",
  type: "Pharmacy",
  image: "/Manipal College of Pharmaceutical Sciences Manipal.jpg",
},
{
  name: "JSS College of Pharmacy",
  state: "Karnataka",
  city: "Mysuru",
  type: "Pharmacy",
  image: "/JSS College of Pharmacy Mysuru.jpg",
},
{
  name: "Al-Ameen College of Pharmacy",
  state: "Karnataka",
  city: "Bengaluru",
  type: "Pharmacy",
  image: "/Al-Ameen College of Pharmacy Bengaluru.jpg",
},
{
  name: "KLE College of Pharmacy",
  state: "Karnataka",
  city: "Belagavi",
  type: "Pharmacy",
  image: "/KLE College of Pharmacy Belagavi.jpg",
},
{
  name: "Dayananda Sagar College of Pharmacy",
  state: "Karnataka",
  city: "Bengaluru",
  type: "Pharmacy",
  image: "/Dayananda Sagar College of Pharmacy Bengaluru.jpg",
},

// === Maharashtra Pharmacy Colleges ===
{
  name: "Bombay College of Pharmacy",
  state: "Maharashtra",
  city: "Mumbai",
  type: "Pharmacy",
  image: "/Bombay College of Pharmacy Mumbai.jpg",
},
{
  name: "Poona College of Pharmacy",
  state: "Maharashtra",
  city: "Pune",
  type: "Pharmacy",
  image: "/Poona College of Pharmacy Pune.jpg",
},
{
  name: "Institute of Chemical Technology (ICT)",
  state: "Maharashtra",
  city: "Mumbai",
  type: "Pharmacy",
  image: "/Institute of Chemical Technology Mumbai.jpg",
},
{
  name: "Bharati Vidyapeeth College of Pharmacy",
  state: "Maharashtra",
  city: "Kolhapur",
  type: "Pharmacy",
  image: "/Bharati Vidyapeeth College of Pharmacy Kolhapur.jpg",
},
{
  name: "Dr. D. Y. Patil Institute of Pharmaceutical Sciences and Research",
  state: "Maharashtra",
  city: "Pune",
  type: "Pharmacy",
  image: "/Dr D Y Patil Institute of Pharmaceutical Sciences Pune.jpg",
},

// === Delhi Pharmacy Colleges ===
{
  name: "Delhi Institute of Pharmaceutical Sciences and Research (DIPSAR)",
  state: "Delhi",
  city: "New Delhi",
  type: "Pharmacy",
  image: "/Delhi Institute of Pharmaceutical Sciences and Research DIPSAR.jpg",
},
{
  name: "Jamia Hamdard - School of Pharmaceutical Education and Research",
  state: "Delhi",
  city: "New Delhi",
  type: "Pharmacy",
  image: "/Jamia Hamdard School of Pharmaceutical Education New Delhi.jpg",
},
{
  name: "Faculty of Pharmacy, University of Delhi",
  state: "Delhi",
  city: "New Delhi",
  type: "Pharmacy",
  image: "/Faculty of Pharmacy University of Delhi.jpg",
},
{
  name: "Amity Institute of Pharmacy",
  state: "Delhi",
  city: "Noida (NCR)",
  type: "Pharmacy",
  image: "/Amity Institute of Pharmacy Noida.jpg",
},
{
  name: "Maharaja Surajmal Institute of Pharmacy",
  state: "Delhi",
  city: "Janakpuri, New Delhi",
  type: "Pharmacy",
  image: "/Maharaja Surajmal Institute of Pharmacy Delhi.jpg",
},

// === Kerala Pharmacy Colleges ===
{
  name: "Government Medical College - School of Pharmacy",
  state: "Kerala",
  city: "Thiruvananthapuram",
  type: "Pharmacy",
  image: "/Government Medical College School of Pharmacy Thiruvananthapuram.jpg",
},
{
  name: "Al Shifa College of Pharmacy",
  state: "Kerala",
  city: "Perinthalmanna",
  type: "Pharmacy",
  image: "/Al Shifa College of Pharmacy Perinthalmanna.jpg",
},
{
  name: "Amrita School of Pharmacy",
  state: "Kerala",
  city: "Kochi",
  type: "Pharmacy",
  image: "/Amrita School of Pharmacy Kochi.jpg",
},
{
  name: "Nirmala College of Pharmacy",
  state: "Kerala",
  city: "Muvattupuzha",
  type: "Pharmacy",
  image: "/Nirmala College of Pharmacy Muvattupuzha.jpg",
},
{
  name: "KMCT College of Pharmaceutical Sciences",
  state: "Kerala",
  city: "Kozhikode",
  type: "Pharmacy",
  image: "/KMCT College of Pharmaceutical Sciences Kozhikode.jpg",
},

// === Andhra Pradesh Pharmacy Colleges ===
{
  name: "A.U. College of Pharmaceutical Sciences",
  state: "Andhra Pradesh",
  city: "Visakhapatnam",
  type: "Pharmacy",
  image: "/AU College of Pharmaceutical Sciences Visakhapatnam.jpg",
},
{
  name: "Sri Padmavathi School of Pharmacy",
  state: "Andhra Pradesh",
  city: "Tirupati",
  type: "Pharmacy",
  image: "/Sri Padmavathi School of Pharmacy Tirupati.jpg",
},
{
  name: "Chalapathi Institute of Pharmaceutical Sciences",
  state: "Andhra Pradesh",
  city: "Guntur",
  type: "Pharmacy",
  image: "/Chalapathi Institute of Pharmaceutical Sciences Guntur.jpg",
},
{
  name: "KVSR Siddhartha College of Pharmaceutical Sciences",
  state: "Andhra Pradesh",
  city: "Vijayawada",
  type: "Pharmacy",
  image: "/KVSR Siddhartha College of Pharmaceutical Sciences Vijayawada.jpg",
},
{
  name: "Vignan Pharmacy College",
  state: "Andhra Pradesh",
  city: "Guntur",
  type: "Pharmacy",
  image: "/Vignan Pharmacy College Guntur.jpg",
},

// === Gujarat Pharmacy Colleges ===
{
  name: "L.M. College of Pharmacy",
  state: "Gujarat",
  city: "Ahmedabad",
  type: "Pharmacy",
  image: "/LM College of Pharmacy Ahmedabad.jpg",
},
{
  name: "Institute of Pharmacy, Nirma University",
  state: "Gujarat",
  city: "Ahmedabad",
  type: "Pharmacy",
  image: "/Institute of Pharmacy Nirma University Ahmedabad.jpg",
},
{
  name: "B.K. Mody Government Pharmacy College",
  state: "Gujarat",
  city: "Rajkot",
  type: "Pharmacy",
  image: "/BK Mody Government Pharmacy College Rajkot.jpg",
},
{
  name: "A.R. College of Pharmacy and G.H. Patel Institute",
  state: "Gujarat",
  city: "Vallabh Vidyanagar",
  type: "Pharmacy",
  image: "/AR College of Pharmacy Vallabh Vidyanagar.jpg",
},
{
  name: "Shree Dhanvantary Pharmacy College",
  state: "Gujarat",
  city: "Surat",
  type: "Pharmacy",
  image: "/Shree Dhanvantary Pharmacy College Surat.jpg",
},

// === Telangana Pharmacy Colleges ===
{
  name: "University College of Pharmaceutical Sciences, Kakatiya University",
  state: "Telangana",
  city: "Warangal",
  type: "Pharmacy",
  image: "/University College of Pharmaceutical Sciences Warangal.jpg",
},
{
  name: "Anurag Group of Institutions - School of Pharmacy",
  state: "Telangana",
  city: "Hyderabad",
  type: "Pharmacy",
  image: "/Anurag Group of Institutions School of Pharmacy Hyderabad.jpg",
},
{
  name: "G. Pulla Reddy College of Pharmacy",
  state: "Telangana",
  city: "Hyderabad",
  type: "Pharmacy",
  image: "/G Pulla Reddy College of Pharmacy Hyderabad.jpg",
},
{
  name: "St. Peter’s Institute of Pharmaceutical Sciences",
  state: "Telangana",
  city: "Warangal",
  type: "Pharmacy",
  image: "/St Peters Institute of Pharmaceutical Sciences Warangal.jpg",
},
{
  name: "Malla Reddy Pharmacy College",
  state: "Telangana",
  city: "Hyderabad",
  type: "Pharmacy",
  image: "/Malla Reddy Pharmacy College Hyderabad.jpg",
},

// === Madhya Pradesh Pharmacy Colleges ===
{
  name: "Institute of Pharmaceutical Sciences, DAVV",
  state: "Madhya Pradesh",
  city: "Indore",
  type: "Pharmacy",
  image: "/Institute of Pharmaceutical Sciences DAVV Indore.jpg",
},
{
  name: "Bhabha Pharmacy Research Institute",
  state: "Madhya Pradesh",
  city: "Bhopal",
  type: "Pharmacy",
  image: "/Bhabha Pharmacy Research Institute Bhopal.jpg",
},
{
  name: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) - School of Pharmacy",
  state: "Madhya Pradesh",
  city: "Bhopal",
  type: "Pharmacy",
  image: "/RGPV School of Pharmacy Bhopal.jpg",
},
{
  name: "Smriti College of Pharmaceutical Education",
  state: "Madhya Pradesh",
  city: "Indore",
  type: "Pharmacy",
  image: "/Smriti College of Pharmaceutical Education Indore.jpg",
},
{
  name: "Guru Ramdas Khalsa Institute of Science and Technology (Pharmacy)",
  state: "Madhya Pradesh",
  city: "Jabalpur",
  type: "Pharmacy",
  image: "/Guru Ramdas Khalsa Institute Pharmacy Jabalpur.jpg",
},

// === Odisha Pharmacy Colleges ===
{
  name: "Dadhichi College of Pharmacy",
  state: "Odisha",
  city: "Cuttack",
  type: "Pharmacy",
  image: "/Dadhichi College of Pharmacy Cuttack.jpg",
},
{
  name: "College of Pharmaceutical Sciences, Mohuda",
  state: "Odisha",
  city: "Berhampur",
  type: "Pharmacy",
  image: "/College of Pharmaceutical Sciences Mohuda Berhampur.jpg",
},
{
  name: "Roland Institute of Pharmaceutical Sciences",
  state: "Odisha",
  city: "Berhampur",
  type: "Pharmacy",
  image: "/Roland Institute of Pharmaceutical Sciences Berhampur.jpg",
},
{
  name: "Indira Gandhi Institute of Pharmaceutical Sciences",
  state: "Odisha",
  city: "Bhubaneswar",
  type: "Pharmacy",
  image: "/Indira Gandhi Institute of Pharmaceutical Sciences Bhubaneswar.jpg",
},
{
  name: "Gayatri College of Pharmacy",
  state: "Odisha",
  city: "Sambalpur",
  type: "Pharmacy",
  image: "/Gayatri College of Pharmacy Sambalpur.jpg",
},

// === Uttar Pradesh Pharmacy Colleges ===
{
  name: "Birla Institute of Technology, Mesra - Noida Campus (Pharmacy)",
  state: "Uttar Pradesh",
  city: "Noida",
  type: "Pharmacy",
  image: "/BIT Mesra Noida Campus Pharmacy.jpg",
},
{
  name: "Amity Institute of Pharmacy",
  state: "Uttar Pradesh",
  city: "Noida",
  type: "Pharmacy",
  image: "/Amity Institute of Pharmacy Noida.jpg",
},
{
  name: "Pranveer Singh Institute of Technology (PSIT) - School of Pharmacy",
  state: "Uttar Pradesh",
  city: "Kanpur",
  type: "Pharmacy",
  image: "/PSIT School of Pharmacy Kanpur.jpg",
},
{
  name: "Babu Banarasi Das College of Pharmacy",
  state: "Uttar Pradesh",
  city: "Lucknow",
  type: "Pharmacy",
  image: "/Babu Banarasi Das College of Pharmacy Lucknow.jpg",
},
{
  name: "I.T.S College of Pharmacy",
  state: "Uttar Pradesh",
  city: "Ghaziabad",
  type: "Pharmacy",
  image: "/ITS College of Pharmacy Ghaziabad.jpg",
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
      <OurOffices/>
      <NewsletterSection />
    </>
  );
}
