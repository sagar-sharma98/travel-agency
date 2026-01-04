import { Metadata } from "next";
import DestinationCard from "@/components/sections/DestinationCard";
import destinationsData from "@/data/destinations.json";
import { Destination } from "@/lib/types";
import DestinationsHeader from "./DestinationsHeader";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore all our domestic travel destinations in India. From Goa to Ladakh, discover the perfect destination for your next adventure.",
};

export default function DestinationsPage() {
  const destinations = destinationsData as Destination[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <DestinationsHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

