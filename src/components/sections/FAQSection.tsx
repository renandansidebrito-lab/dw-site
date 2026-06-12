import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title: string;
  subtitle: string;
  items: FaqItem[];
  dark?: boolean;
};

export default function FAQSection({
  title,
  subtitle,
  items,
  dark = false,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={dark ? "bg-slate-950 py-16 md:py-20" : "bg-white py-16 md:py-20"}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className={`inline-flex px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.24em] ${dark ? "bg-white/10 text-brandLight" : "bg-brand/10 text-brand"}`}>
            FAQ
          </span>
          <h2 className={`mt-5 text-3xl md:text-4xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>
            {title}
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${dark ? "text-slate-300" : "text-slate-600"}`}>
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all duration-300 ${
                  dark
                    ? "border-white/10 bg-white/5"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`w-full flex items-center justify-between gap-4 p-6 text-left ${dark ? "text-white" : "text-slate-900"}`}
                >
                  <span className="text-lg font-semibold">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className={`px-6 pb-6 pt-0 text-sm md:text-base leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
