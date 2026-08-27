import {
  HeroSection,
  SearchTrips,
  UmrahPackages,
  FeaturedDestinations,
  VisaServices,
  PopularPackages,
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
      <UmrahPackages />
      <VisaServices />
      <FeaturedDestinations />
      <PopularPackages />
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
