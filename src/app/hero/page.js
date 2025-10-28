"use client";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FloatingButtons from "../../components/FloatingButtons";
import SidebarTag from "../../components/SidebarTag";
import RegisterPopup from "../../components/RegisterPopup";


export default function HeroPage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
        <FloatingButtons />
            <SidebarTag/>
              <RegisterPopup />
    </main>
  );
}
