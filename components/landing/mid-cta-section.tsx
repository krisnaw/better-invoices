import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function MidCtaSection() {
  return (
    <section id="cta" className="border-y border-border/60 bg-white py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 text-center sm:px-8">
        <div className="space-y-4">
          <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary">
            Launch-ready in one afternoon
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Stand up a polished billing HQ this week.
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base text-muted-foreground">
            Import your catalog, invite teammates, and let our automation playbooks handle polite reminders, overdue escalations, and payment receipts from day one.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/register" className="gap-2">
              Start free trial
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="mailto:founders@betterinvoices.app" className="gap-2">
              Book a 10-min tour
              <Sparkles className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
