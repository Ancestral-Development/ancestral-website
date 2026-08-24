import { Check } from "lucide-react";

const PRINCIPLES = [
  {
    title: "Direct Developer Communication",
    description:
      "You speak directly with the developers writing and testing your code. No account managers, sales intermediaries, or redundant staff.",
  },
  {
    title: "Clean, Maintainable Code",
    description:
      "We build to your exact specification, avoiding generic boilerplates and unnecessary dependencies.",
  },
  {
    title: "Crypto & Paypal Settlement",
    description:
      "We support privacy-conscious cryptocurrency settlements (BTC, ETH, XMR, SOL) alongside standard commercial invoicing options.",
  },
  {
    title: "Post-Launch Warranty",
    description:
      "Every delivered system includes setup assistance and post-launch bug fixes according to our Terms of Service.",
  },
];

export function About() {
  return (
    <section id="standards" className="py-20 md:py-28 bg-white dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto max-w-5xl px-6">

        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            How We Work
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Our Standards
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Ancestral Development remains intentionally small. Every project is handled end-to-end by experienced programmers who understand the mechanics of the software they deliver.
          </p>
        </div>

        {/* Clean Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {PRINCIPLES.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white mt-0.5">
                <Check className="h-4 w-4 stroke-[2.5]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
