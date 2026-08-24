import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DISCORD_INVITE_URL } from "@/config";

export function Hero() {
  return (
    <section id="top" className="py-20 md:py-28 bg-white dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300">
            <span>Software Development Team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
            Software engineered for precision and reliability.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            We design and build custom desktop tools, native Android applications, Discord bots, and secure licensing infrastructure.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild className="h-11 px-6 text-sm font-medium rounded-lg shadow-xs">
              <a href="#products">Explore Products</a>
            </Button>

            <Button variant="outline" size="lg" asChild className="h-11 px-6 text-sm font-medium rounded-lg border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
              <a href={DISCORD_INVITE_URL} target="_blank" rel="noreferrer" className="gap-2">
                <span>Join Discord</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-400" />
              </a>
            </Button>
          </div>

          <div className="pt-6 flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-6 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
            <span>Affordability</span>
            <span className="text-zinc-950 dark:text-zinc-100 font-bold">•</span>
            <span>Rapid Delivery</span>
            <span className="text-zinc-950 dark:text-zinc-100 font-bold">•</span>
            <span>Crypto & Paypal Payments</span>
          </div>
        </div>
      </div>
    </section>
  );
}
