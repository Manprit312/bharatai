import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import Transform from "@/components/Home/Transform";
import Services from "@/components/Home/Services";
import Technology from "@/components/Home/Technology";
import Projects from "@/components/Home/Projects";
import Solutions from "@/components/Home/Solutions";
import Contact from "@/components/Home/Contact";
import Clients from "@/components/Home/Clients";
import FAQ from "@/components/Home/FAQ";
import Mvp from "@/components/Home/Mvp";
import Band from "@/components/Home/Band";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Technology />
      <Band />
      <Transform />
      <Services />
      <Projects />

      <Solutions />
      <Mvp />
      <Contact />
      <Clients />
      <FAQ />
    </div>
  );
}
