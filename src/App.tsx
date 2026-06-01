import { useReveal } from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Categories from "./components/Categories";
import Brands from "./components/Brands";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#f5efe4] selection:bg-[#c9a35a] selection:text-[#0a0a0b]">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Categories />
        <Brands />
        <About />
        <WhyUs />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
