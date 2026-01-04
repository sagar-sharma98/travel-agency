import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquiry",
  description:
    "Plan your journey to India. Fill out our enquiry form and our travel experts will help you plan the perfect trip.",
};

export default function EnquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

