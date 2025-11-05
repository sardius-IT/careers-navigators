"use client";
import Navbar from "./../../components/Navbar";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import NewsletterSection from "../../app/NewsletterSection/page";
import OurOffices from "../../components/OurOffices";

const colleges = [
  // === ENGINEERING ===
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

export default function AllCoursesPage() {
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
          className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10"
        >
          Explore Top Colleges in India
        </motion.h2>

        {/* All Colleges Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {colleges.map((college, index) => (
            <motion.div
              key={college.name}
              variants={fadeUp}
              initial="hidden"
              animate="show"
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
        </motion.div>
      </div>

      <OurOffices />
      <NewsletterSection />
    </>
  );
}
