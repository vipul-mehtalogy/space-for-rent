export const metadata = {
  title: "Room Rental Terms & Conditions",
  description: "Rental terms applicable for rooms."
};

export default function RoomRentalTerms() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-4">
        Room Rental Terms (Reference)
      </h1>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Electricity billed as per sub-meter (₹10/unit)</li>
        <li>Suitable for students; preference given to girls</li>
        <li>Room to be used strictly for residential purpose</li>
        <li>Cleanliness and maintenance responsibility of tenant</li>
        <li>Notice period as mutually agreed</li>
      </ul>
    </main>
  );
}
