import { prisma } from "@/lib/prisma";
import "@/lib/env";
import { ServiceType } from "@/app/generated/prisma/client";
import { PACKAGES_CATALOG } from "@/data/package-catalog";
import { computeFinalPackagePrices } from "@/lib/package-pricing";

import { PRINT_SERVICES } from "@/lib/constants/services-data";

const printImage = (slug: string) => `/images/print/${slug}.jpg`;

/** Default starting prices in cents for print catalog */
const DEFAULT_PRINT_PRICES: Record<string, number | null> = {
  "business-cards": 3500,
  flyers: 4500,
  brochures: 8500,
  posters: 2500,
  banners: 12000,
  signs: 15000,
  stickers: 2000,
  labels: 3000,
  "apparel-dtf": 1800,
  "marketing-materials": 5000,
  "custom-packaging": 20000,
  "large-format": 8000,
  "bulk-orders": null,
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function main() {
  // Nettoyage
  await prisma.orderStatusHistory.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.serviceRequest.deleteMany();
  await prisma.package.deleteMany();
  await prisma.subService.deleteMany();
  await prisma.service.deleteMany();
  await prisma.printProduct.deleteMany();
  await prisma.newsletter.deleteMany();
  await prisma.contact.deleteMany();

  // SERVICES
  const servicesData = [
    {
      name: "Branding",
      slug: "branding",
      description:
        "Companies seeking a fully integrated branding solution with personalized support. Each package offers progressively more value, allowing clients to choose based on their specific needs and budget. This tiered approach makes it easy for clients to start with basics and upgrade as their business grows.",
      icon: "/images/branding.png",
      image: "/images/branding.png",
      serviceType: ServiceType.PACKAGE,
      position: 1,
    },
    {
      name: "Web Design and Development",
      slug: "web-design-and-development",
      description:
        "Companies needing a robust, feature-rich website with advanced customization and continuous support. Each package caters to different business sizes and stages, offering flexibility for clients to select the package that best suits their current needs while allowing for future upgrades as their business evolves.",
      icon: "/images/Web_design_dev.png",
      image: "/images/Web_design_dev.png",
      serviceType: ServiceType.PACKAGE,
      position: 2,
    },
    {
      name: "Mobile App Development",
      slug: "mobile-app-development",
      description:
        "Enterprises or businesses looking for a fully customized, high-end app with ongoing support and premium features that cater to complex needs and large-scale operations. These packages are designed to cater to various stages of business development, allowing clients to start with a basic app in the Starter Package and scale up to a fully customized, high-performance app in the Ultimate Package as their needs grow.",
      icon: "/images/Mobile_ App_Development.png",
      image: "/images/Mobile_ App_Development.png",
      serviceType: ServiceType.PACKAGE,
      position: 3,
    },
    {
      name: "Digital Marketing",
      slug: "digital-marketing",
      description:
        "Businesses aiming for the highest level of digital marketing support, complete with a full suite of services to dominate their market and achieve significant growth. Each package is designed to meet different business needs and budgets, allowing clients to start with essential services in the Starter Package and progressively scale up to the comprehensive offerings in the Ultimate Package as their business grows.",
      icon: "/images/Digital_Marketing.png",
      image: "/images/Digital_Marketing.png",
      serviceType: ServiceType.PACKAGE,
      position: 4,
    },
    {
      name: "Animation (2D & 3D)",
      slug: "animation-2d-and-3d",
      description:
        "Small businesses or individuals needing simple, cost-effective animations for presentations, social media, or marketing.",
      icon: "/images/Animation_2d_3d.png",
      image: "/images/Animation_2d_3d.png",
      serviceType: ServiceType.PACKAGE,
      position: 5,
    },
    {
      name: "Digital Signage",
      slug: "digital-signage",
      description:
        "Professional digital signage for storefronts, offices, restaurants, and retail. We design screen content, configure displays, and help you keep messaging fresh with remote updates and scheduled playlists.",
      icon: "/images/services/digital-signage.jpg",
      image: "/images/services/digital-signage.jpg",
      serviceType: ServiceType.PACKAGE,
      position: 6,
    },
    {
      name: "All-in Marketing Platform",
      slug: "all-in-marketing-platform",
      description:
        "MHM Digital's all-in-one marketing platform — CRM, pipelines, email and SMS, funnels, forms, appointment booking, and automation in one dashboard. No third-party CRM to manage; we host and support everything for you.",
      icon: "/images/services/crm-saas-solutions.svg",
      image: "/images/services/crm-saas-solutions.svg",
      serviceType: ServiceType.PACKAGE,
      position: 7,
    },
  ];

  const createdServices = new Map<string, { id: string; name: string }>();

  for (const service of servicesData) {
    const created = await prisma.service.create({ data: service });
    createdServices.set(created.name, { id: created.id, name: created.name });
  }

  // SUBSERVICES
  const subServicesData = [
    {
      name: "Social Media Marketing",
      slug: slugify("Social Media Marketing"),
      description: "Lorem ipsum",
      serviceName: "Digital Marketing",
      position: 1,
    },
    {
      name: "Search Engine Optimization",
      slug: slugify("Search Engine Optimization"),
      description: "Lorem ipsum",
      serviceName: "Digital Marketing",
      position: 2,
    },
    {
      name: "Pay-Per-Click Advertising",
      slug: slugify("Pay-Per-Click Advertising"),
      description: "Lorem ipsum",
      serviceName: "Digital Marketing",
      position: 3,
    },
    {
      name: "Content Marketing",
      slug: slugify("Content Marketing"),
      description: "Lorem ipsum",
      serviceName: "Digital Marketing",
      position: 4,
    },
    {
      name: "Email Marketing",
      slug: slugify("Email Marketing"),
      description: "Lorem ipsum",
      serviceName: "Digital Marketing",
      position: 5,
    },
  ];

  const createdSubServices = new Map<string, { id: string; name: string }>();

  for (const sub of subServicesData) {
    const service = createdServices.get(sub.serviceName);
    if (!service) throw new Error(`Service not found: ${sub.serviceName}`);

    const created = await prisma.subService.create({
      data: {
        name: sub.name,
        slug: sub.slug,
        description: sub.description,
        serviceId: service.id,
        position: sub.position,
      },
    });

    createdSubServices.set(created.name, { id: created.id, name: created.name });
  }

  for (const pkg of PACKAGES_CATALOG) {
    const service = createdServices.get(pkg.serviceName);
    if (!service) throw new Error(`Service not found: ${pkg.serviceName}`);

    const subService = pkg.subServiceName
      ? createdSubServices.get(pkg.subServiceName)
      : null;

    const finalPrices = computeFinalPackagePrices(pkg);

    await prisma.package.create({
      data: {
        serviceId: service.id,
        subServiceId: subService?.id ?? null,
        name: pkg.name,
        slug: pkg.slug,
        description: pkg.description,
        points: pkg.points,
        image: pkg.image,
        pricingType: pkg.pricingType,
        price: finalPrices.price,
        priceByMonth: finalPrices.priceByMonth,
        priceByYear: finalPrices.priceByYear,
        isActive: true,
        isFeatured: pkg.name === "Ultimate",
        position: pkg.position,
      },
    });
  }

  // CMS defaults
  const stats = [
    { key: "projects", label: "Projects Completed", value: "150", suffix: "+", sortOrder: 0 },
    { key: "businesses", label: "Businesses Supported", value: "80", suffix: "+", sortOrder: 1 },
    { key: "industries", label: "Industries Served", value: "12", suffix: "+", sortOrder: 2 },
    { key: "satisfaction", label: "Customer Satisfaction", value: "98", suffix: "%", sortOrder: 3 },
    { key: "experience", label: "Years Combined Experience", value: "15", suffix: "+", sortOrder: 4 },
  ];

  for (const stat of stats) {
    await prisma.siteStatistic.upsert({
      where: { key: stat.key },
      update: stat,
      create: stat,
    });
  }

  await prisma.testimonial.deleteMany();
  await prisma.testimonial.createMany({
    data: [
      {
        name: "Sarah Johnson",
        role: "CEO",
        company: "TechStart Inc.",
        content: "MHM Digital transformed our online presence. Our website traffic increased 300% within three months.",
        rating: 5,
        sortOrder: 0,
      },
      {
        name: "Michael Chen",
        role: "Marketing Director",
        company: "GrowthCo",
        content: "Professional, responsive, and delivered exactly what we needed. Outstanding print quality.",
        rating: 5,
        sortOrder: 1,
      },
    ],
  });

  await prisma.printProduct.deleteMany();
  for (const [index, item] of PRINT_SERVICES.entries()) {
    await prisma.printProduct.create({
      data: {
        name: item.name,
        slug: item.slug,
        description: item.description,
        category: item.slug === "bulk-orders" ? "Bulk" : "Standard",
        image: item.image || printImage(item.slug),
        basePrice: DEFAULT_PRINT_PRICES[item.slug] ?? null,
        isActive: true,
        isBulk: item.slug === "bulk-orders",
        sortOrder: index,
      },
    });
  }

  const dealsToEnsure = [
    {
      title: "Fall Promo — All Services",
      description:
        "Save 10% on Growth, Ultimate, and all non-Starter packages through September 30. Starter tiers excluded.",
      badgeText: "10% OFF",
      discountLabel: "All packages except Starter — ends Sep 30",
      imageUrl: "/images/branding.png",
      buttonText: "View Packages",
      buttonUrl: "/packages",
      category: "promo",
      isActive: true,
      showOnHome: true,
      sortOrder: 0,
    },
    {
      title: "New Client Website Package",
      description: "Get a professional website launch package with branding consultation included.",
      badgeText: "LIMITED TIME",
      discountLabel: "15% off Growth & Ultimate packages",
      imageUrl: "/images/deals/website-package-deal.png",
      buttonText: "Claim Offer",
      buttonUrl: "/quote",
      category: "website-design-development",
      isActive: true,
      showOnHome: true,
      sortOrder: 1,
    },
    {
      title: "Print Bulk Discount",
      description: "Save on business cards, flyers, and banners when you order in volume.",
      badgeText: "PRINT DEAL",
      discountLabel: "Volume pricing available",
      imageUrl: "/images/deals/print-bulk-deal.png",
      buttonText: "Request Bulk Quote",
      buttonUrl: "/quote?type=print-bulk",
      category: "print:bulk-orders",
      isActive: true,
      showOnHome: true,
      sortOrder: 2,
    },
    {
      title: "Digital Signage Launch",
      description: "Get your first screen set up with custom content and remote playlist management.",
      badgeText: "NEW SERVICE",
      discountLabel: "Starter package from $680",
      imageUrl: "/images/deals/digital-signage-deal.png",
      buttonText: "View Signage",
      buttonUrl: "/services",
      category: "digital-signage",
      isActive: true,
      showOnHome: true,
      sortOrder: 3,
    },
  ];

  const dealTitles = dealsToEnsure.map((deal) => deal.title);
  await prisma.deal.deleteMany({ where: { title: { notIn: dealTitles } } });

  for (const deal of dealsToEnsure) {
    const existing = await prisma.deal.findFirst({ where: { title: deal.title } });
    if (existing) {
      await prisma.deal.update({ where: { id: existing.id }, data: deal });
    } else {
      await prisma.deal.create({ data: deal });
    }
  }

  const faqToEnsure = [
    {
      question: "What services does MHM Digital offer?",
      answer:
        "We offer branding, web design and development, mobile apps, digital marketing, animation, digital signage, and professional printing — including business cards, flyers, banners, and bulk corporate orders.",
      category: "general",
      sortOrder: 0,
      isActive: true,
    },
    {
      question: "How do I get a quote for my project?",
      answer:
        "Use our online quote form or contact us directly. We respond within one business day with a tailored proposal. Registered customers can also track quotes in their dashboard.",
      category: "general",
      sortOrder: 1,
      isActive: true,
    },
    {
      question: "Do you offer printing services in Seattle?",
      answer:
        "Yes. MHM Digital provides full-service printing in Seattle — from business cards and marketing materials to large-format banners and bulk corporate orders with proof approval and tracking.",
      category: "print",
      sortOrder: 2,
      isActive: true,
    },
    {
      question: "How does payment work?",
      answer:
        "After you approve a quote, our team sends payment instructions. We accept standard business payment methods and provide invoices through your customer dashboard.",
      category: "billing",
      sortOrder: 3,
      isActive: true,
    },
  ];

  for (const faq of faqToEnsure) {
    const existing = await prisma.faqItem.findFirst({ where: { question: faq.question } });
    if (existing) {
      await prisma.faqItem.update({ where: { id: existing.id }, data: faq });
    } else {
      await prisma.faqItem.create({ data: faq });
    }
  }

  const existingPopup = await prisma.popupSettings.findFirst();
  if (!existingPopup) {
    await prisma.popupSettings.create({
      data: {
        enabled: false,
        title: "Welcome to MHM Digital",
        description: "Get a free quote on your next project. Limited time offer for new clients.",
        buttonText: "Get a Free Quote",
        buttonUrl: "/quote",
        secondaryText: "Browse Services",
        secondaryUrl: "/services",
        displayDelay: 5,
        showOnceSession: true,
        showOnceUser: true,
      },
    });
  }

  console.log("Seed completed successfully.");
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });