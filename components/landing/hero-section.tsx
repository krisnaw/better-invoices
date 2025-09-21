import Link from "next/link";
import {ArrowRight, CalendarCheck2, CheckCircle2, FileCheck2, ShieldCheck,} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

export type Metric = {
  value: string;
  label: string;
};

export function HeroSection({ metrics }: { metrics: Metric[] }) {
  return (
    <section id="hero" className="relative overflow-hidden border-b">
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-[radial-gradient(120%_120%_at_50%_0%,rgba(37,99,235,0.18),transparent_68%)]",
          "dark:bg-[radial-gradient(110%_110%_at_50%_-10%,rgba(56,189,248,0.25),transparent_70%)]"
        )}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 py-24 sm:px-8 lg:px-12">
        <header className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-10">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
              SMEs & freelancers choose Better Invoices
            </Badge>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-4xl">
                Invoice like a modern studio—without the back-office drag.
              </h1>
              <p className="max-w-xl text-pretty text-base text-muted-foreground">
                Better Invoices gives growing SMEs and independents Linear-level polish. Send branded invoices in minutes, automate polite nudges, and let clients pay the way they prefer.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href="/register" className="gap-2">
                  Start free trial
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-muted-foreground">
                <Link href="/login" className="gap-2">
                  View sandbox
                  <CalendarCheck2 className="size-4" />
                </Link>
              </Button>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="space-y-1">
                  <dt className="text-sm font-medium text-muted-foreground">{metric.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative isolate overflow-hidden rounded-[28px] border bg-card/60 p-8 shadow-[0_40px_120px_-60px_rgba(14,116,244,0.35)] backdrop-blur-sm dark:bg-card/40">
            <div className="absolute -left-32 -top-36 size-60 rounded-full bg-primary/10 blur-[120px]" aria-hidden />
            <div className="absolute -right-24 -bottom-32 size-64 rounded-full bg-secondary/30 blur-[150px] dark:bg-secondary/10" aria-hidden />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-semibold">Better Invoices</p>
                  <p className="text-xs text-muted-foreground">Projected receipts • Q2</p>
                </div>
                <Badge className="bg-primary text-primary-foreground">Live</Badge>
              </div>
              <div className="grid gap-4">
                <div className="rounded-xl border border-border/70 bg-background/80 p-4 shadow-sm dark:bg-background/40">
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span>AI Consulting Retainer</span>
                    <span className="text-primary">$8,400</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Due Apr 12</span>
                    <span className="flex items-center gap-1">
                      <FileCheck2 className="size-3.5" />
                      Sent • awaiting payment
                    </span>
                  </div>
                </div>
                <div className="rounded-xl border border-border/70 bg-background/80 p-4 shadow-sm dark:bg-background/40">
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span>Product Design Sprint</span>
                    <span className="text-primary">$12,200</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Paid Apr 02</span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="size-3.5 text-emerald-500" />
                      Auto-reconciled
                    </span>
                  </div>
                </div>
                <div className="rounded-xl border border-dashed border-border/60 bg-muted/40 p-4 text-xs text-muted-foreground">
                  Create your next invoice in under 30 seconds.
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 text-sm shadow-sm dark:bg-background/40">
                <ShieldCheck className="size-4 text-primary" />
                <p className="text-pretty text-muted-foreground">
                  Shared client portals and automated reminders keep projects moving without awkward follow-ups.
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
