import Link from "next/link";

import { Badge } from "@/components/ui/badge";

export type FooterSection = {
  title: string;
  links: { label: string; href: string }[];
};

export function LandingFooter({
  sections,
  currentYear,
}: {
  sections: FooterSection[];
  currentYear: number;
}) {
  return (
    <footer className="border-t border-border/70 bg-muted/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
              Better Invoices
            </Link>
            <p className="max-w-sm text-sm text-muted-foreground">
              The modern invoicing OS for SMEs and freelancers who expect more from their tools.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <Badge variant="outline" className="border-primary/10 bg-background/80 text-primary">
                SOC2 in progress
              </Badge>
              <Badge variant="outline" className="border-primary/10 bg-background/80 text-primary">
                PCI compliant
              </Badge>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <div key={section.title} className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {section.title}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Better Invoices. Built with care for small businesses and independents.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="mailto:legal@betterinvoices.app" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="mailto:legal@betterinvoices.app" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="mailto:security@betterinvoices.app" className="transition-colors hover:text-foreground">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
