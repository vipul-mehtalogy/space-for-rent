import shopsData from "@/data/shops.json";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Commercial Shops for Rent – Prime Location",
  description:
    "Ground-floor commercial shops available for rent with good footfall near Shani Mandir."
};

export default function ShopsForRentPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Shops Available for Rent</h1>

      {/* Common Features */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Common Features</h2>
        <ul className="list-disc pl-6 text-gray-600">
          {shopsData.commonFeatures.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Shops */}
     <section className="grid gap-6 md:grid-cols-2">
  {shopsData.shops.map((shop) => (
    <div
      key={shop.id}
      className="border rounded-lg overflow-hidden shadow-sm"
    >
      {/* Shop Image */}
      {shop.images?.length > 0 && (
        <div className="relative w-full h-64 md:h-72">
          <Image
            src={shop.images[0]}
            alt={`${shop.name} for rent`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
      )}

      {/* Shop Details */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-1">
          {shop.name}
        </h3>

        <p className="text-gray-600 mb-2">
          {shop.size} · {shop.facing}-facing
        </p>

        {shop.features?.length > 0 && (
          <ul className="text-gray-600 mb-3">
            {shop.features.map((feature, i) => (
              <li key={i}>• {feature}</li>
            ))}
          </ul>
        )}

        <Link
          href="/rental-terms/shops"
          className="text-blue-600 font-medium inline-block"
        >
          View Rental Terms →
        </Link>
      </div>
    </div>
  ))}
</section>
    </main>
  );
}
