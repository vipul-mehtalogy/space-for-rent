export default function GoogleMapEmbed() {
  return (
    <section className="mt-14">
      <h2 className="text-xl font-semibold mb-4">
        Property Location
      </h2>

      <div className="w-full h-[350px] rounded-lg overflow-hidden border">
        <iframe
          src="https://www.google.com/maps/embed?pb=REPLACE_WITH_YOUR_EMBED_URL"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
          allowFullScreen
        ></iframe>
      </div>

      <p className="text-sm text-gray-600 mt-3">
        Located close to the main road with easy access to public transport.
      </p>
    </section>
  );
}
