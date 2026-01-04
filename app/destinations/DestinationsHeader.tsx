"use client";

import { motion } from "framer-motion";

export default function DestinationsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
        Explore India
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Discover the diverse beauty of India through our carefully curated
        destinations. Each location offers unique experiences, rich culture,
        and unforgettable memories.
      </p>
    </motion.div>
  );
}

