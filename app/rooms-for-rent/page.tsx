import roomsData from "@/data/rooms.json";
import nearbyPlaces from "@/data/nearby.json";
import { buildNearbySeoText } from "@/lib/buildNearbySeoText";
import RoomsGrid from "@/components/RoomsGrid";

const seoText = buildNearbySeoText(nearbyPlaces);

export const metadata = {
  title: "Furnished Rooms for Rent Near Main Road",
  description:
    "Well-lit furnished rooms suitable for students, located close to main road and public transport.",
};

export default function RoomsForRentPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Rooms Available for Rent
      </h1>

      <p className="sr-only">{seoText}</p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          Common Features
        </h2>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          {roomsData.commonFeatures.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </section>

      <RoomsGrid rooms={roomsData.rooms} />
    </main>
  );
}