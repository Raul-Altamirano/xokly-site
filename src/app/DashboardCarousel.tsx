"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type CarouselItem = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

type DashboardCarouselProps = {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
};

export default function DashboardCarousel({
  items,
  autoPlay = true,
  interval = 4500,
}: DashboardCarouselProps) {
  const safeItems = useMemo(() => items ?? [], [items]);
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    if (!safeItems.length) return;
    const nextIndex = (index + safeItems.length) % safeItems.length;
    setCurrent(nextIndex);
  };

  const goPrev = () => goTo(current - 1);
  const goNext = () => goTo(current + 1);

  useEffect(() => {
    if (!autoPlay || safeItems.length <= 1) return;

    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % safeItems.length);
    }, interval);

    return () => clearInterval(id);
  }, [autoPlay, interval, safeItems.length]);

  if (!safeItems.length) return null;

  const activeItem = safeItems[current];

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-2xl border border-violet/20 bg-gradient-to-br from-plum to-plum-dark shadow-xl">
        <div className="relative aspect-[16/9] w-full bg-[#140B1F]">
          <Image
            src={activeItem.src}
            alt={activeItem.alt}
            fill
            priority
            className="object-contain p-3"
          />
        </div>

        {(activeItem.title || activeItem.description) && (
          <div className="absolute inset-x-0 bottom-0 bg-black/45 backdrop-blur-sm px-5 py-4 text-left">
            {activeItem.title && (
              <h3 className="text-white text-sm md:text-base font-semibold">
                {activeItem.title}
              </h3>
            )}
            {activeItem.description && (
              <p className="text-white/80 text-xs md:text-sm mt-1">
                {activeItem.description}
              </p>
            )}
          </div>
        )}

        {safeItems.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 px-3 py-2 text-white transition hover:bg-black/65"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Siguiente imagen"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 px-3 py-2 text-white transition hover:bg-black/65"
            >
              ›
            </button>
          </>
        )}
      </div>

      {safeItems.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {safeItems.map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Ir a slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                current === index
                  ? "w-8 bg-plum"
                  : "w-2.5 bg-plum/30 hover:bg-plum/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}