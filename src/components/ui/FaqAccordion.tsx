"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import type { Faq } from "@/types";

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-sand-200 rounded-2xl bg-white ring-1 ring-sand-200">
      {items.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                {faq.question}
                <Icon
                  name="chevron-down"
                  size={20}
                  className={`shrink-0 text-blue transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              hidden={!isOpen}
              className="px-5 pb-5 text-muted"
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
