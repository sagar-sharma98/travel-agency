"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { EnquiryFormData } from "@/lib/types";
import destinationsData from "@/data/destinations.json";

const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  destination: z.string().min(1, "Please select a destination"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function EnquiryForm({
  preselectedDestination,
}: {
  preselectedDestination?: string;
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
  });

  useEffect(() => {
    if (preselectedDestination) {
      setValue("destination", preselectedDestination);
    }
  }, [preselectedDestination, setValue]);

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
        >
          <CheckCircle className="h-12 w-12 text-green-600" />
        </motion.div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p className="text-lg text-gray-600 mb-6">
          Your enquiry has been submitted successfully. Our travel experts will
          get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          size="lg"
        >
          Submit Another Enquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
    >
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Plan Your Journey
        </h2>
        <p className="text-gray-600">
          Fill out the form below and our travel experts will help you plan the
          perfect trip to India.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your name"
            {...register("name")}
            error={errors.name?.message}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="youremail@domain.com"
            {...register("email")}
            error={errors.email?.message}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+91 123456890"
            {...register("phone")}
            error={errors.phone?.message}
            required
          />

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Destination
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              {...register("destination")}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                errors.destination
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-teal-500"
              }`}
            >
              <option value="">Select a destination</option>
              {destinationsData.map((dest) => (
                <option key={dest.id} value={dest.id}>
                  {dest.title}
                </option>
              ))}
            </select>
            {errors.destination && (
              <p className="mt-1 text-sm text-red-600 animate-in fade-in slide-in-from-top-1">
                {errors.destination.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
            <span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="Tell us about your travel plans, dates, number of travelers, and any special requirements..."
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none ${
              errors.message
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-teal-500"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 animate-in fade-in slide-in-from-top-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          isLoading={isSubmitting}
        >
          Submit Enquiry
        </Button>
      </form>
    </motion.div>
  );
}
