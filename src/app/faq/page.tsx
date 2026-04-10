"use client";

import { useState, useEffect } from "react";
import { LegalPage } from "@/components/UI";
import { getFaqItems } from "@/lib/services/api";

export default function FAQ() {
  const [items, setItems] = useState<any[]>([]);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    getFaqItems().then(setItems);
  }, []);

  return (
    <LegalPage title="Preguntas Frecuentes">
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`${
              openIdx === i ? 'bg-tint' : 'bg-white'
            } border border-tint rounded-[10px] overflow-hidden transition-colors`}
          >
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full px-5 py-4 bg-transparent border-none cursor-pointer flex justify-between items-center text-left text-[15px] font-semibold text-plum"
            >
              {item.question}
              <span
                className={`text-lg text-violet transition-transform ${
                  openIdx === i ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            {openIdx === i && (
              <div className="px-5 pb-4 text-sm leading-[1.7] text-body">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </LegalPage>
  );
}