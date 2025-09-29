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
      <div className="rounded-none border border-border/70 bg-white p-12 shadow-[0_45px_120px_-60px_rgba(26,67,168,0.4)]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="border-primary/20 bg-white text-primary">
              Start seeing faster payments
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to make “waiting on payment” a thing of the past?
            </h2>
            <p className="text-base text-muted-foreground">
              Finance teams, founders, and agencies run Better Invoices to replace manual chasing with automated, on-brand workflows. Spin up your workspace, invite collaborators, and watch your first invoices get paid in days—not weeks.
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
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
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
