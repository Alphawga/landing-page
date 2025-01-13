import Header from '@/components/eat-clean/Header';
import Hero from '@/components/eat-clean/Hero';
import About from '@/components/eat-clean/About';
import Features from '@/components/eat-clean/Features';
import Services from '@/components/eat-clean/Services';
import WhyChoose from '@/components/eat-clean/WhyChoose';
import Pricing from '@/components/eat-clean/Pricing';
import Contact from '@/components/eat-clean/Contact';
import Footer from '@/components/eat-clean/Footer';

export default function EatClean() {
  return (
    <>
      <Header />
      <main className="eat-clean">
        <Hero />
        <About />
        <Features />
        <Services />
        <WhyChoose />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
} 