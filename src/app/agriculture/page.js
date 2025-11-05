"use client";
import Navbar from "./../../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NewsletterSection from "../../app/NewsletterSection/page";
import OurOffices from "../../components/OurOffices";
const colleges = [
  // === Tamil Nadu Agriculture Colleges ===
  {
    name: "Tamil Nadu Agricultural University (TNAU)",
    state: "Tamil Nadu",
    city: "Coimbatore",
    type: "Agriculture",
    image: "/Tamil Nadu Agricultural University.jpg",
  },
  {
    name: "Annamalai University - Faculty of Agriculture",
    state: "Tamil Nadu",
    city: "Chidambaram",
    type: "Agriculture",
    image: "/Annamalai University.jpeg",
  },
  {
    name: "Agricultural College and Research Institute, Madurai",
    state: "Tamil Nadu",
    city: "Madurai",
    type: "Agriculture",
    image: "/Agricultural College and Research Institute, Madurai.webp",
  },

  // === Bangalore Agriculture Colleges ===
  {
    name: "University of Agricultural Sciences (UAS)",
    state: "Bangalore",
    city: "Bangalore",
    type: "Agriculture",
    image: "/University of Agricultural Sciences, Bengaluru,img.jpg",
  },
  {
    name: "College of Agriculture, Hassan",
    state: "Bangalore",
    city: "Hassan",
    type: "Agriculture",
    image: "/College of Agriculture, Hassan.jpg",
  },
  {
    name: "R V College of Agriculture and Research",
    state: "Bangalore",
    city: "Bangalore",
    type: "Agriculture",
    image: "/R V College of Agriculture and Research.jpg",
  },

  // === Maharashtra Agriculture Colleges ===
  {
    name: "Mahatma Phule Krishi Vidyapeeth (MPKV)",
    state: "Maharashtra",
    city: "Rahuri",
    type: "Agriculture",
    image: "/Mahatma Phule Krishi Vidyapeeth.jpeg",
  },
  {
    name: "Dr. Panjabrao Deshmukh Krishi Vidyapeeth (PDKV)",
    state: "Maharashtra",
    city: "Akola",
    type: "Agriculture",
    image: "/(PDKV).webp",
  },
  
  // === Kerala Agriculture Colleges ===
{
  name: "Kerala Agricultural University (KAU)",
  state: "Kerala",
  city: "Thrissur",
  type: "Agriculture",
  image: "/Kerala Agricultural University Thrissur.jpg",
},
{
  name: "College of Horticulture, Vellanikkara",
  state: "Kerala",
  city: "Thrissur",
  type: "Agriculture",
  image: "/College of Horticulture Vellanikkara Thrissur.jpg",
},
{
  name: "College of Agriculture, Vellayani",
  state: "Kerala",
  city: "Thiruvananthapuram",
  type: "Agriculture",
  image: "/College of Agriculture Vellayani Thiruvananthapuram.jpg",
},
{
  name: "College of Forestry, Thrissur",
  state: "Kerala",
  city: "Thrissur",
  type: "Agriculture",
  image: "/College of Forestry Thrissur.jpg",
},
{
  name: "Regional Agricultural Research Station, Pattambi",
  state: "Kerala",
  city: "Palakkad",
  type: "Agriculture",
  image: "/Regional Agricultural Research Station Pattambi Palakkad.jpg",
},

// === Andhra Pradesh Agriculture Colleges ===
{
  name: "Acharya N.G. Ranga Agricultural University (ANGRAU)",
  state: "Andhra Pradesh",
  city: "Guntur",
  type: "Agriculture",
  image: "/Acharya N.G. Ranga Agricultural University Guntur.jpg",
},
{
  name: "Agricultural College, Bapatla",
  state: "Andhra Pradesh",
  city: "Bapatla",
  type: "Agriculture",
  image: "/Agricultural College Bapatla.jpg",
},
{
  name: "Agricultural College, Naira",
  state: "Andhra Pradesh",
  city: "Srikakulam",
  type: "Agriculture",
  image: "/Agricultural College Naira Srikakulam.jpg",
},
{
  name: "Dr. N.T.R. College of Agricultural Engineering",
  state: "Andhra Pradesh",
  city: "Pulivendula",
  type: "Agriculture",
  image: "/Dr NTR College of Agricultural Engineering Pulivendula.jpg",
},
{
  name: "Agricultural College, Tirupati",
  state: "Andhra Pradesh",
  city: "Tirupati",
  type: "Agriculture",
  image: "/Agricultural College Tirupati.jpg",
},

// === Gujarat Agriculture Colleges ===
{
  name: "Anand Agricultural University (AAU)",
  state: "Gujarat",
  city: "Anand",
  type: "Agriculture",
  image: "/Anand Agricultural University Anand.jpg",
},
{
  name: "Navsari Agricultural University (NAU)",
  state: "Gujarat",
  city: "Navsari",
  type: "Agriculture",
  image: "/Navsari Agricultural University Navsari.jpg",
},
{
  name: "Junagadh Agricultural University (JAU)",
  state: "Gujarat",
  city: "Junagadh",
  type: "Agriculture",
  image: "/Junagadh Agricultural University Junagadh.jpg",
},
{
  name: "Sardarkrushinagar Dantiwada Agricultural University (SDAU)",
  state: "Gujarat",
  city: "Palanpur",
  type: "Agriculture",
  image: "/Sardarkrushinagar Dantiwada Agricultural University Palanpur.jpg",
},
{
  name: "College of Agricultural Engineering and Technology, Godhra",
  state: "Gujarat",
  city: "Godhra",
  type: "Agriculture",
  image: "/College of Agricultural Engineering and Technology Godhra.jpg",
},

// === Telangana Agriculture Colleges ===
{
  name: "Professor Jayashankar Telangana State Agricultural University (PJTSAU)",
  state: "Telangana",
  city: "Hyderabad",
  type: "Agriculture",
  image: "/Professor Jayashankar Telangana State Agricultural University Hyderabad.jpg",
},
{
  name: "College of Agriculture, Rajendranagar",
  state: "Telangana",
  city: "Hyderabad",
  type: "Agriculture",
  image: "/College of Agriculture Rajendranagar Hyderabad.jpg",
},
{
  name: "Agricultural College, Palem",
  state: "Telangana",
  city: "Mahabubnagar",
  type: "Agriculture",
  image: "/Agricultural College Palem Mahabubnagar.jpg",
},
{
  name: "Agricultural College, Jagtial",
  state: "Telangana",
  city: "Jagtial",
  type: "Agriculture",
  image: "/Agricultural College Jagtial.jpg",
},
{
  name: "College of Agricultural Engineering, Sangareddy",
  state: "Telangana",
  city: "Sangareddy",
  type: "Agriculture",
  image: "/College of Agricultural Engineering Sangareddy.jpg",
},

// === Madhya Pradesh Agriculture Colleges ===
{
  name: "Rajmata Vijayaraje Scindia Krishi Vishwa Vidyalaya (RVSKVV)",
  state: "Madhya Pradesh",
  city: "Gwalior",
  type: "Agriculture",
  image: "/Rajmata Vijayaraje Scindia Krishi Vishwa Vidyalaya Gwalior.jpg",
},
{
  name: "Jawaharlal Nehru Krishi Vishwa Vidyalaya (JNKVV)",
  state: "Madhya Pradesh",
  city: "Jabalpur",
  type: "Agriculture",
  image: "/Jawaharlal Nehru Krishi Vishwa Vidyalaya Jabalpur.jpg",
},
{
  name: "College of Agriculture, Tikamgarh",
  state: "Madhya Pradesh",
  city: "Tikamgarh",
  type: "Agriculture",
  image: "/College of Agriculture Tikamgarh.jpg",
},
{
  name: "College of Agriculture, Indore",
  state: "Madhya Pradesh",
  city: "Indore",
  type: "Agriculture",
  image: "/College of Agriculture Indore.jpg",
},
{
  name: "College of Agriculture, Rewa",
  state: "Madhya Pradesh",
  city: "Rewa",
  type: "Agriculture",
  image: "/College of Agriculture Rewa.jpg",
},

// === Odisha Agriculture Colleges ===
{
  name: "Orissa University of Agriculture and Technology (OUAT)",
  state: "Odisha",
  city: "Bhubaneswar",
  type: "Agriculture",
  image: "/Orissa University of Agriculture and Technology Bhubaneswar.jpg",
},
{
  name: "College of Agriculture, Bhubaneswar",
  state: "Odisha",
  city: "Bhubaneswar",
  type: "Agriculture",
  image: "/College of Agriculture Bhubaneswar.jpg",
},
{
  name: "College of Horticulture, Chiplima",
  state: "Odisha",
  city: "Sambalpur",
  type: "Agriculture",
  image: "/College of Horticulture Chiplima Sambalpur.jpg",
},
{
  name: "College of Agricultural Engineering and Technology (CAET)",
  state: "Odisha",
  city: "Bhubaneswar",
  type: "Agriculture",
  image: "/College of Agricultural Engineering and Technology Bhubaneswar.jpg",
},
{
  name: "Regional Research and Technology Transfer Station, Keonjhar",
  state: "Odisha",
  city: "Keonjhar",
  type: "Agriculture",
  image: "/Regional Research and Technology Transfer Station Keonjhar.jpg",
},

// === West Bengal Agriculture Colleges ===
{
  name: "Bidhan Chandra Krishi Viswavidyalaya (BCKV)",
  state: "West Bengal",
  city: "Nadia",
  type: "Agriculture",
  image: "/Bidhan Chandra Krishi Viswavidyalaya Nadia.jpg",
},
{
  name: "Uttar Banga Krishi Viswavidyalaya (UBKV)",
  state: "West Bengal",
  city: "Cooch Behar",
  type: "Agriculture",
  image: "/Uttar Banga Krishi Viswavidyalaya Cooch Behar.jpg",
},
{
  name: "Visva-Bharati University - Palli Siksha Bhavana",
  state: "West Bengal",
  city: "Santiniketan",
  type: "Agriculture",
  image: "/Visva Bharati University Palli Siksha Bhavana Santiniketan.jpg",
},
{
  name: "College of Agriculture, Burdwan University",
  state: "West Bengal",
  city: "Burdwan",
  type: "Agriculture",
  image: "/College of Agriculture Burdwan University Burdwan.jpg",
},
{
  name: "Institute of Agriculture, Visva-Bharati",
  state: "West Bengal",
  city: "Santiniketan",
  type: "Agriculture",
  image: "/Institute of Agriculture Visva Bharati Santiniketan.jpg",
},

// === Uttar Pradesh Agriculture Colleges ===
{
  name: "Chandra Shekhar Azad University of Agriculture and Technology (CSAUAT)",
  state: "Uttar Pradesh",
  city: "Kanpur",
  type: "Agriculture",
  image: "/Chandra Shekhar Azad University of Agriculture and Technology Kanpur.jpg",
},
{
  name: "Sardar Vallabhbhai Patel University of Agriculture and Technology (SVPUAT)",
  state: "Uttar Pradesh",
  city: "Meerut",
  type: "Agriculture",
  image: "/Sardar Vallabhbhai Patel University of Agriculture and Technology Meerut.jpg",
},
{
  name: "Narendra Deva University of Agriculture and Technology (NDUAT)",
  state: "Uttar Pradesh",
  city: "Faizabad",
  type: "Agriculture",
  image: "/Narendra Deva University of Agriculture and Technology Faizabad.jpg",
},
{
  name: "Banda University of Agriculture and Technology (BUAT)",
  state: "Uttar Pradesh",
  city: "Banda",
  type: "Agriculture",
  image: "/Banda University of Agriculture and Technology Banda.jpg",
},
{
  name: "Sam Higginbottom University of Agriculture, Technology and Sciences (SHUATS)",
  state: "Uttar Pradesh",
  city: "Prayagraj",
  type: "Agriculture",
  image: "/Sam Higginbottom University of Agriculture Technology and Sciences Prayagraj.jpg",
},

// === Arunachal Pradesh Agriculture Colleges ===
{
  name: "College of Horticulture and Forestry, Pasighat",
  state: "Arunachal Pradesh",
  city: "Pasighat",
  type: "Agriculture",
  image: "/College of Horticulture and Forestry Pasighat.jpg",
},
{
  name: "North Eastern Regional Institute of Science and Technology (NERIST)",
  state: "Arunachal Pradesh",
  city: "Itanagar",
  type: "Agriculture",
  image: "/North Eastern Regional Institute of Science and Technology Itanagar.jpg",
},
{
  name: "College of Agriculture, Pasighat",
  state: "Arunachal Pradesh",
  city: "Pasighat",
  type: "Agriculture",
  image: "/College of Agriculture Pasighat Arunachal.jpg",
},
{
  name: "Krishi Vigyan Kendra, Dirang",
  state: "Arunachal Pradesh",
  city: "Dirang",
  type: "Agriculture",
  image: "/Krishi Vigyan Kendra Dirang Arunachal Pradesh.jpg",
},
{
  name: "Krishi Vigyan Kendra, Papum Pare",
  state: "Arunachal Pradesh",
  city: "Papum Pare",
  type: "Agriculture",
  image: "/Krishi Vigyan Kendra Papum Pare Arunachal Pradesh.jpg",
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

export default function TopAgricultureColleges() {
  const [selectedState, setSelectedState] = useState("Tamil Nadu");

  // Filter by both state and Agriculture type
  const filteredColleges = colleges.filter(
    (college) =>
      college.state === selectedState && college.type === "Agriculture"
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-lime-100 py-10 px-4">
        {/* Page Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-center  mb-10"
        >
          Discover Top Agriculture Colleges in India
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
                  ? "bg-green-600 text-white shadow-md"
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
                  <span className="text-green-600 text-sm font-semibold">
                    ● Agriculture College
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
            No agriculture colleges found for this state.
          </motion.p>
        )}
      </div>
      <OurOffices/>
      <NewsletterSection />
    </>
  );
}

