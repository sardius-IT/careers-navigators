"use client";

import { motion } from "framer-motion";
import Navbar from "../../app/navbar/page ";
import Image from "next/image";
import Contact from "../../app/contact/page";
import {
  Smile,
  ListChecks,
  Clock,
  Award,
  BookOpenText,
  BarChart3,
  Building2,
  School,
} from "lucide-react";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

export default function RankingPage() {
  const cards = [
    {
      title: "World Universities Ranking",
      icon: <BookOpenText className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "World Research Rankings",
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Top Universities in India",
      icon: <School className="w-8 h-8 text-sky-500" />,
    },
    {
      title: "All Colleges / Universities in India",
      icon: <Building2 className="w-8 h-8 text-orange-400" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 overflow-hidden">
      {/* ===== Navbar ===== */}
      <Navbar />
   

      {/* ===== HERO SECTION ===== */}
      <section className="bg-green-800 text-white flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16">
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            EDUCATIONAL <br />
            INSTITUTION <br />
            RANKINGS <br />
            ADVISORY
          </h1>
          <p className="text-xl font-medium leading-relaxed">
            (Assistance for UNIVERSITIES / COLLEGES / SCHOOLS to achieve excellence)
          </p>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/imgi_4_hero-img.png"
            alt="Institution Ranking Illustration"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
      </section>

      {/* ===== WHY AM I SECTION ===== */}
      <section className="py-16 bg-white">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 relative inline-block">
            WHY AM I
            <span className="absolute left-0 right-0 bottom-[-8px] mx-auto w-16 h-1 bg-blue-500 rounded-full"></span>
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 md:px-0">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              IRST INSTITUTIONAL RANKINGS – Methodology
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              To evaluate performance of 2000 leading world universities across 120
              countries & 900 universities in INDIA. Ranking systems use a unique
              comprehensive methodology and assess higher education institutions’
              performance by 20 separate indicators.
            </p>
            <p className="text-gray-700">
              For more details please see our{" "}
              <a href="#" className="text-blue-500 hover:underline font-medium">
                methodology page
              </a>
              .
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              IRST-INSTITUTIONS RANKING Agency
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Founded in 2009 and based in INDIA and the USA, IRST publishes world
              university rankings — focused on rating University/Colleges & Schools in
              Engineering, Medical, Management, Arts, Science & Commerce categories.
              IRST RANKINGS helps universities strengthen competitiveness in the
              higher education sector.
            </p>

            <button className="border border-blue-500 text-blue-500 font-semibold px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ===== IRIST INTERNATIONAL SECTION ===== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="bg-gray-50 py-16 px-6 md:px-20"
      >
        <motion.div variants={fadeUp} className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <span className="w-10 h-[2px] bg-blue-500 inline-block"></span>
            IRST INTERNATIONAL
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            (Assistance for UNIVERSITIES, Colleges & Rankings)
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition"
            >
              <div>{card.icon}</div>
              <h3 className="text-gray-800 font-semibold">{card.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ===== ACHIEVEMENTS SECTION ===== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="bg-yellow-700 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Trophy Illustration */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <Image
              src="/imgi_5_counts-img (1).svg"
              alt="Achievements Illustration"
              width={500}
              height={400}
              className="object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Right: Stats */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-10 text-white">
            {/* Item 1 */}
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }} className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-cyan-400">
                <Smile className="w-6 h-6" />
                <h2 className="text-3xl font-bold">2196</h2>
              </div>
              <p>
                <span className="font-semibold">World Universities</span> across 126
                countries and regions, making them the largest and most diverse
                university rankings to date.
              </p>
            </motion.div>

            {/* Item 2 */}
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }} className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-cyan-400">
                <ListChecks className="w-6 h-6" />
                <h2 className="text-3xl font-bold">819</h2>
              </div>
              <p>
                <span className="font-semibold">Indian Institutions</span> across 29
                states—developing the performance of 63 core student groups.
              </p>
            </motion.div>

            {/* Item 3 */}
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }} className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-cyan-400">
                <Clock className="w-6 h-6" />
                <h2 className="text-3xl font-bold">4</h2>
              </div>
              <p>
                <span className="font-semibold">Projects – key missions</span> include
                teaching, research, diversity, and sustainability.
              </p>
            </motion.div>

            {/* Item 4 */}
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }} className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-cyan-400">
                <Award className="w-6 h-6" />
                <h2 className="text-3xl font-bold">27</h2>
              </div>
              <p>
                <span className="font-semibold">Awards</span> — World Entrepreneurs
                awards and recognition under Startup India Program.
              </p>
            </motion.div>
          </motion.div>
        </div>
           
      </motion.section>
      <section>
      <h1 className="flex justify-center items-center text-5xl gap-5">contact us</h1>
      </section>
      <Contact/>
    </main>
  );
}
