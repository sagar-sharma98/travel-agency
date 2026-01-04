# Travel Agency Website - India Travel

A modern, fully-featured Travel Agency Website built with Next.js, focusing on domestic travel destinations within India.

## Features

- **Home Page**: Hero section with CTA, featured destinations grid, and "Why Choose Us" section
- **Destinations Page**: Complete listing of all domestic destinations with images, descriptions, and enquiry buttons
- **Enquiry Page**: Comprehensive form with validation for travel enquiries
- **Fully Responsive**: Mobile-first design that works on all devices
- **Modern UI/UX**: Beautiful gradients, animations, and smooth transitions
- **SEO Optimized**: Meta tags and Open Graph support
- **TypeScript**: Full type safety throughout the application
- **Static Generation**: All pages use SSG for optimal performance

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:

   ```bash
   cd travel-agency-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
travel-agency-website/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── destinations/
│   │   ├── page.tsx            # Destination listing page
│   │   └── DestinationsHeader.tsx
│   ├── enquiry/
│   │   ├── layout.tsx          # Metadata for enquiry page
│   │   └── page.tsx            # Enquiry form page
│   └── globals.css             # Global styles
├── components/
│   ├── ui/                     # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── layout/                 # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/               # Page sections
│   │   ├── Hero.tsx
│   │   ├── FeaturedDestinations.tsx
│   │   ├── WhyChooseUs.tsx
│   │   └── DestinationCard.tsx
│   └── forms/                  # Form components
│       └── EnquiryForm.tsx
├── data/
│   └── destinations.json       # Destination data
├── lib/
│   ├── utils.ts               # Utility functions
│   └── types.ts               # TypeScript types
└── public/                    # Static assets
```

## Approach & Design Decisions

### Architecture

1. **App Router**: Used Next.js App Router for modern routing and server components
2. **Server Components**: Home and Destinations pages are Server Components for optimal performance
3. **Client Components**: Interactive elements (forms, animations) are Client Components
4. **Component Reusability**: Created reusable UI components (Button, Card, Input) for consistency

### Styling

- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Color Scheme**: Travel-themed blues/teals with warm orange accents for CTAs
- **Animations**: Smooth transitions and hover effects using Framer Motion

### Data Management

- **JSON File**: Destination data stored in `data/destinations.json`
- **TypeScript Interfaces**: Type-safe data structures
- **Static Generation**: All pages pre-rendered at build time

### Form Validation

- **Zod Schema**: Type-safe validation schema
- **React Hook Form**: Efficient form state management
- **Real-time Feedback**: Instant validation messages
- **Success State**: Animated success confirmation

### SEO & Performance

- **Metadata API**: Dynamic metadata for each page
- **Open Graph Tags**: Social media sharing support
- **Image Optimization**: Next.js Image component with remote patterns
- **Static Generation**: All pages statically generated for fast loading

## Key Features Implementation

1. **SSG (Static Site Generation)**: All pages use static generation
2. **Server Components**: Home and Destinations pages are Server Components
3. **Client Components**: Forms and interactive elements use Client Components
4. **TypeScript**: Full type safety with interfaces and types
5. **Responsive**: Mobile-first design with Tailwind breakpoints
6. **Animations**: Smooth animations with Framer Motion
7. **SEO**: Comprehensive metadata on all pages

## Points

- Images are loaded from Unsplash (configured in `next.config.ts`)
- All form validation is client-side
- The project is ready for deployment to Vercel or any static hosting service
