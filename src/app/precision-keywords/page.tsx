import Header from '@/components/precision-keywords/Header';
import Hero from '@/components/precision-keywords/Hero';
import About from '@/components/precision-keywords/About';
import WhyChooseUs from '@/components/precision-keywords/WhyChooseUs';
import Services from '@/components/precision-keywords/Services';
import Testimonials from '@/components/precision-keywords/Testimonials';
import Pricing from '@/components/precision-keywords/Pricing';
import FAQ from '@/components/precision-keywords/FAQ';
import Footer from '@/components/precision-keywords/Footer';
import BackToTop from '@/components/precision-keywords/BackToTop';
import AnimatedSection from '@/components/precision-keywords/AnimatedSection';

export default function PrecisionKeywords() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <WhyChooseUs />
        </AnimatedSection>
        <AnimatedSection>
          <Services />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <Pricing />
        </AnimatedSection>
        <AnimatedSection>
          <FAQ />
        </AnimatedSection>
        <Footer />
      </main>
      <BackToTop />
    </>
  );
} 