import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTASection from "../components/sections/CTASection";
import CollectionSection from "../components/sections/CollectionSection";
import NewArrivals from "../components/sections/NewArrivals";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <CollectionSection />
      <NewArrivals />
      <Stats />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
