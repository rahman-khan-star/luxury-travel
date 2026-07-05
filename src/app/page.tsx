import {
  HeroSection,
  SearchTrips,
  FeaturedDestinations,
  PopularPackages,
  VisaServices,
  WhyChooseUs,
  Testimonials,
  Gallery,
  Statistics,
  LatestBlog,
  FAQ,
  ContactCTA,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SearchTrips />
      <FeaturedDestinations />
      <PopularPackages />
      <VisaServices />
      <WhyChooseUs />
      <Testimonials />
      <Statistics />
      <Gallery />
      <LatestBlog />
      <FAQ />
      <ContactCTA />
    </>
  );
}
