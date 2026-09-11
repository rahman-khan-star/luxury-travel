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
  TeamSection,
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
      <TeamSection />
      <Testimonials />
      <Statistics />
      <Gallery />
      <LatestBlog />
      <FAQ />
      <ContactCTA />
    </>
  );
}
