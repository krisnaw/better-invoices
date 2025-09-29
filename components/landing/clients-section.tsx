export function ClientsSection({ logos }: { logos: string[] }) {
  return (
    <section id="clients" className="border-b bg-white" aria-labelledby="clients-heading">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 sm:px-8 lg:px-12">
        <div className="space-y-3 text-center">
          <p
            id="clients-heading"
            className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground"
          >
            Trusted by product-led teams and modern studios
          </p>
          <p className="mx-auto max-w-2xl text-balance text-sm text-muted-foreground">
            Product agencies, finance leads, and fractional operators rely on Better Invoices to show real-time client activity and keep retainers paid without awkward follow-ups.
          </p>
        </div>
        <div className="grid gap-6 rounded-none border border-border/60 bg-white p-8 backdrop-blur-sm sm:grid-cols-2 md:grid-cols-3">
          {logos.map((logo) => (
            <div
              key={logo}
              className="group flex h-24 items-center justify-center rounded-none border border-border/40 bg-white text-sm font-semibold tracking-wide text-muted-foreground transition-transform duration-200 hover:-translate-y-1 hover:border-primary/30 hover:text-foreground"
            >
              <span className="opacity-80 group-hover:opacity-100">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
