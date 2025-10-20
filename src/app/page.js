import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingButtons from "@/components/FloatingButtons";
import SidebarTag from "@/components/SidebarTag";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <FloatingButtons />
      <SidebarTag />
    </main>
  );
}
