import Hero from "@/components/sections/Hero";
import FeaturedDestinations from "@/components/sections/FeaturedDestinations";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import destinationsData from "@/data/destinations.json";
import { Destination } from "@/lib/types";

export const metadata = {
  title: "Home",
  description:
    "Discover the beautiful destinations of India with our curated travel experiences. From pristine beaches to majestic mountains, explore the diverse beauty and rich culture of India.",
};

export default function Home() {
  const destinations = destinationsData as Destination[];

  return (
    <>
      <Hero />
      <FeaturedDestinations destinations={destinations} />
      <WhyChooseUs />
    </>
  );
}
