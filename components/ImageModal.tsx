"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight} from "lucide-react";

export default function ImageModal({
    images,
    currentIndex,
    setCurrentIndex,
    onClose,
}: any) {
    const prev = () =>
        setCurrentIndex(
            (currentIndex -1 + images.length) % images.length);
    const next = () =>
        setCurrentIndex(
            (currentIndex + 1)% images.length
        );

    return(
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white"
            >
                <X size={30}/>
            </button>

            <button

            onClick = {prev}
            className="absolute left-4 text-white"
            >
                <ChevronLeft size={40}/>
            </button>

            <Image

                src={images[currentIndex]}
                alt = "Room image"
                width={1000}
                height={800}
                className="max-h-[90vh] w-auto rounded"/>

            <button
                onClick={next}
                className="absolute right-4 text-white"
                >
                    <ChevronRight size = {40}/>
                </button>
        </div>
    );
        
}