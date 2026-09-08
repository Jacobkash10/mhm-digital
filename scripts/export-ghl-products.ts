#!/usr/bin/env tsx
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import {
  buildGhlExportManifest,
  buildGhlExportProducts,
  productsToCsv,
} from "@/lib/ghl-product-export";

const OUT_DIR = join(process.cwd(), "exports");
const CSV_PATH = join(OUT_DIR, "mhm-digital-ghl-products.csv");
const JSON_PATH = join(OUT_DIR, "mhm-digital-ghl-products.json");

function main() {
  const products = buildGhlExportProducts();
  const csv = productsToCsv(products);
  const manifest = buildGhlExportManifest(products);

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(CSV_PATH, csv, "utf8");
  writeFileSync(JSON_PATH, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  console.log(`Exported ${products.length} products for HighLevel import:`);
  console.log(`  Packages: ${manifest.counts.packages}`);
  console.log(`  Print:    ${manifest.counts.print}`);
  console.log(`  Add-ons:  ${manifest.counts.addons}`);
  console.log(`\nCSV:  ${CSV_PATH}`);
  console.log(`JSON: ${JSON_PATH}`);

  if (manifest.promoActive) {
    console.log(`\nPromo active: ${manifest.promoLabel} (Compare Price set on eligible products)`);
  }
}

main();
