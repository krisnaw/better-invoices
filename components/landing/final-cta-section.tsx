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
      <div className="rounded-none border border-border/70 bg-gradient-to-br from-primary/15 via-secondary/25 to-accent/20 p-12 shadow-[0_45px_120px_-60px_rgba(14,116,244,0.45)] dark:from-primary/20 dark:via-secondary/30 dark:to-accent/30">
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
          <div className="space-y-4 rounded-none border border-border/60 bg-background/80 p-8 text-sm shadow-[0_25px_80px_-60px_rgba(14,116,244,0.35)] backdrop-blur-sm dark:bg-background/40">
            <div className="flex items-center gap-3 border-b border-border/60 pb-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Sparkles className="size-5" />
              </div>
              <div>
                <p className="font-medium">Concierge onboarding</p>
                <p className="text-xs text-muted-foreground">
                  We migrate your templates, client list, and historical invoices for free.
                </p>
              </div>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />
                No credit card required
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />
                SOC2 Type II in progress
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />
                Multi-language client portal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
