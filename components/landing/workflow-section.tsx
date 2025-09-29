import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export type WorkflowStep = {
  title: string;
  description: string;
};

export function WorkflowSection({
  steps,
  highlights,
}: {
  steps: WorkflowStep[];
  highlights: string[];
}) {
  return (
    <section id="workflow" className="border-y bg-white py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary">
            How teams use Better Invoices
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            A repeatable path from draft to paid in three steps.
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground">
            Give every teammate a playbook. Draft faster, share a single source of truth with clients, and reconcile payments automatically—no follow-up spreadsheets required.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
          <ul className="space-y-8">
            {steps.map((item, index) => (
              <li key={item.title} className="flex gap-5">
                <span className="mt-1 flex size-8 items-center justify-center rounded-none border border-border/70 bg-white text-sm font-semibold">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div className="space-y-2">
                  <p className="text-lg font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="grid gap-4 rounded-none border border-border/60 bg-white p-8 shadow-[0_35px_80px_-60px_rgba(26,67,168,0.33)] backdrop-blur-sm">
            <p className="text-sm font-semibold text-muted-foreground">What teams love</p>
            <div className="grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-none border border-border/50 bg-white p-4 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-none border border-primary/20 bg-primary/10 p-5">
              <ShieldCheck className="size-5 text-primary" />
              <div className="space-y-1 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Security as a foundation</p>
                <p>Single sign-on, approval chains, and detailed logs keep compliance teams confident.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
