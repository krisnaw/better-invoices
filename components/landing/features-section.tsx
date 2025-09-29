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
      className="relative overflow-hidden border-b border-border/60 bg-white"
    >
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
                className="group relative flex h-full flex-col gap-5 rounded-none border border-border/50 bg-white p-7 text-left transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_80px_-50px_rgba(26,67,168,0.38)]"
              >
                <div className="flex size-12 items-center justify-center rounded-none border border-primary/20 bg-primary/10 text-primary">
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
