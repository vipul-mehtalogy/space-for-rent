"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageModal from "./ImageModal";

export default function RoomsGrid({ rooms }: any) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <section className="grid gap-6 md:grid-cols-2">
        {[...rooms]
          .sort((a, b) => Number(b.available) - Number(a.available))
          .map((room) => {
            const isAvailable = room.available;

            return (
              <div
                key={room.id}
                className={`border dark:border-gray-600 rounded-lg p-5 relative dark:bg-gray-800 ${
                  !isAvailable ? "opacity-70" : ""
                }`}
              >
                <span
                  className={`absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded ${
                    isAvailable
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {isAvailable ? "Available" : "Occupied"}
                </span>

                <h3 className="text-lg font-semibold mb-2">
                  {room.name}
                </h3>

                <div
                  className={`mb-4 grid gap-2 ${
                    room.images.length === 1
                      ? "grid-cols-1"
                      : "grid-cols-2"
                  }`}
                >
                  {room.images.map((imgSrc: string, i: number) => (
                    <Image
                      key={i}
                      src={`/space-for-rent${imgSrc}`}
                      alt={`${room.name} image ${i + 1}`}
                      width={600}
                      height={400}
                      className="rounded w-full h-[280px] object-cover cursor-pointer hover:opacity-90 transition"
                      onClick={() => {
                        setSelectedImages(
                          room.images.map(
                            (img: string) =>
                              `/space-for-rent${img}`
                          )
                        );
                        setCurrentImage(i);
                        setModalOpen(true);
                      }}
                    />
                  ))}
                </div>

                <ul className="text-gray-600 dark:text-gray-300 mb-4">
                  {room.amenities.map((a: string, i: number) => (
                    <li key={i}>• {a}</li>
                  ))}
                </ul>

                {isAvailable ? (
                  <Link
                    href="/rental-terms/rooms"
                    className="text-blue-600 font-medium"
                  >
                    View Rental Terms →
                  </Link>
                ) : (
                  <span className="text-gray-500 dark:text-gray-400 font-medium">
                    Currently Occupied
                  </span>
                )}
              </div>
            );
          })}
      </section>

      {modalOpen && (
        <ImageModal
          images={selectedImages}
          currentIndex={currentImage}
          setCurrentIndex={setCurrentImage}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}