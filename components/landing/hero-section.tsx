import Link from "next/link";
import {ArrowRight, CalendarCheck2, CheckCircle2, FileCheck2, ShieldCheck,} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

export type Metric = {
  value: string;
  label: string;
};

export function HeroSection({ metrics }: { metrics: Metric[] }) {
  return (
    <section id="hero" className="relative overflow-hidden border-b bg-white">

      <div className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 py-24 sm:px-8 lg:px-12">
        <header className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-10">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
              Invoicing that pays you faster
            </Badge>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-4xl">
                Get every invoice paid 2.8x faster without adding headcount.
              </h1>
              <div className="space-y-4 text-base text-muted-foreground">
                <p className="max-w-xl text-pretty">
                  Better Invoices automates follow-ups, shows when clients view each invoice, and keeps every payment option in one link so nothing slips through.
                </p>
                <ul className="max-w-xl list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  <li>Spin up branded invoices and proposals in under a minute.</li>
                  <li>See read receipts and status timelines before you ever have to chase.</li>
                  <li>Let clients pay by card, ACH, or transfer with automatic reconciliation.</li>
                </ul>
              </div>
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

          <div className="relative isolate overflow-hidden rounded-none border bg-white p-8 shadow-[0_40px_120px_-60px_rgba(26,67,168,0.34)] backdrop-blur-sm">
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-semibold">Better Invoices</p>
                  <p className="text-xs text-muted-foreground">Projected receipts • Q2</p>
                </div>
                <Badge className="bg-primary text-primary-foreground">Live</Badge>
              </div>
              <div className="grid gap-4">
                <div className="rounded-none border border-border/70 bg-white p-4 shadow-sm">
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
                <div className="rounded-none border border-border/70 bg-white p-4 shadow-sm">
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
                <div className="rounded-none border border-dashed border-border/60 bg-white p-4 text-xs text-muted-foreground">
                  Create your next invoice in under 30 seconds.
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-none border border-border/60 bg-white p-4 text-sm shadow-sm">
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
