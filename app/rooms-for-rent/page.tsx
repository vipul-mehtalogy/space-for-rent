import roomsData from "@/data/rooms.json";
import Link from "next/link";

export const metadata = {
  title: "Furnished Rooms for Rent Near Main Road",
  description:
    "Well-lit furnished rooms suitable for students, located close to main road and public transport."
};

export default function RoomsForRentPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Rooms Available for Rent</h1>

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
      <section className="grid gap-6 md:grid-cols-2">
        {roomsData.rooms.map((room) => (
          <div key={room.id} className="border rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">{room.name}</h3>

            <ul className="text-gray-600 mb-4">
              {room.amenities.map((a, i) => (
                <li key={i}>• {a}</li>
              ))}
            </ul>

            <Link
              href="/rental-terms/rooms"
              className="text-blue-600 font-medium"
            >
              View Rental Terms →
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
