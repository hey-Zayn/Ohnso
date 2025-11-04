import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import ValueProposition from '@/components/landing/ValueProposition';
import Testimonials from '@/components/landing/Testimonials';
import Faq from '@/components/landing/Faq';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';
import ProductSection from '@/components/landing/ProductSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueProposition />
        <ProductSection />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
