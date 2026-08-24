import { Card } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    quote:
      "Awesome product that works off the bat! Support on Discord is also extremely fast and they can answer questions within minutes.",
    author: "P. Manden",
    role: "BuiltByBit User",
  },
  {
    quote:
      "Vouch for Ancestral! They made a plugin that I have been wanting for a long time!",
    author: "ArrowTan",
    role: "Network Owner",
  },
  {
    quote:
      "Vouch for Ancestral for high quality plugins for very affordable price, kind people, fast support.",
    author: "Night",
    role: "Network Owner",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-zinc-50/40 dark:bg-zinc-900/20 transition-colors">
      <div className="container mx-auto max-w-5xl px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Client Feedback
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Unfiltered Reviews
            </h2>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm">
            Don't take our word for it, here's what our clients have to say.
          </p>
        </div>

        {/* 3-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <Card
              key={idx}
              className="flex flex-col justify-between border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm transition-all rounded-xl p-6 sm:p-8 space-y-6"
            >
              <p className="text-xs sm:text-base text-zinc-800 dark:text-zinc-200 leading-relaxed italic">
                "{item.quote}"
              </p>

              <div className="flex flex-col items-start pt-2">
                <span className="text-sm font-bold text-zinc-950 dark:text-white">
                  {item.author}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">
                  {item.role}
                </span>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
