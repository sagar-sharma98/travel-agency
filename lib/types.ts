export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  highlights: string[];
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
}

