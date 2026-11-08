import {
  ArrowUpRight,
  Blocks,
  Bot,
  Braces,
  Bug,
  Code,
  Command,
  Cpu,
  Database,
  GitBranch,
  KeyRound,
  Package,
  Server,
  ShieldCheck,
  Smartphone,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrustpilotCard } from "@/components/TrustpilotCard";
import { DISCORD_INVITE_URL } from "@/config";

type Item = {
  icon: LucideIcon;
  x: number; // % from the left of its zone
  y: number; // % from the top of its zone
  size: number; // px
  rotate: number; // degrees
  tile?: boolean; // boxed like an app icon, otherwise a bare outline
};

// Desktop: scattered on the right, clear of the copy.
const RIGHT: Item[] = [
  { icon: Code, x: 68, y: 18, size: 52, rotate: -8, tile: true },
  { icon: Terminal, x: 82, y: 11, size: 36, rotate: 6 },
  { icon: GitBranch, x: 92, y: 28, size: 46, rotate: 10, tile: true },
  { icon: Braces, x: 74, y: 38, size: 34, rotate: -6 },
  { icon: Bug, x: 86, y: 48, size: 54, rotate: -10, tile: true },
  { icon: Cpu, x: 67, y: 58, size: 44, rotate: 8, tile: true },
  { icon: Command, x: 95, y: 52, size: 32, rotate: 0 },
  { icon: Database, x: 78, y: 70, size: 36, rotate: 4 },
  { icon: Smartphone, x: 93, y: 68, size: 46, rotate: 12, tile: true },
  { icon: Bot, x: 69, y: 82, size: 38, rotate: -8 },
  { icon: KeyRound, x: 85, y: 85, size: 48, rotate: 6, tile: true },
];

// Extra-wide screens only: a few on the left too.
const LEFT: Item[] = [
  { icon: Package, x: 5, y: 22, size: 46, rotate: -8, tile: true },
  { icon: ShieldCheck, x: 11, y: 46, size: 36, rotate: 6 },
  { icon: Blocks, x: 4, y: 68, size: 50, rotate: 8, tile: true },
  { icon: Server, x: 12, y: 84, size: 34, rotate: -6 },
];

// Phones and tablets: placed strictly above (top margin) and below (bottom margin)
// so that zero icons ever sit behind the text, headline, or buttons.
const MOBILE: Item[] = [
  // Top margin (above headline)
  { icon: Code, x: 86, y: 4, size: 32, rotate: -8, tile: true },
  { icon: Terminal, x: 62, y: 5, size: 26, rotate: 6 },
  { icon: Bug, x: 14, y: 5, size: 26, rotate: -6 },

  // Bottom margin (strictly below all copy, buttons, and bullets)
  { icon: GitBranch, x: 10, y: 86, size: 30, rotate: 10, tile: true },
  { icon: Braces, x: 30, y: 87, size: 24, rotate: -6 },
  { icon: Cpu, x: 50, y: 86, size: 32, rotate: 8, tile: true },
  { icon: Command, x: 72, y: 87, size: 24, rotate: 0 },
  { icon: Bot, x: 90, y: 86, size: 32, rotate: -10, tile: true },
  
  { icon: Smartphone, x: 20, y: 94, size: 30, rotate: 12, tile: true },
  { icon: Database, x: 40, y: 95, size: 26, rotate: 6 },
  { icon: KeyRound, x: 60, y: 94, size: 28, rotate: -8 },
  { icon: Package, x: 80, y: 95, size: 32, rotate: 6, tile: true },
  { icon: ShieldCheck, x: 95, y: 93, size: 28, rotate: -6, tile: true },
  { icon: Server, x: 5, y: 95, size: 28, rotate: -8, tile: true },
];

function Scatter({ items, className }: { items: Item[]; className: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`}>
      {items.map(({ icon: Icon, x, y, size, rotate, tile }, i) => (
        <div
          key={i}
          className={
            tile
              ? "absolute flex items-center justify-center rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/90 dark:bg-zinc-900/90 text-zinc-600 dark:text-zinc-300 shadow-xs"
              : "absolute flex items-center justify-center text-zinc-300 dark:text-zinc-700"
          }
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: size,
            height: size,
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
          }}
        >
          <Icon style={{ width: size * 0.5, height: size * 0.5 }} strokeWidth={tile ? 1.75 : 1.5} />
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-16 pb-28 sm:pt-24 sm:pb-32 md:pt-32 lg:pb-32 bg-white dark:bg-zinc-950 transition-colors"
    >
      {/* Phones and tablets: strictly top and bottom, completely clear of all copy */}
      <Scatter items={MOBILE} className="inset-0 opacity-60 dark:opacity-50 lg:hidden" />

      {/* Desktop: scattered on the right, clear of the copy */}
      <Scatter items={RIGHT} className="hidden lg:block inset-y-0 right-0 w-full" />

      {/* Extra-wide screens: a few more on the left */}
      <Scatter items={LEFT} className="hidden 2xl:block inset-y-0 left-0 w-[16%]" />

      <div className="relative z-10 container mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          <div className="max-w-3xl lg:max-w-xl space-y-5 sm:space-y-6 lg:-translate-x-6 xl:-translate-x-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-zinc-950 dark:bg-white opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-950 dark:bg-white" />
              </span>
              <span>Commissions Open</span>
            </div>

            <h1 className="text-[2rem] leading-[1.12] sm:text-5xl md:text-6xl lg:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white text-balance">
              Software engineered for precision and reliability.
            </h1>

            <p className="max-w-xl text-base sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              We design and build custom desktop tools, native Android applications, Discord bots, and secure licensing infrastructure.
            </p>

            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
              <Button size="lg" asChild className="w-full sm:w-auto h-12 sm:h-11 px-6 text-sm font-medium rounded-lg shadow-xs">
                <a href="#products">Explore Products</a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto h-12 sm:h-11 px-6 text-sm font-medium rounded-lg border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
              >
                <a href={DISCORD_INVITE_URL} target="_blank" rel="noreferrer" className="gap-2">
                  <span>Join Discord</span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-400" />
                </a>
              </Button>
            </div>

            <div className="pt-3 sm:pt-6 flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-2.5 sm:gap-x-5 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
              <span>Affordability</span>
              <span className="text-zinc-950 dark:text-zinc-100 font-bold select-none">•</span>
              <span>Rapid Delivery</span>
              <span className="text-zinc-950 dark:text-zinc-100 font-bold select-none">•</span>
              <span>Crypto & Paypal Payments</span>
            </div>
          </div>

          {/* Trustpilot Card: Below on mobile, Right on desktop */}
          <div className="w-full sm:max-w-lg lg:w-[420px] xl:w-[460px] shrink-0 lg:translate-x-6 xl:translate-x-10 lg:translate-y-2 xl:translate-y-3">
            <TrustpilotCard />
          </div>
        </div>
      </div>
    </section>
  );
}
