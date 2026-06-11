import { useReveal } from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
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
    <div className="min-h-screen bg-[#120d0a] text-[#e8d3b6] selection:bg-[#c78f45] selection:text-[#120d0a]">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Categories />
        <FeaturedProducts />
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
