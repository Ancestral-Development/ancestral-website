import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    quote:
      "Awesome product that works off the bat! Support on Discord is also extremely fast and they can answer questions within minutes.",
    name: "P. Manden",
    role: "BuiltByBit User",
  },
  {
    quote:
      "Vouch for Ancestral! They made a plugin that I have been wanting for a long time!",
    name: "ArrowTan",
    role: "Network Owner, gaming community",
  },
  {
    quote:
     "Vouch for Ancestral for high quality plugins for very affordable price, kind people, fast support.",
    name: "Night",
    role: "Network Owner, gaming community",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-border py-24 md:py-32">
      <div className="container">
        <div className="mb-16 max-w-xl">
          <p className="eyebrow mb-4">In their words</p>
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            What it's like to work with us.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {TESTIMONIALS.map(({ quote, name, role }) => (
            <Card key={name} className="border-0 bg-background">
              <CardContent className="flex h-full flex-col p-6">
                <span className="font-display text-4xl leading-none text-foreground/30">
                  "
                </span>
                <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">
                  {quote}
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-sm font-medium">{name}</p>
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
