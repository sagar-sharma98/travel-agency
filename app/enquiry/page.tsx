"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import EnquiryForm from "@/components/forms/EnquiryForm";

function EnquiryFormWrapper() {
  const searchParams = useSearchParams();
  const preselectedDestination = searchParams.get("destination") || undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-orange-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <EnquiryForm preselectedDestination={preselectedDestination} />
        </div>
      </div>
    </div>
  );
}

export default function EnquiryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-orange-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-8"></div>
              <div className="space-y-4">
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }>
      <EnquiryFormWrapper />
    </Suspense>
  );
}
