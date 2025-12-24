import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rooms & Shops Available for Rent Near Main Road</title>
        <meta
          name="description"
          content="Furnished rooms and ground-floor shops available for rent near main road with excellent connectivity."
        />
      </Head>

      <main className="min-h-screen px-6 py-10 max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Rooms and Shops Available for Rent
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comfortable living spaces and prime commercial shops located close to
            the main road with easy access to public transport.
          </p>
        </section>

        {/* Category Selection */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Rooms Card */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Rooms for Rent</h2>
            <p className="text-gray-600 mb-4">
              Furnished rooms suitable for students, offering a safe and
              comfortable living environment.
            </p>
            <Link
              href="space-for-rent/rooms-for-rent"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded"
            >
              View Rooms
            </Link>
          </div>

          {/* Shops Card */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Shops for Rent</h2>
            <p className="text-gray-600 mb-4">
              Ground-floor commercial shops in a prime location with good
              footfall.
            </p>
            <Link
              href="/shops-for-rent"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded"
            >
              View Shops
            </Link>
          </div>
        </section>

        {/* Location Highlights */}
        <section className="text-center">
          <h3 className="text-lg font-semibold mb-3">Location Highlights</h3>
          <ul className="text-gray-600 space-y-1">
            <li>• Very close to main road</li>
            <li>• Public transport easily accessible</li>
            <li>• Peaceful residential surroundings</li>
          </ul>
        </section>
      </main>
    </>
  );
}
