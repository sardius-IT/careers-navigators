"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const studyGoals = [
  {
    icon: "📘",
    title: "Engineering",
    colleges: "6233 Colleges",
    courses: ["BE/B.Tech", "Diploma in Engineering", "ME/M.Tech"],
  },
  {
    icon: "🧑‍💼",
    title: "Management",
    colleges: "7677 Colleges",
    courses: ["MBA/PGDM", "BBA/BMS", "Executive MBA"],
  },
  {
    icon: "💼",
    title: "Commerce",
    colleges: "4934 Colleges",
    courses: ["B.Com", "M.Com"],
  },
  {
    icon: "🎨",
    title: "Arts",
    colleges: "5554 Colleges",
    courses: ["BA", "MA", "BFA", "BSW"],
  },
  {
    icon: "🔬",
    title: "Science",
    colleges: "3829 Colleges",
    courses: ["B.Sc", "M.Sc", "Ph.D"],
    hasArrow: true,
  },
];

export default function StudyGoals() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
        >
          Select Your Study Goal
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {studyGoals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white rounded-2xl shadow-md border-t-4 border-green-400 p-6 text-left 
                         hover:shadow-xl hover:border-green-500 transition-all duration-300 group"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  whileHover={{ y: -4, rotate: 5 }}
                  className="text-4xl group-hover:scale-110 transition-transform"
                >
                  {goal.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-gray-500">{goal.colleges}</p>
                </div>
              </div>

              {/* Courses */}
              <ul className="space-y-1">
                {goal.courses.map((course, i) => (
                  <li
                    key={i}
                    className="text-gray-700 text-sm border-l-2 border-yellow-400 pl-2 hover:text-blue-600 transition"
                  >
                    {course}
                  </li>
                ))}
              </ul>

              {/* Arrow Button (Optional) */}
              {goal.hasArrow && (
                <motion.button
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 
                             hover:bg-blue-100 transition"
                >
                  <ArrowRight size={18} className="text-gray-700" />
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

