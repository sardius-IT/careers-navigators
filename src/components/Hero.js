"use client";
import Image from "next/image";
import { useMemo } from "react";

import { useState, useEffect } from "react";
import StudyGoals from "../app/StudyGoals/page";
import ExplorePrograms from "../app/ExplorePrograms/page";
import TopUniversities from "../app/TopUniversities/page";
import TopColleges from "../app/TopColleges/page";
import NewsletterSection from "../app/NewsletterSection/page";
import CollegeRank from "../app/CollegeRank/page";
import Coranking from "../app/college-ranking/page";
import AdmissionAndStudyAbroad from "../app/AdmissionAndStudyAbroad/page";
import OurOffices from "../components/OurOffices";
export default function Hero() {
  // 👇 Add multiple background images
  const images = [
    "/imgi_89_360_F_630761173_Hkeqf7J3DYfICjQQaMkTiSpCOK7XOq1q.jpg",
    "/imgi_81_university-6699377_1280.jpg",
    "/imgi_29_bannerimage_1557133424.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  // 👇 Text phrases to type
 const texts = useMemo(
  () => [
    "Find the Best Exams",
    "Explore Top-Ranked Colleges",
    "Shape Your Career Path",
  ],
  []
);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Typing effect logic
  useEffect(() => {
  let charIndex = 0;
  let forward = true;
  let textIndex = 0;

  const typingInterval = setInterval(() => {
    if (forward) {
      if (charIndex < texts[textIndex].length) {
        setDisplayText(texts[textIndex].substring(0, charIndex + 1));
        charIndex++;
      } else {
        forward = false;
        setTimeout(() => {}, 1500);
      }
    } else {
      if (charIndex > 0) {
        setDisplayText(texts[textIndex].substring(0, charIndex - 1));
        charIndex--;
      } else {
        forward = true;
        textIndex = (textIndex + 1) % texts.length;
      }
    }
  }, 120);

  return () => clearInterval(typingInterval);
}, [texts]);


const places = [
  { name: "Chennai", emoji: "🐚🌊" },
  { name: "Karnataka", emoji: "🏙" },
  { name: "Hyderabad", emoji: "🕌" },
  { name: "Delhi NCR", emoji: "🏛" },
  { name: "Pune", emoji: "🏞" },
  { name: "Mumbai", emoji: "🏢" },
  { name: "Kolkata", emoji: "📜" },
];

  return (
    <>
      <section
        className="relative h-[400px] md:h-[500px] flex flex-col justify-center items-start px-8 bg-cover bg-center rounded-2xl overflow-hidden transition-all duration-700"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 transition-opacity duration-700" />

        {/* Text Content */}
        <div className="relative z-10 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 whitespace-nowrap">
            {displayText}
            <span className="border-r-4 border-white animate-pulse ml-1" />
          </h1>
          <p className="text-white text-lg">
            Find the best colleges, exams, and courses to make informed
            decisions for your future.
          </p>
        </div>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentImage ? "bg-yellow-400" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>
      <section>
        <StudyGoals />
        <ExplorePrograms />
        <TopUniversities />
      
        <TopColleges />
        <CollegeRank/>
        <Coranking/>
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-800">
          Top Study Places
        </h2>

        {/* Grid of Places */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 justify-items-center">
          {places.map((place, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 shadow-sm hover:shadow-md rounded-xl p-5 w-32 h-32 transition-transform transform hover:-translate-y-1 cursor-pointer"
            >
              {/* Emoji Icon */}
              <div className="text-4xl mb-3">{place.emoji}</div>

              {/* City Name */}
              <p className="text-sm md:text-base font-medium text-gray-700 text-center">
                {place.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
<AdmissionAndStudyAbroad/>
<OurOffices/>
         
        <NewsletterSection />
      </section>
    </>
  );
}
