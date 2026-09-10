import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ADDRESS_LINE, CONTACT, SOLUTIONS } from "./site-data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kiaanrobotics.in";
const socialImage = `${siteUrl}${basePath}/og.jpg`;
const title = "Kiaan Robotics | Industrial Automation Solutions";
const description =
  "Turnkey robotic welding, machine tending, handling, painting and cutting solutions—from engineering to commissioning and support. Based in Ahmedabad, Gujarat.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Kiaan Robotics",
  keywords: [
    "robotic welding",
    "industrial automation",
    "machine tending",
    "special purpose machine",
    "robot integration Ahmedabad",
    "MIG TIG laser welding cell",
    "Gujarat automation company",
  ],
  alternates: { canonical: `${basePath}/` },
  icons: {
    icon: [{ url: `${basePath}/favicon.png`, type: "image/png", sizes: "512x512" }],
    shortcut: `${basePath}/favicon.png`,
    apple: `${basePath}/favicon.png`,
  },
  openGraph: {
    type: "website",
    siteName: "Kiaan Robotics",
    locale: "en_IN",
    url: `${siteUrl}${basePath}/`,
    title,
    description,
    images: [{ url: socialImage, width: 1200, height: 630, alt: "Kiaan Robotics robotic welding cell" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f0e9" },
    { media: "(prefers-color-scheme: dark)", color: "#161716" },
  ],
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: "Kiaan Robotics",
  alternateName: "Kiaan Robotics and Automation Solutions",
  description,
  url: `${siteUrl}${basePath}/`,
  logo: `${siteUrl}${basePath}/kiaan-robotics-logo.png`,
  image: socialImage,
  telephone: `+${CONTACT.whatsapp}`,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.street,
    addressLocality: CONTACT.locality,
    addressRegion: CONTACT.region,
    postalCode: CONTACT.postalCode,
    addressCountry: CONTACT.country,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`,
  areaServed: { "@type": "Country", name: "India" },
  employee: { "@type": "Person", name: "Jaydip Champaneri", jobTitle: "Managing Director" },
  knowsAbout: SOLUTIONS.map((solution) => solution.title),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Industrial automation solutions",
    itemListElement: SOLUTIONS.map((solution) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: solution.title, description: solution.text },
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        {children}
        <script
          type="application/ld+json"
          // Static, first-party data built at compile time.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
