import "@/lib/env";
import { prisma } from "@/lib/prisma";
import { PACKAGES_CATALOG } from "@/data/package-catalog";
import { computeFinalPackagePrices } from "@/lib/package-pricing";
import { hasDatabaseUrl } from "@/lib/env";

async function main() {
  if (!hasDatabaseUrl()) {
    console.log("Skipping package pricing update — no database URL configured.");
    return;
  }

  let updated = 0;
  let missing = 0;

  for (const pkg of PACKAGES_CATALOG) {
    const prices = computeFinalPackagePrices(pkg);
    const result = await prisma.package.updateMany({
      where: { slug: pkg.slug },
      data: {
        description: pkg.description,
        points: pkg.points,
        pricingType: pkg.pricingType,
        price: prices.price,
        priceByMonth: prices.priceByMonth,
        priceByYear: prices.priceByYear,
        position: pkg.position,
        isActive: true,
      },
    });

    if (result.count === 0) {
      missing++;
      console.warn(`Package not found in database: ${pkg.slug}`);
    } else {
      updated += result.count;
      console.log(
        `Updated ${pkg.slug} → price=${prices.price ?? "—"} /mo=${prices.priceByMonth ?? "—"} /yr=${prices.priceByYear ?? "—"}`
      );
    }
  }

  console.log(`Done. Updated ${updated} package row(s). Missing ${missing} slug(s).`);
}

main()
  .catch((error) => {
    console.error("Package pricing update failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
