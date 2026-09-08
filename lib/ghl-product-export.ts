import { PackagePricingType } from "@/app/generated/prisma/client";
import { PACKAGES_CATALOG, type PackageCatalogEntry } from "@/data/package-catalog";
import { GHL_ADDONS_CATALOG, type GhlAddonEntry } from "@/data/ghl-addons-catalog";
import { DEFAULT_PRINT_PRICES } from "@/data/print-pricing";
import { PRINT_SERVICES } from "@/lib/constants/services-data";
import { computeFinalPackagePrices } from "@/lib/package-pricing";
import {
  applySitePromo,
  isSitePromoActive,
  SITE_PROMO_ENDS_AT,
  SITE_PROMO_LABEL,
} from "@/lib/promotions";
import { absoluteUrl } from "@/lib/seo/site";

/** HighLevel CSV import columns — match GHL sample template field names. */
export const GHL_CSV_COLUMNS = [
  "Handle",
  "Title",
  "Description",
  "Type",
  "Category",
  "SKU",
  "Price",
  "Compare Price",
  "Billing Type",
  "Billing Frequency",
  "Currency",
  "Images",
  "Include in Online Store",
  "Track Inventory",
  "Weight Value",
  "Weight Unit",
  "Dimension Length",
  "Dimension Width",
  "Dimension Height",
  "Dimension Unit",
  "Enable Product Label",
  "Product Label Content",
  "Label Start Date",
  "Label End Date",
  "SEO Title",
  "SEO Description",
  "Tags",
] as const;

export type GhlCsvColumn = (typeof GHL_CSV_COLUMNS)[number];
export type GhlProductRow = Record<GhlCsvColumn, string>;

export type GhlExportProduct = {
  handle: string;
  title: string;
  description: string;
  type: "Service" | "Digital" | "Physical";
  category: string;
  sku: string;
  price: number | null;
  comparePrice: number | null;
  billingType: "one_time" | "recurring";
  billingFrequency?: "monthly" | "yearly";
  currency: "USD";
  images: string[];
  includeInStore: boolean;
  trackInventory: boolean;
  enableProductLabel: boolean;
  productLabelContent?: string;
  labelStartDate?: string;
  labelEndDate?: string;
  seoTitle: string;
  seoDescription: string;
  tags: string[];
  source: "package" | "print" | "addon";
  quoteOnly?: boolean;
};

const SERVICE_ICON_BY_NAME: Record<string, string> = {
  Branding: "/images/services/branding-graphic-design.svg",
  "Web Design and Development": "/images/services/website-design-development.svg",
  "Mobile App Development": "/images/services/mobile-app-development.svg",
  "Digital Marketing": "/images/services/digital-marketing.svg",
  "Animation (2D & 3D)": "/images/services/digital-marketing.svg",
  "Digital Signage": "/images/services/digital-signage.svg",
  "All-in Marketing Platform": "/images/services/crm-saas-solutions.svg",
};

const DM_SUBSERVICE_ICONS: Record<string, string> = {
  "Social Media Marketing": "/images/services/social-media-management.svg",
  "Search Engine Optimization": "/images/services/seo.svg",
  "Pay-Per-Click Advertising": "/images/services/paid-advertising.svg",
  "Content Marketing": "/images/services/digital-marketing.svg",
  "Email Marketing": "/images/services/business-automation.svg",
};

function resolveImageUrl(path: string): string {
  const tierMatch = path.match(/icon-(\d)-packages-marketing-template\.png$/);
  if (tierMatch) {
    return absoluteUrl(`/images/icon-${tierMatch[1]}-service-marketing-template.svg`);
  }

  if (path.endsWith(".jpg")) {
    const svgPath = path.replace(/\.jpg$/, ".svg");
    return absoluteUrl(svgPath);
  }

  return absoluteUrl(path);
}

function packageCategory(pkg: PackageCatalogEntry): string {
  if (pkg.subServiceName) {
    return `Digital Marketing › ${pkg.subServiceName}`;
  }
  return pkg.serviceName;
}

function packageIcon(pkg: PackageCatalogEntry): string {
  if (pkg.subServiceName && DM_SUBSERVICE_ICONS[pkg.subServiceName]) {
    return resolveImageUrl(DM_SUBSERVICE_ICONS[pkg.subServiceName]);
  }
  const serviceIcon = SERVICE_ICON_BY_NAME[pkg.serviceName];
  if (serviceIcon) return resolveImageUrl(serviceIcon);
  return resolveImageUrl(pkg.image);
}

function buildDescription(title: string, body: string, bullets: string[]): string {
  const list = bullets.map((point) => `• ${point}`).join("\n");
  return `${body}\n\n${title} includes:\n${list}`.trim();
}

function promoLabelFields(slug: string, packageName: string, displayPrice: number) {
  if (!isSitePromoActive() || displayPrice <= 0) {
    return { enableProductLabel: false as const };
  }

  const promo = applySitePromo(displayPrice, slug, {
    serviceName: undefined,
    packageName,
  });

  if (!promo.promoApplied) {
    return { enableProductLabel: false as const };
  }

  return {
    enableProductLabel: true as const,
    productLabelContent: SITE_PROMO_LABEL,
    labelStartDate: new Date().toISOString(),
    labelEndDate: SITE_PROMO_ENDS_AT.toISOString(),
    comparePrice: promo.originalPrice,
  };
}

function packageProducts(): GhlExportProduct[] {
  const products: GhlExportProduct[] = [];

  for (const pkg of PACKAGES_CATALOG) {
    const prices = computeFinalPackagePrices(pkg);
    const category = packageCategory(pkg);
    const icon = packageIcon(pkg);
    const fullTitle = `${category} — ${pkg.name}`;
    const description = buildDescription(fullTitle, pkg.description, pkg.points);
    const tags = [
      "package",
      slugify(pkg.serviceName),
      pkg.subServiceName ? slugify(pkg.subServiceName) : "",
      pkg.name.toLowerCase(),
    ].filter(Boolean);

    if (pkg.pricingType === PackagePricingType.ONE_TIME && prices.price != null) {
      const promoFields = promoLabelFields(pkg.slug, pkg.name, prices.price);
      products.push({
        handle: pkg.slug,
        title: fullTitle,
        description,
        type: "Service",
        category,
        sku: pkg.slug,
        price: prices.price,
        comparePrice: promoFields.comparePrice ?? null,
        billingType: "one_time",
        currency: "USD",
        images: [icon],
        includeInStore: true,
        trackInventory: false,
        enableProductLabel: promoFields.enableProductLabel,
        productLabelContent: promoFields.productLabelContent,
        labelStartDate: promoFields.labelStartDate,
        labelEndDate: promoFields.labelEndDate,
        seoTitle: `${fullTitle} | MHM Digital`,
        seoDescription: pkg.description,
        tags,
        source: "package",
      });
    }

    if (pkg.pricingType === PackagePricingType.MONTHLY_YEARLY) {
      if (prices.priceByMonth != null) {
        const handle = `${pkg.slug}-monthly`;
        const promoFields = promoLabelFields(handle, pkg.name, prices.priceByMonth);
        products.push({
          handle,
          title: `${fullTitle} (Monthly)`,
          description,
          type: "Service",
          category,
          sku: handle,
          price: prices.priceByMonth,
          comparePrice: promoFields.comparePrice ?? null,
          billingType: "recurring",
          billingFrequency: "monthly",
          currency: "USD",
          images: [icon],
          includeInStore: true,
          trackInventory: false,
          enableProductLabel: promoFields.enableProductLabel,
          productLabelContent: promoFields.productLabelContent,
          labelStartDate: promoFields.labelStartDate,
          labelEndDate: promoFields.labelEndDate,
          seoTitle: `${fullTitle} — Monthly | MHM Digital`,
          seoDescription: pkg.description,
          tags: [...tags, "monthly"],
          source: "package",
        });
      }

      if (prices.priceByYear != null) {
        const handle = `${pkg.slug}-yearly`;
        const promoFields = promoLabelFields(handle, pkg.name, prices.priceByYear);
        products.push({
          handle,
          title: `${fullTitle} (Yearly)`,
          description,
          type: "Service",
          category,
          sku: handle,
          price: prices.priceByYear,
          comparePrice: promoFields.comparePrice ?? null,
          billingType: "recurring",
          billingFrequency: "yearly",
          currency: "USD",
          images: [icon],
          includeInStore: true,
          trackInventory: false,
          enableProductLabel: promoFields.enableProductLabel,
          productLabelContent: promoFields.productLabelContent,
          labelStartDate: promoFields.labelStartDate,
          labelEndDate: promoFields.labelEndDate,
          seoTitle: `${fullTitle} — Yearly | MHM Digital`,
          seoDescription: pkg.description,
          tags: [...tags, "yearly"],
          source: "package",
        });
      }
    }
  }

  return products;
}

function printProducts(): GhlExportProduct[] {
  return PRINT_SERVICES.map((item) => {
    const cents = DEFAULT_PRINT_PRICES[item.slug] ?? null;
    const price = cents != null ? cents / 100 : null;
    const isBulk = item.slug === "bulk-orders";
    const icon = resolveImageUrl(item.image);

    return {
      handle: `print-${item.slug}`,
      title: isBulk ? item.name : `${item.name} (Starting at)`,
      description: isBulk
        ? `${item.description}\n\nContact us for volume pricing and dedicated account support.`
        : `${item.description}\n\nStarting price for standard quantity. Final quote based on quantity, size, material, and finishing options.`,
      type: isBulk ? "Service" : "Physical",
      category: isBulk ? "Print › Bulk & Corporate" : "Print › Standard",
      sku: `print-${item.slug}`,
      price: isBulk ? null : price,
      comparePrice: null,
      billingType: "one_time" as const,
      currency: "USD" as const,
      images: [icon],
      includeInStore: true,
      trackInventory: false,
      enableProductLabel: false,
      seoTitle: `${item.name} | MHM Digital Printing`,
      seoDescription: item.description,
      tags: ["print", item.slug, isBulk ? "quote" : "starting-price"],
      source: "print" as const,
      quoteOnly: isBulk,
    };
  });
}

function addonProducts(): GhlExportProduct[] {
  return GHL_ADDONS_CATALOG.map((addon) => addonToProduct(addon));
}

function addonToProduct(addon: GhlAddonEntry): GhlExportProduct {
  return {
    handle: addon.handle,
    title: addon.title,
    description: addon.description,
    type: "Service",
    category: addon.category,
    sku: addon.handle,
    price: addon.price,
    comparePrice: addon.comparePrice ?? null,
    billingType: addon.billingType,
    billingFrequency: addon.billingFrequency,
    currency: "USD",
    images: [resolveImageUrl(addon.image)],
    includeInStore: true,
    trackInventory: false,
    enableProductLabel: false,
    seoTitle: `${addon.title} | MHM Digital`,
    seoDescription: addon.description.slice(0, 160),
    tags: addon.tags,
    source: "addon",
    quoteOnly: addon.quoteOnly,
  };
}

export function buildGhlExportProducts(): GhlExportProduct[] {
  return [...packageProducts(), ...printProducts(), ...addonProducts()];
}

export function productToCsvRow(product: GhlExportProduct): GhlProductRow {
  const priceValue =
    product.quoteOnly || product.price == null ? "" : formatPrice(product.price);
  const compareValue =
    product.comparePrice != null && product.comparePrice > (product.price ?? 0)
      ? formatPrice(product.comparePrice)
      : "";

  return {
    Handle: product.handle,
    Title: product.title,
    Description: product.description,
    Type: product.type,
    Category: product.category,
    SKU: product.sku,
    Price: priceValue,
    "Compare Price": compareValue,
    "Billing Type": product.billingType,
    "Billing Frequency": product.billingFrequency ?? "",
    Currency: product.currency,
    Images: product.images.join(" | "),
    "Include in Online Store": product.includeInStore ? "TRUE" : "FALSE",
    "Track Inventory": product.trackInventory ? "TRUE" : "FALSE",
    "Weight Value": "",
    "Weight Unit": "",
    "Dimension Length": "",
    "Dimension Width": "",
    "Dimension Height": "",
    "Dimension Unit": "",
    "Enable Product Label": product.enableProductLabel ? "TRUE" : "FALSE",
    "Product Label Content": product.productLabelContent ?? "",
    "Label Start Date": product.labelStartDate ?? "",
    "Label End Date": product.labelEndDate ?? "",
    "SEO Title": product.seoTitle,
    "SEO Description": product.seoDescription,
    Tags: product.tags.join(", "),
  };
}

export function productsToCsv(products: GhlExportProduct[]): string {
  const rows = products.map(productToCsvRow);
  const header = GHL_CSV_COLUMNS.join(",");
  const body = rows.map((row) => GHL_CSV_COLUMNS.map((col) => escapeCsv(row[col])).join(","));
  return [header, ...body].join("\n");
}

export function buildGhlExportManifest(products: GhlExportProduct[]) {
  const bySource = {
    packages: products.filter((p) => p.source === "package").length,
    print: products.filter((p) => p.source === "print").length,
    addons: products.filter((p) => p.source === "addon").length,
  };

  return {
    generatedAt: new Date().toISOString(),
    siteUrl: absoluteUrl(),
    totalProducts: products.length,
    counts: bySource,
    promoActive: isSitePromoActive(),
    promoLabel: isSitePromoActive() ? SITE_PROMO_LABEL : null,
    promoEndsAt: isSitePromoActive() ? SITE_PROMO_ENDS_AT.toISOString() : null,
    importNotes: [
      "Download HighLevel sample CSV from Payments > Products > Import as CSV and verify column headers match.",
      "If headers differ, map columns during import or rename headers to match your GHL sample file.",
      "Leave weight, dimension, and inventory fields blank for services.",
      "Bulk print orders and quote-only items have empty Price — configure as quote products in GHL.",
      "Recurring packages use separate monthly/yearly SKUs with Billing Type = recurring.",
    ],
    products,
  };
}

function formatPrice(amount: number): string {
  return Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
}

function escapeCsv(value: string): string {
  if (value.includes('"') || value.includes(",") || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
