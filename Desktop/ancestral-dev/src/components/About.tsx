import { CheckCircle2 } from "lucide-react";

const ADVANTAGES = [
  "Direct access to the two or three people actually writing your code — no account managers relaying messages.",
  "Fixed-scope quotes before work starts, so there are no surprise invoices halfway through.",
  "Cross-platform range: desktop, Android, and Minecraft server software under one roof.",
  "Documentation and clean handoffs by default, so another developer can pick up the project without you.",
  "Post-launch support included for every project, not sold back to you as a separate contract.",
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="container grid gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <p className="eyebrow mb-4">About us</p>
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Quality. Speed. Innovation.
          </h2>
          <div className="mt-8 space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              At Ancestral Development, we believe in finishing your project in a timely manner without compromising performance or usability. We ensure the product is visually pleasing and easy to use — optimized, smooth, and bug-free.
            </p>
            <p className="leading-relaxed">
              We're a small studio by choice. Every project gets the same
              two or three people from the first call to the last release.
            </p>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-6">Why teams work with us</p>
          <ul className="space-y-5">
            {ADVANTAGES.map((advantage) => (
              <li key={advantage} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.5} />
                <span className="leading-relaxed text-muted-foreground">{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
