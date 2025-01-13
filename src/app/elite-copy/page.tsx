import Header from '@/components/elite-copy/Header';
import Hero from '@/components/elite-copy/Hero';
import Benefits from '@/components/elite-copy/Benefits';
import UseCases from '@/components/elite-copy/UseCases';
import HowItWorks from '@/components/elite-copy/HowItWorks';
import Pricing from '@/components/elite-copy/Pricing';
import Testimonials from '@/components/elite-copy/Testimonials';
import Contact from '@/components/elite-copy/Contact';
import Footer from '@/components/elite-copy/Footer';


export default function EliteCopy() {
  return (
    <>
      <Header />
      <main className="elite-copy">
        <Hero />
        <Benefits />
        <UseCases />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
} 