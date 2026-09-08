import { describe, expect, it } from "vitest";

import { GHL_ADDONS_CATALOG } from "@/data/ghl-addons-catalog";
import {
  GHL_CSV_COLUMNS,
  buildGhlExportProducts,
  productsToCsv,
} from "@/lib/ghl-product-export";

function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (inQuotes) {
      if (char === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current);
  return result;
}

describe("ghl-product-export", () => {
  it("exports packages, print, and add-ons with required CSV columns", () => {
    const products = buildGhlExportProducts();
    expect(products.length).toBeGreaterThan(90);

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

  it("produces valid CSV with exact GHL sample headers (29 columns)", () => {
    expect(GHL_CSV_COLUMNS).toHaveLength(29);

    const csv = productsToCsv(buildGhlExportProducts());
    const rows = csv.trim().split("\n").map(parseCsvLine);

    expect(rows[0]).toEqual([...GHL_CSV_COLUMNS]);
    expect(rows.length - 1).toBeGreaterThan(90);

    for (const row of rows.slice(1)) {
      expect(row).toHaveLength(29);
    }
  });
});
