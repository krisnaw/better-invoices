import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function MidCtaSection() {
  return (
    <section
      id="cta"
      className="border-y border-border/60 bg-gradient-to-br from-primary/10 via-secondary/30 to-background py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 text-center sm:px-8">
        <div className="space-y-4">
          <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary">
            Built for SMEs & freelancers
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Keep cashflow moving without adding back-office headcount.
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base text-muted-foreground">
            Launch in minutes, sync your favorite tools, and let automations chase payments while you stay focused on client delivery.
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
              Book a walkthrough
              <Sparkles className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
