import Header from '@/components/multilingo/Header';
import Hero from '@/components/multilingo/Hero';
import WhyChoose from '@/components/multilingo/WhyChoose';
import Features from '@/components/multilingo/Features';
import WriterBlock from '@/components/multilingo/WriterBlock';
import Pricing from '@/components/multilingo/Pricing';
import Testimonials from '@/components/multilingo/Testimonials';
import Contact from '@/components/multilingo/Contact';
import Footer from '@/components/multilingo/Footer';

export default function EasyMultiLingo() {
  return (
    <>
      <Header />
      <main className="multilingo">
        <Hero />
        <WhyChoose />
        <Features />
        <WriterBlock />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
} 