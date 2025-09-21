import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type Review = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarSeed?: number;
};

export function ReviewsSection({ reviews }: { reviews: Review[] }) {
  return (
    <section
      id="reviews"
      className="border-b border-border/60 bg-[linear-gradient(180deg,rgba(14,116,244,0.08),rgba(255,255,255,0))] py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:px-12">
        <div className="space-y-4 text-center">
          <Badge variant="outline" className="mx-auto border-primary/20 bg-primary/5 text-primary">
            Stories from the field
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Lean teams invoice faster and get paid sooner.
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">
            Hear how freelancers, studios, and SMEs use Better Invoices to automate follow-ups, stay organized, and keep cashflow predictable.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="flex h-full flex-col gap-6 rounded-none border border-border/40 bg-card/70 p-6 text-left shadow-[0_25px_80px_-65px_rgba(14,116,244,0.35)] transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-primary/40 dark:bg-card/40"
            >
              <p className="text-sm text-muted-foreground">“{review.quote}”</p>
              <div className="flex items-center gap-3">
                <Avatar className="size-12 border border-border/60 bg-primary/10">
                  <AvatarImage
                    src={`https://i.pravatar.cc/150?img=${review.avatarSeed ?? index + 12}`}
                    alt={`${review.name} avatar`}
                  />
                  <AvatarFallback className="bg-primary/15 text-sm font-semibold text-primary">
                    {review.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
