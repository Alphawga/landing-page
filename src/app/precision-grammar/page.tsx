import Hero from '@/components/precision-grammar/Hero';
import WhyChooseUs from '@/components/precision-grammar/WhyChooseUs';
import HowItWorks from '@/components/precision-grammar/HowItWorks';
import Pricing from '@/components/precision-grammar/Pricing';
import Header from '@/components/precision-grammar/Header';
import Footer from '@/components/precision-grammar/Footer';

export const metadata = {
  title: 'PrecisionGrammar - Professional Document Review Services',
  description: 'Professional, accurate, and reliable document reviews tailored to your needs. Enhance your content quality with our expert review services.',
};

export default function PrecisionGrammar() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <WhyChooseUs />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </>
  );
} 