import Image from "next/image";
import nearbyPlaces from "@/data/nearby.json";
import NearbyPlaces from "@/components/NearbyPlaces";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.141728508746!2d75.90189!3d22.7200584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2cc39a57301%3A0x6cc0bd0540aac68c!2sMehtalogy%20-%20197%20Goyal%20Nagar!5e0!3m2!1sen!2sin!4v1733720000000";

const DIRECTIONS_URL =
  "https://maps.app.goo.gl/eoQ64AQxh3A92ieo7";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <NearbyPlaces places={nearbyPlaces} />
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-2">
        
        {/* Left: Property Details */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Property Location
          </h3>

          <p className="text-gray-700 mb-2">
            <strong>Mehta&apos;s Utsav Shree</strong><br />
            197, Goyal Nagar<br />
            Next to Shani Mandir<br />
            Indore, Madhya Pradesh
          </p>

          <p className="text-gray-700 mb-2">
            📞 <a href="tel:+919406614197" className="text-blue-600">
              +91 9406614197
            </a>
          </p>

          <p className="text-sm text-gray-600 mb-4">
            Located close to the main road with easy access to public transport.
          </p>

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Get Directions
          </a>
        </div>

        {/* Right: Map */}
        <div className="w-full h-[250px] rounded-lg overflow-hidden border">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} Space Available for Rent
      </div>
    </footer>
  );
}
