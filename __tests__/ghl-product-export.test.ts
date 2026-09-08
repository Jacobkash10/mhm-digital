import { describe, expect, it } from "vitest";

import { GHL_ADDONS_CATALOG } from "@/data/ghl-addons-catalog";
import {
  GHL_CSV_COLUMNS,
  buildGhlExportProducts,
  productsToCsv,
} from "@/lib/ghl-product-export";

describe("ghl-product-export", () => {
  it("exports packages, print, and add-ons with required CSV columns", () => {
    const products = buildGhlExportProducts();
    expect(products.length).toBeGreaterThan(80);

    const packages = products.filter((p) => p.source === "package");
    const print = products.filter((p) => p.source === "print");
    const addons = products.filter((p) => p.source === "addon");

    expect(packages.length).toBeGreaterThan(40);
    expect(print.length).toBe(13);
    expect(addons.length).toBe(GHL_ADDONS_CATALOG.length);

    const handles = new Set(products.map((p) => p.handle));
    expect(handles.size).toBe(products.length);
  });

  it("includes image URLs for every product", () => {
    const products = buildGhlExportProducts();
    for (const product of products) {
      expect(product.images.length).toBeGreaterThan(0);
      expect(product.images[0]).toMatch(/^https:\/\/mhmdigital\.us\//);
    }
  });

  it("produces valid CSV with exact column headers", () => {
    const csv = productsToCsv(buildGhlExportProducts());
    const [header, ...rows] = csv.split("\n");
    expect(header).toBe(GHL_CSV_COLUMNS.join(","));
    expect(rows.length).toBeGreaterThan(80);
  });
});
