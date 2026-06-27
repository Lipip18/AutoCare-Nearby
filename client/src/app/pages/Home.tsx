import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Membership } from '../components/Membership';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { ScrollToHash } from '../components/ScrollToHash';

export function Home() {
  return (
    <>
      <ScrollToTop />
      <ScrollToHash />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Services />
          <Membership />
          <Features />
          <HowItWorks />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}