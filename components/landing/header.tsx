import Link from "next/link";

import {Button} from "@/components/ui/button";

export type NavLink = {
  label: string;
  href: string;
};

export function LandingHeader({ links }: { links: NavLink[] }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-8 lg:px-12">
        <Link href="/" className="font-semibold tracking-tight text-foreground">
          Better Invoices
        </Link>
        {/*<nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">*/}
        {/*  {links.map((link) => (*/}
        {/*    <Link*/}
        {/*      key={link.label}*/}
        {/*      href={link.href}*/}
        {/*      className="transition-colors hover:text-foreground"*/}
        {/*    >*/}
        {/*      {link.label}*/}
        {/*    </Link>*/}
        {/*  ))}*/}
        {/*</nav>*/}
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost">
            <Link href="/login">Log in</Link>
          </Button>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <Button asChild size="sm" variant="ghost">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/register">Get started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
