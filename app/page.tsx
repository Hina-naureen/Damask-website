import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import CollectionsShowcase from "@/components/CollectionsShowcase";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Services />
      <CollectionsShowcase />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
      <Contact />
    </main>
  );
}
