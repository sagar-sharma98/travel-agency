"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Destination } from "@/lib/types";

interface DestinationCardProps {
  destination: Destination;
  index?: number;
}

export default function DestinationCard({
  destination,
  index = 0,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center text-white text-sm mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{destination.location}</span>
            </div>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {destination.title}
          </h3>
          <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
            {destination.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {destination.highlights.slice(0, 3).map((highlight) => (
              <span
                key={highlight}
                className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>
          <Link href={`/enquiry?destination=${destination.id}`}>
            <Button className="w-full group">
              Enquire Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}

