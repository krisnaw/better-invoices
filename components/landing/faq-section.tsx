import { ChevronDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section id="faq" className="border-t border-border/60 bg-white py-24">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 sm:px-8 lg:px-12">
        <div className="space-y-4 text-center">
          <Badge variant="outline" className="mx-auto border-primary/20 bg-primary/5 text-primary">
            Frequently asked
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to go live with confidence.
          </h2>
          <p className="text-pretty text-base text-muted-foreground sm:text-lg">
            Migration, client experience, and compliance questions answered so you can roll out Better Invoices without surprises.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-none border border-border/60 bg-white p-6 shadow-[0_25px_60px_-55px_rgba(26,67,168,0.33)] transition-all open:border-primary/40 open:shadow-[0_30px_80px_-55px_rgba(26,67,168,0.38)]"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
