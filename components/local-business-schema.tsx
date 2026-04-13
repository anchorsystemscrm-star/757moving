import { siteConfig } from "@/lib/site";

const openingDays = {
  Monday: "https://schema.org/Monday",
  Tuesday: "https://schema.org/Tuesday",
  Wednesday: "https://schema.org/Wednesday",
  Thursday: "https://schema.org/Thursday",
  Friday: "https://schema.org/Friday",
  Saturday: "https://schema.org/Saturday",
  Sunday: "https://schema.org/Sunday"
} as const;

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: "+1-757-704-5118",
    email: siteConfig.email,
    description: siteConfig.description,
    priceRange: "$$",
    serviceArea: siteConfig.serviceAreas.map((city) => ({
      "@type": "City",
      name: city
    })),
    areaServed: siteConfig.serviceAreas.map((city) => ({
      "@type": "City",
      name: city
    })),
    sameAs: [],
    openingHoursSpecification: siteConfig.hours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: openingDays[entry.day as keyof typeof openingDays],
      opens: entry.opens,
      closes: entry.closes
    })),
    makesOffer: [
      "Local Moving",
      "Apartment Moving",
      "Residential Moving",
      "Same-Day Moving",
      "Loading & Unloading",
      "Packing Assistance"
    ].map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service
      }
    }))
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      type="application/ld+json"
    />
  );
}
