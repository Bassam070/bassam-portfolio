import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
