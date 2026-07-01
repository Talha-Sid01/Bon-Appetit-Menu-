import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bon Appétit — Artisan Café, Gourmet Kitchen & Desserts | Malad West, Mumbai",
  description: "Browse the digital menu of Bon Appétit, an artisan café in Malad West, Mumbai. Offering fresh sandwiches, salads, pasta, waffles, and premium high-protein gym-nutrition foods. Fatto con Amore.",
  metadataBase: new URL("https://bon-appetit-menu.vercel.app"),
  openGraph: {
    title: "Bon Appétit — Artisan Café, Gourmet Kitchen & Desserts",
    description: "Browse the digital menu of Bon Appétit, Malad West, Mumbai. Fatto con Amore.",
    url: "/",
    siteName: "Bon Appétit",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Bon Appétit Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo.png", type: "image/png" }
    ],
    apple: [
      { url: "/images/logo.png" }
    ],
  },
  manifest: "/manifest.json"
};

export const viewport: Viewport = {
  themeColor: "#FAF6EE",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Bon Appétit",
    "image": "https://bon-appetit-menu.vercel.app/images/logo.png",
    "@id": "https://bon-appetit-menu.vercel.app/#food-establishment",
    "url": "https://bon-appetit-menu.vercel.app",
    "telephone": "+919892350065",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 12, Vasant Nagar, Opp Evershine Mall, Chincholi Bunder, Malad (W)",
      "addressLocality": "Mumbai",
      "postalCode": "400064",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.182479,
      "longitude": 72.831782
    },
    "sameAs": [
      "https://wa.me/919892350065"
    ],
    "servesCuisine": "Artisan Café, Gourmet Kitchen, Desserts, High Protein Diet",
    "priceRange": "$$"
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-ink bg-cream-bg">
        {children}
      </body>
    </html>
  );
}
