import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
// import TestimonialsSection from "../components/sections/TestimonialsSection";
import NewArrivals from "../components/sections/NewArrivals";
import CTASection from "../components/sections/CTASection";
import CollectionSection from "../components/sections/CollectionSection";
// import AuctionItem from "../components/AuctionItem";
import TopSellers from "../components/sections/TopSellers";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <CollectionSection />
      <TopSellers />
      <NewArrivals isHomePage={true} />
      <Stats />
      {/* <AuctionItem /> */}
      <CTASection />
    </div>
  );
}
