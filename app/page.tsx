import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import CollectionsShowcase from "@/components/CollectionsShowcase";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <CollectionsShowcase />
      <Stats />
      <About />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
      <Contact />
    </main>
  );
}
