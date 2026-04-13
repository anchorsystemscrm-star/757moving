import type { Metadata } from "next";

export const siteConfig = {
  name: "757 Moving",
  domain: "757moving.com",
  url: "https://757moving.com",
  defaultTitle: "757 Moving | Fast, Reliable Movers in Hampton Roads",
  description:
    "Premium local movers for Virginia Beach, Norfolk, Chesapeake, Portsmouth, Suffolk, and the wider 757 area. Fast scheduling, professional crews, and quote requests built for speed.",
  phoneDisplay: "(757) 704-5118",
  phoneHref: "tel:+17577045118",
  email: "757moving@gmail.com",
  emailHref: "mailto:757moving@gmail.com",
  hours: [
    { day: "Monday", opens: "07:00", closes: "20:00" },
    { day: "Tuesday", opens: "07:00", closes: "20:00" },
    { day: "Wednesday", opens: "07:00", closes: "20:00" },
    { day: "Thursday", opens: "07:00", closes: "20:00" },
    { day: "Friday", opens: "07:00", closes: "20:00" },
    { day: "Saturday", opens: "08:00", closes: "18:00" },
    { day: "Sunday", opens: "09:00", closes: "17:00" }
  ],
  serviceAreas: [
    "Virginia Beach",
    "Norfolk",
    "Chesapeake",
    "Portsmouth",
    "Suffolk",
    "Hampton",
    "Newport News"
  ],
  keywords: [
    "movers near me",
    "moving company Virginia Beach",
    "movers Norfolk VA",
    "local movers 757",
    "same day movers Hampton Roads"
  ],
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/service-area", label: "Service Area" },
    { href: "/contact", label: "Contact" }
  ]
};

export const services = [
  {
    name: "Local Moving",
    blurb:
      "Quick, organized moves across the 757 with crews that show up prepared and keep the day moving.",
    details:
      "Ideal for neighborhood-to-neighborhood relocations, condo moves, and short-distance relocations that still deserve professional handling."
  },
  {
    name: "Apartment Moving",
    blurb:
      "Tight stairwells, elevators, loading zones, and apartment timelines handled without the chaos.",
    details:
      "We plan around access windows, parking constraints, and building rules so your move stays smooth from the first trip to the last."
  },
  {
    name: "Residential Moving",
    blurb:
      "Whole-home moves with clear communication, careful protection, and steady pacing from start to finish.",
    details:
      "From family homes to townhomes, we help you stay on schedule with a crew that treats your move like a professional project."
  },
  {
    name: "Same-Day Moving",
    blurb:
      "Need help fast? We keep room in the schedule for urgent local moves and short-notice changes.",
    details:
      "Perfect for lease deadlines, unexpected closings, or last-minute transitions when you need reliable movers without waiting a week."
  },
  {
    name: "Loading & Unloading",
    blurb:
      "Expert labor for rental trucks, storage units, pods, and DIY moves that still need skilled hands.",
    details:
      "We stack, secure, and unload strategically so you get the benefit of professional movers even when you handle the vehicle."
  },
  {
    name: "Packing Assistance",
    blurb:
      "Targeted help for kitchens, breakables, closets, and the details that usually take longer than expected.",
    details:
      "Add packing support where it matters most and speed up the rest of the move with less stress and fewer damaged items."
  }
] as const;

export const testimonials = [
  {
    name: "Jessica R.",
    location: "Virginia Beach",
    quote:
      "We needed apartment movers fast in Virginia Beach and they actually communicated the whole way through. The crew showed up ready, moved quickly, and kept it straightforward."
  },
  {
    name: "Marcus D.",
    location: "Norfolk",
    quote:
      "Booked on short notice in Norfolk and the experience felt organized from the first call. Clear communication, local crew, and no runaround."
  },
  {
    name: "Tanya P.",
    location: "Chesapeake",
    quote:
      "They handled our Chesapeake home move carefully and stayed flexible when timing shifted. It felt like working with professionals who know the 757."
  }
] as const;

export const faqItems = [
  {
    question: "How quickly can I book a move?",
    answer:
      "Many local moves can be scheduled within 24 to 48 hours, and same-day availability may open up depending on crew capacity and route timing."
  },
  {
    question: "Do you handle apartments and stairs?",
    answer:
      "Yes. Apartment moves are a core service, including stairs, elevators, loading zones, and buildings with move-in windows or special access rules."
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the Hampton Roads region, including Virginia Beach, Norfolk, Chesapeake, Portsmouth, Suffolk, and surrounding neighborhoods across the 757."
  },
  {
    question: "Can I get a quote without a home visit?",
    answer:
      "Yes. Most local jobs can be quoted from your details, and photos or short videos help us give a faster and more accurate estimate."
  },
  {
    question: "What should I have ready before moving day?",
    answer:
      "A basic inventory, access details, parking notes, and any large-item information help the crew arrive ready with the right plan."
  }
] as const;

export const citySections = [
  {
    city: "Virginia Beach",
    title: "Moving help that fits busy neighborhoods and tight move windows",
    copy:
      "From oceanfront condos to suburban family homes, Virginia Beach moves often come with HOA rules, elevator reservations, and narrow timing windows. 757 Moving brings local pacing, quick communication, and a clean process that keeps the day organized."
  },
  {
    city: "Norfolk",
    title: "Reliable local movers for apartments, military families, and city relocations",
    copy:
      "Norfolk moves can mean multi-story buildings, older homes, and fast turnarounds. We help renters, homeowners, and relocating families move without losing momentum to building logistics or poor planning."
  },
  {
    city: "Chesapeake",
    title: "Professional crews for residential moves across growing neighborhoods",
    copy:
      "Chesapeake homeowners and renters choose 757 Moving when they want clear arrival windows, careful furniture handling, and a move that feels managed instead of improvised. We stay communicative and efficient from the first call to the last unload."
  },
  {
    city: "Portsmouth",
    title: "Short-notice moving support with strong local coverage",
    copy:
      "For Portsmouth moves, speed matters. Whether you are switching apartments, moving out of storage, or juggling a closing timeline, our local crews stay flexible and keep the work moving with professional urgency."
  },
  {
    city: "Suffolk",
    title: "Local movers for larger homes, family moves, and extra logistics",
    copy:
      "Suffolk moves often involve more square footage, longer drive times, and heavier furniture. We handle the details with a deliberate plan so you get a smoother move without the typical all-day drag."
  }
] as const;

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = []
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;
  const canonicalUrl = new URL(path, siteConfig.url).toString();

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
          width: 1600,
          height: 900,
          alt: "Bright Hampton Roads home exterior"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description
    }
  };
}
