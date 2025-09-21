import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="rounded-none border border-border/70 bg-gradient-to-br from-primary/20 via-secondary/25 to-accent/20 p-12 shadow-[0_45px_120px_-60px_rgba(26,67,168,0.4)] dark:from-primary/20 dark:via-secondary/30 dark:to-accent/30">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="border-primary/20 bg-background/50 text-primary">
              Ready when you are
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Send invoices your clients love—and get paid faster.
            </h2>
            <p className="text-base text-muted-foreground">
              Thousands of SMEs and freelancers have swapped spreadsheet chaos for a calm, modern billing HQ. Invite collaborators, connect payments, and go live in under an hour.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href="/register" className="gap-2">
                  Create your workspace
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:founders@betterinvoices.app" className="gap-2">
                  Talk to sales
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-full min-h-[320px] overflow-hidden rounded-none border border-border/60">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=960&q=80"
              alt="Team collaborating over invoices and laptops in a modern office"
              className="size-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 pb-6 text-left text-xs text-muted-foreground">
              <p className="text-sm font-semibold text-foreground">Better Invoices in action</p>
              <span>Photo by Unsplash</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
