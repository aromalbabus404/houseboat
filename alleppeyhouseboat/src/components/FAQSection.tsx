"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ } from "@/lib/mockData";

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[50px] bg-bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-3">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-dark font-bold leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-sm md:text-base text-charcoal/70">
            Everything you need to know about booking, meals, boarding, and safety protocols.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-primary/5 shadow-sm overflow-hidden transition-all duration-200"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 font-sans focus:outline-none min-h-[44px] cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base md:text-lg font-bold text-primary-dark select-none">
                    {faq.question}
                  </span>
                  <div
                    className="p-2 rounded-full bg-primary/5 text-primary shrink-0 transition-colors duration-200 group-hover:bg-primary/10"
                  >
                    {isOpen ? <Minus className="w-4 h-4" strokeWidth={3.5} /> : <Plus className="w-4 h-4" strokeWidth={3.5} />}
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 md:px-7 md:pb-7 pt-0 border-t border-primary/5">
                        <p className="font-sans text-sm md:text-base text-charcoal/75 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
