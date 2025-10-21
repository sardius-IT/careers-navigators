"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Filter buttons
const programFilters = [
  "All",
  "BE/B.Tech",
  "MBA/PGDM",
  "MBBS",
  "ME/M.Tech",
  "B.Sc",
  "BA",
  "B.Com",
  "BCA",
  "BBA/BMS",
  "B.Sc (Nursing)",
];

// Card data (each card belongs to one or more categories)
const cards = [
  {
    title: "Ranking",
    desc: "College ranked based on real data",
    tags: ["Indiatoday - 1747", "IIRF - 1455", "Outlook - 1286"],
    link: "Top Ranked Colleges in India >",
    icon: "🏅",
    categories: ["BE/B.Tech", "MBA/PGDM", "B.Com", "B.Sc"],
  },
  {
    title: "Find Colleges",
    desc: "Discover 19000+ colleges via preferences",
    tags: ["Best MBA colleges in India", "Best BTech colleges in India"],
    link: "Discover Top Colleges in India >",
    icon: "🔍",
    categories: ["BE/B.Tech", "MBA/PGDM", "B.Com", "BA"],
  },
  {
    title: "Compare Colleges",
    desc: "Compare on the basis of rank, fees, etc.",
    tags: ["Shri Ram College of Commerce", "Loyola College Chennai"],
    link: "Compare Colleges >",
    icon: "⚖️",
    categories: ["B.Com", "BA", "MBA/PGDM"],
  },
  {
    title: "Exams",
    desc: "Know more about your exams",
    tags: ["JEE Advanced", "NEET", "BITSAT", "COMEDK"],
    link: "Check All Entrance Exams in India >",
    icon: "📝",
    categories: ["BE/B.Tech", "MBBS", "B.Sc"],
  },
  {
    title: "College Predictor",
    desc: "Know your college admission chances",
    tags: ["NEET", "JEE Advanced", "CAT", "GATE", "MAT"],
    link: "Find Where You may get Admission >",
    icon: "🎓",
    categories: ["BE/B.Tech", "MBA/PGDM", "B.Sc"],
  },
  {
    title: "Course Finder",
    desc: "Discover top Indian Colleges 2025",
    tags: ["BE/B.Tech", "MBA/PGDM", "ME/M.Tech", "B.Sc", "BA"],
    link: "Get Top Courses in Indian Colleges >",
    icon: "📚",
    categories: ["BE/B.Tech", "MBA/PGDM", "ME/M.Tech", "B.Sc", "BA"],
  },
];


export default function ExplorePrograms() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Filtered cards
  const filteredCards =
    selectedFilter === "All"
      ? cards
      : cards.filter((card) => card.categories.includes(selectedFilter));

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
        >
          Explore Programs
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {programFilters.map((filter, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedFilter === filter
                  ? "bg-green-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-green-100"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          <AnimatePresence>
            {filteredCards.map((card, index) => (
              <motion.div
                key={card.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.03 }}
                className="relative bg-gradient-to-b from-green-50 to-yellow-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-green-400 group"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600">{card.desc}</p>
                  </div>
                  <div className="text-3xl">{card.icon}</div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-white border rounded-full shadow-sm text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#"
                  className="text-green-600 text-sm font-medium hover:underline"
                >
                  {card.link}
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
