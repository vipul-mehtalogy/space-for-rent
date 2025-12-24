"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { buildWhatsAppLink } from "@/lib/whatsapp";

function getMessageByPath(pathname: string) {
  if (pathname.startsWith("/rooms-for-rent")) {
    return "Hello, I would like to know more details about the rooms available for rent.";
  }

  if (pathname.startsWith("/shops-for-rent")) {
    return "Hello, I would like to know more details about the shops available for rent.";
  }

  if (pathname.startsWith("/rental-terms/rooms")) {
    return "Hello, I have a few questions regarding the room rental terms.";
  }

  if (pathname.startsWith("/rental-terms/shops")) {
    return "Hello, I have a few questions regarding the shop rental terms.";
  }

  return "Hello, I would like to know more details about the available rooms and shops for rent.";
}

export default function WhatsAppFloating() {
  const pathname = usePathname();
  const message = getMessageByPath(pathname);
  const whatsappLink = buildWhatsAppLink(message);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/images/whatsapp.svg"
        alt="WhatsApp"
        width={24}
        height={24}
      />
      <span className="hidden md:inline text-sm font-medium">
        Click to chat & know more details
      </span>
    </a>
  );
}
