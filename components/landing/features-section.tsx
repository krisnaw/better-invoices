import { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeaturesSection({ features }: { features: Feature[] }) {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-b border-border/60 bg-[linear-gradient(180deg,rgba(37,99,235,0.08)_0%,rgba(255,255,255,0)_85%)]"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-48 h-48 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(56,189,248,0.25),transparent)]" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(14,116,244,0.16)_1px,transparent_0)] [background-size:36px_36px] opacity-50"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 text-center">
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="mx-auto border-primary/20 bg-primary/5 text-primary"
            >
              Crafted for lean teams
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              A linear-quality experience for every invoice touchpoint.
            </h2>
            <p className="mx-auto max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">
              Ditch spreadsheets and stitched-together tools. Better Invoices gives SMEs and solo operators the same polished workflows big companies enjoy—without the overhead.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative flex h-full flex-col gap-5 rounded-3xl border border-border/50 bg-card/70 p-7 text-left transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_80px_-50px_rgba(14,116,244,0.4)] dark:bg-card/40"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <feature.icon className="size-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
