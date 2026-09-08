export type GhlAddonEntry = {
  handle: string;
  title: string;
  description: string;
  category: string;
  price: number | null;
  comparePrice?: number | null;
  billingType: "one_time" | "recurring";
  billingFrequency?: "monthly" | "yearly";
  image: string;
  tags: string[];
  quoteOnly?: boolean;
};

/**
 * Add-ons, notary, website features, and print options for HighLevel product import.
 * Prices aligned with MHM package tiers (~$285–$330 per web page) and Seattle notary market rates.
 */
export const GHL_ADDONS_CATALOG: GhlAddonEntry[] = [
  // Website — extra pages & features
  {
    handle: "addon-extra-website-page",
    title: "Extra Website Page",
    description:
      "Add one additional custom-designed page to your website project. Includes layout, mobile optimization, and basic on-page SEO.",
    category: "Website Add-ons",
    price: 295,
    billingType: "one_time",
    image: "/images/services/website-design-development.svg",
    tags: ["website", "add-on", "pages"],
  },
  {
    handle: "addon-extra-website-pages-5",
    title: "Extra Website Pages (5-pack)",
    description:
      "Bundle of five additional custom pages. Best value when expanding beyond your package page count.",
    category: "Website Add-ons",
    price: 1295,
    comparePrice: 1475,
    billingType: "one_time",
    image: "/images/services/website-design-development.svg",
    tags: ["website", "add-on", "pages", "bundle"],
  },
  {
    handle: "addon-ecommerce-setup",
    title: "E-commerce Setup",
    description:
      "Product catalog, secure checkout, payment gateway integration, and order notification setup for your website.",
    category: "Website Add-ons",
    price: 950,
    billingType: "one_time",
    image: "/images/services/ecommerce-development.svg",
    tags: ["website", "add-on", "ecommerce"],
  },
  {
    handle: "addon-blog-setup",
    title: "Blog Setup & Training",
    description:
      "Blog section configuration, categories, RSS feed, and a 30-minute training session on publishing posts.",
    category: "Website Add-ons",
    price: 225,
    billingType: "one_time",
    image: "/images/services/website-design-development.svg",
    tags: ["website", "add-on", "blog"],
  },
  {
    handle: "addon-custom-contact-form",
    title: "Custom Contact Form",
    description:
      "Multi-field contact or lead form with conditional logic, spam protection, and CRM/email integration.",
    category: "Website Add-ons",
    price: 125,
    billingType: "one_time",
    image: "/images/icon-2-contact-marketing-template.svg",
    tags: ["website", "add-on", "forms"],
  },
  {
    handle: "addon-leadconnector-chat-widget",
    title: "Live Chat Widget Integration",
    description:
      "LeadConnector chat widget installation, styling to match your brand, and basic routing setup.",
    category: "Website Add-ons",
    price: 85,
    billingType: "one_time",
    image: "/images/services/crm-saas-solutions.svg",
    tags: ["website", "add-on", "chat"],
  },
  {
    handle: "addon-booking-calendar",
    title: "Online Booking & Calendar",
    description:
      "Appointment booking page with calendar sync, confirmation emails, and embed on your website.",
    category: "Website Add-ons",
    price: 295,
    billingType: "one_time",
    image: "/images/services/business-automation.svg",
    tags: ["website", "add-on", "booking"],
  },
  {
    handle: "addon-advanced-seo-package",
    title: "Advanced SEO Package",
    description:
      "Keyword research, schema markup, sitemap optimization, and speed improvements for up to 10 pages.",
    category: "Website Add-ons",
    price: 495,
    billingType: "one_time",
    image: "/images/services/seo.svg",
    tags: ["website", "add-on", "seo"],
  },
  {
    handle: "addon-professional-email-5",
    title: "Professional Email (5 accounts)",
    description:
      "Setup of up to 5 branded email addresses (e.g. name@yourdomain.com) with DNS configuration.",
    category: "Website Add-ons",
    price: 95,
    billingType: "one_time",
    image: "/images/icon-1-contact-marketing-template.svg",
    tags: ["website", "add-on", "email"],
  },
  {
    handle: "addon-additional-revision-round",
    title: "Additional Revision Round",
    description: "One extra round of design or content revisions beyond your package allowance.",
    category: "Website Add-ons",
    price: 195,
    billingType: "one_time",
    image: "/images/icon-3-service-marketing-template.svg",
    tags: ["website", "add-on", "revisions"],
  },
  {
    handle: "addon-motion-animations",
    title: "Motion & Animation Effects",
    description:
      "Scroll animations, micro-interactions, and hero motion effects for a polished website experience.",
    category: "Website Add-ons",
    price: 395,
    billingType: "one_time",
    image: "/images/services/digital-marketing.svg",
    tags: ["website", "add-on", "animation"],
  },
  {
    handle: "addon-multilingual-support",
    title: "Multi-language Support",
    description:
      "Secondary language setup with language switcher and translated page structure (content translation not included).",
    category: "Website Add-ons",
    price: 795,
    billingType: "one_time",
    image: "/images/services/website-design-development.svg",
    tags: ["website", "add-on", "i18n"],
  },
  {
    handle: "addon-extended-hosting-1yr",
    title: "Extended Hosting (1 year)",
    description:
      "Additional year of managed hosting, SSL, and basic maintenance after your included hosting period.",
    category: "Website Add-ons",
    price: 149,
    billingType: "one_time",
    image: "/images/icon-4-service-marketing-template.svg",
    tags: ["website", "add-on", "hosting"],
  },

  // Notary & business support (matches Notary.mhmdigital.us services)
  {
    handle: "notary-in-office-signature",
    title: "Notary — In-Office Signature",
    description:
      "In-office notarization at MHM Digital (Share Space MADDA WALABU, Seattle). Per notarial act. Valid ID required.",
    category: "Notary & Business Support",
    price: 10,
    billingType: "one_time",
    image: "/images/portfolio/notary-public-1.svg",
    tags: ["notary", "business-support", "in-office"],
  },
  {
    handle: "notary-mobile-visit-base",
    title: "Notary — Mobile Visit (1–2 documents)",
    description:
      "Mobile notary visit within the Seattle metro area. Includes travel and notarization for up to 2 documents.",
    category: "Notary & Business Support",
    price: 95,
    billingType: "one_time",
    image: "/images/portfolio/notary-public-2.svg",
    tags: ["notary", "mobile", "business-support"],
  },
  {
    handle: "notary-online-ron",
    title: "Notary — Online Notarization (RON)",
    description:
      "Remote online notarization for eligible documents. Identity verification and secure video session included.",
    category: "Notary & Business Support",
    price: 35,
    billingType: "one_time",
    image: "/images/portfolio/notary-public-3.svg",
    tags: ["notary", "online", "ron", "business-support"],
  },
  {
    handle: "notary-additional-signature",
    title: "Notary — Additional Signature",
    description: "Each additional notarized signature beyond the base mobile or in-office service.",
    category: "Notary & Business Support",
    price: 10,
    billingType: "one_time",
    image: "/images/portfolio/notary-public-1.svg",
    tags: ["notary", "business-support"],
  },
  {
    handle: "notary-loan-signing-package",
    title: "Notary — Loan Signing Package",
    description:
      "Full loan signing appointment with document review, signing, and return instructions. NNA-certified signing agent.",
    category: "Notary & Business Support",
    price: 175,
    billingType: "one_time",
    image: "/images/portfolio/notary-public-cover.svg",
    tags: ["notary", "loan-signing", "business-support"],
  },
  {
    handle: "notary-document-sending",
    title: "Notary — Document Sending & Scanbacks",
    description:
      "Digital scanbacks after signing plus secure return shipping of original documents to title, escrow, or your receiving party.",
    category: "Notary & Business Support",
    price: 25,
    billingType: "one_time",
    image: "/images/services/business-support.svg",
    tags: ["notary", "documents", "scanbacks", "business-support"],
  },
  {
    handle: "notary-apostille-coordination",
    title: "Notary — Apostille Coordination",
    description:
      "Coordination of apostille processing for notarized documents (Washington state fees billed separately).",
    category: "Notary & Business Support",
    price: 65,
    billingType: "one_time",
    image: "/images/portfolio/notary-public-3.svg",
    tags: ["notary", "apostille", "business-support"],
  },
  {
    handle: "notary-document-preparation",
    title: "Document Preparation",
    description: "Formatting and preparation of business documents prior to notarization or filing.",
    category: "Notary & Business Support",
    price: 45,
    billingType: "one_time",
    image: "/images/services/business-support.svg",
    tags: ["notary", "documents", "business-support"],
  },
  {
    handle: "notary-business-onsite-half-day",
    title: "Business Notary — On-Site (Half Day)",
    description:
      "On-site notary support at your office for up to 4 hours. Ideal for HR, legal, and recurring business needs.",
    category: "Notary & Business Support",
    price: 350,
    billingType: "one_time",
    image: "/images/portfolio/notary-public-cover.svg",
    tags: ["notary", "business", "on-site", "business-support"],
  },
  {
    handle: "business-consulting-hourly",
    title: "Business Consulting (1 hour)",
    description:
      "One hour of business consulting — operations, compliance, or digital strategy guidance.",
    category: "Notary & Business Support",
    price: 125,
    billingType: "one_time",
    image: "/images/services/business-support.svg",
    tags: ["consulting", "business-support"],
  },
  {
    handle: "business-compliance-review",
    title: "Business Compliance Review",
    description:
      "Review of business documentation, filings, and compliance checklist with written summary.",
    category: "Notary & Business Support",
    price: 195,
    billingType: "one_time",
    image: "/images/services/business-support.svg",
    tags: ["compliance", "business-support"],
  },

  // Print options & upgrades
  {
    handle: "print-addon-rush-turnaround",
    title: "Print — Rush Turnaround (2–3 days)",
    description: "Priority production queue for 2–3 business day turnaround. Applied per print order.",
    category: "Print Add-ons",
    price: 45,
    billingType: "one_time",
    image: "/images/print/marketing-materials.svg",
    tags: ["print", "add-on", "rush"],
  },
  {
    handle: "print-addon-same-week-priority",
    title: "Print — Same-Week Priority",
    description: "Expedited same-week production when schedule allows. Applied per print order.",
    category: "Print Add-ons",
    price: 28,
    billingType: "one_time",
    image: "/images/print/flyers.svg",
    tags: ["print", "add-on", "priority"],
  },
  {
    handle: "print-addon-matte-lamination",
    title: "Print — Matte Lamination",
    description: "Matte lamination finish for business cards, flyers, or brochures.",
    category: "Print Add-ons",
    price: 30,
    billingType: "one_time",
    image: "/images/print/business-cards.svg",
    tags: ["print", "add-on", "finishing"],
  },
  {
    handle: "print-addon-gloss-lamination",
    title: "Print — Gloss Lamination",
    description: "Gloss lamination finish for a premium, durable print surface.",
    category: "Print Add-ons",
    price: 30,
    billingType: "one_time",
    image: "/images/print/brochures.svg",
    tags: ["print", "add-on", "finishing"],
  },
  {
    handle: "print-addon-uv-coating",
    title: "Print — UV Coating",
    description: "UV coating for vibrant color and added protection on marketing materials.",
    category: "Print Add-ons",
    price: 42,
    billingType: "one_time",
    image: "/images/print/posters.svg",
    tags: ["print", "add-on", "finishing"],
  },
  {
    handle: "print-addon-rounded-corners",
    title: "Print — Rounded Corners",
    description: "Rounded corner die-cut for business cards or postcards.",
    category: "Print Add-ons",
    price: 18,
    billingType: "one_time",
    image: "/images/print/business-cards.svg",
    tags: ["print", "add-on", "finishing"],
  },
  {
    handle: "print-addon-die-cut",
    title: "Print — Custom Die Cut",
    description: "Custom die-cut shape for stickers, labels, or marketing pieces.",
    category: "Print Add-ons",
    price: 55,
    billingType: "one_time",
    image: "/images/print/stickers.svg",
    tags: ["print", "add-on", "finishing"],
  },
  {
    handle: "print-design-support",
    title: "Print — Design Support",
    description: "Professional design layout and file preparation for your print order.",
    category: "Print Add-ons",
    price: 95,
    billingType: "one_time",
    image: "/images/services/branding-graphic-design.svg",
    tags: ["print", "add-on", "design"],
  },
  {
    handle: "print-proof-revision",
    title: "Print — Extra Proof Revision",
    description: "One additional proof revision beyond the standard included proof round.",
    category: "Print Add-ons",
    price: 30,
    billingType: "one_time",
    image: "/images/print/labels.svg",
    tags: ["print", "add-on", "proof"],
  },
];
