import { writeFileSync, mkdirSync } from "fs";
import { PACKAGES_CATALOG } from "../data/package-catalog";
import { computeFinalPackagePrices } from "../lib/package-pricing";

const dir = "prisma/migrations/20260906160000_sync_package_pricing";
mkdirSync(dir, { recursive: true });

const lines = [
  "-- Sync package prices and copy from catalog (non-destructive updates by slug)",
  "",
];

for (const pkg of PACKAGES_CATALOG) {
  const p = computeFinalPackagePrices(pkg);
  const price = p.price === null ? "NULL" : p.price;
  const month = p.priceByMonth === null ? "NULL" : p.priceByMonth;
  const year = p.priceByYear === null ? "NULL" : p.priceByYear;
  const desc = pkg.description.replace(/'/g, "''");
  const points = `{${pkg.points
    .map((pt) => `"${pt.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`)
    .join(",")}}`;

  lines.push(`UPDATE packages SET`);
  lines.push(`  price = ${price},`);
  lines.push(`  "priceByMonth" = ${month},`);
  lines.push(`  "priceByYear" = ${year},`);
  lines.push(`  description = '${desc}',`);
  lines.push(`  points = '${points}'::text[],`);
  lines.push(`  "pricingType" = '${pkg.pricingType}',`);
  lines.push(`  position = ${pkg.position},`);
  lines.push(`  "updatedAt" = NOW()`);
  lines.push(`WHERE slug = '${pkg.slug}';`);
  lines.push("");
}

writeFileSync(`${dir}/migration.sql`, lines.join("\n"));
console.log(`Wrote ${dir}/migration.sql (${PACKAGES_CATALOG.length} packages)`);
