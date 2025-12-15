"use client";
import Image from "next/image";

export default function PopupImageModal({
  src,
  alt = "popup image",
  onClose,
}: { src: string; alt?: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-3xl " onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg"
          priority
        />
        <button
          className="absolute top-2 right-2 rounded-full bg-white/80 px-3 py-1 text-black hover:bg-white"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
