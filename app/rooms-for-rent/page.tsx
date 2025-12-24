import Image from "next/image";
import roomsData from "@/data/rooms.json";
import Link from "next/link";
import nearbyPlaces from "@/data/nearby.json";
import { buildNearbySeoText } from "@/lib/buildNearbySeoText";

const seoText = buildNearbySeoText(nearbyPlaces);
export const metadata = {
  title: "Furnished Rooms for Rent Near Main Road",
  description:
    "Well-lit furnished rooms suitable for students, located close to main road and public transport."
};

export default function RoomsForRentPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Rooms Available for Rent</h1>
      <p className="sr-only">{seoText}</p>
      {/* Common Features */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Common Features</h2>
        <ul className="list-disc pl-6 text-gray-600">
          {roomsData.commonFeatures.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Rooms */}
      {/* Rooms */}
<section className="grid gap-6 md:grid-cols-2">
  {[...roomsData.rooms]
    .sort((a, b) => Number(b.available) - Number(a.available))
    .map((room) => {
      const isAvailable = room.available;

      return (
        <div
          key={room.id}
          className={`border rounded-lg p-5 relative ${
            !isAvailable ? "opacity-70" : ""
          }`}
        >
          {/* Availability Badge */}
          <span
            className={`absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded ${
              isAvailable
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {isAvailable ? "Available" : "Occupied"}
          </span>

          <h3 className="text-lg font-semibold mb-2">{room.name}</h3>

          {/* Image Gallery */}
          <div className="mb-4 grid grid-cols-2 gap-2">
            {room.images.map((imgSrc, i) => (
              <Image
                key={i}
                src={imgSrc}
                alt={`${room.name} image ${i + 1}`}
                width={300}
                height={200}
                className="rounded"
              />
            ))}
          </div>

          <ul className="text-gray-600 mb-4">
            {room.amenities.map((a, i) => (
              <li key={i}>• {a}</li>
            ))}
          </ul>

          {/* CTA */}
          {isAvailable ? (
            <Link
              href="/rental-terms/rooms"
              className="text-blue-600 font-medium"
            >
              View Rental Terms →
            </Link>
          ) : (
            <span className="text-gray-500 font-medium">
              Currently Occupied
            </span>
          )}

          {/* SEO-safe hidden text */}
          <p className="sr-only">
            {room.name} is currently{" "}
            {isAvailable ? "available for rent" : "occupied and not available"}.
          </p>
        </div>
      );
    })}
</section>


    </main>
  );
}
