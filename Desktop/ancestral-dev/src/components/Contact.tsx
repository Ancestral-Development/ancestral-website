import {
  ArrowUpRight,
  Bot,
  Braces,
  Bug,
  Code,
  Command,
  Cpu,
  Database,
  GitBranch,
  KeyRound,
  LayoutGrid,
  MessagesSquare,
  Terminal,
  Ticket,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DISCORD_INVITE_URL } from "@/config";

type Item = {
  icon: LucideIcon;
  x: number; // % from the left
  y: number; // % from the top
  size: number; // px
  rotate: number;
  tile?: boolean;
};

// Same icon style as the hero, so the two sections read as one page.
const DESKTOP: Item[] = [
  { icon: Terminal, x: 80, y: 14, size: 36, rotate: 6 },
  { icon: Code, x: 68, y: 26, size: 52, rotate: -8, tile: true },
  { icon: GitBranch, x: 92, y: 32, size: 46, rotate: 10, tile: true },
  { icon: Braces, x: 76, y: 48, size: 34, rotate: -6 },
  { icon: Bug, x: 88, y: 58, size: 54, rotate: -10, tile: true },
  { icon: Cpu, x: 68, y: 68, size: 44, rotate: 8, tile: true },
  { icon: Command, x: 96, y: 80, size: 32, rotate: 0 },
  { icon: KeyRound, x: 80, y: 86, size: 46, rotate: 6, tile: true },
];

// Phones and tablets: placed strictly above (top margin) and below (bottom margin)
// so that zero icons ever sit behind the text, headline, or real feature icons.
const MOBILE: Item[] = [
  // Top margin (above badge and heading)
  { icon: Bug, x: 12, y: 5, size: 26, rotate: -6 },
  { icon: Terminal, x: 58, y: 6, size: 26, rotate: 6 },
  { icon: Code, x: 88, y: 5, size: 34, rotate: -8, tile: true },

  // Bottom margin (strictly below all copy, real icons, and button)
  { icon: GitBranch, x: 10, y: 88, size: 30, rotate: 10, tile: true },
  { icon: Braces, x: 30, y: 89, size: 24, rotate: -6 },
  { icon: Cpu, x: 50, y: 88, size: 32, rotate: 8, tile: true },
  { icon: Database, x: 70, y: 89, size: 26, rotate: 6 },
  { icon: Bot, x: 90, y: 88, size: 32, rotate: -10, tile: true },
  { icon: Command, x: 38, y: 95, size: 26, rotate: 0 },
  { icon: KeyRound, x: 72, y: 95, size: 30, rotate: 6, tile: true },
];

function Scatter({ items, className }: { items: Item[]; className: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`}>
      {items.map(({ icon: Icon, x, y, size, rotate, tile }, i) => (
        <div
          key={i}
          className={
            tile
              ? "absolute flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs"
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

const POINTS = [
  { icon: Ticket, title: "Private project ticket", text: "Open a ticket in Discord and start your project with our developers." },
  { icon: LayoutGrid, title: "Portfolio showcases", text: "Browse our latest work in the server." },
  { icon: MessagesSquare, title: "Talk to the team", text: "Direct developer communication, from ticket creation to delivery." },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-16 pb-24 sm:py-20 md:py-28 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800/80 transition-colors"
    >
      <Scatter items={MOBILE} className="inset-0 opacity-60 lg:hidden" />
      <Scatter items={DESKTOP} className="hidden lg:block inset-0" />

      <div className="relative container mx-auto max-w-5xl px-5 sm:px-6">
        <div className="max-w-3xl lg:max-w-xl space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-zinc-950 dark:bg-white opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-950 dark:bg-white" />
            </span>
            <span>Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white text-balance">
            Start a Project
          </h2>

          <p className="max-w-xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Join our Discord to open a private project ticket, view our latest portfolio showcases, or chat with our team.
          </p>

          <ul className="space-y-4 pt-1">
            {POINTS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-950 dark:text-white">{title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto h-12 sm:h-11 px-6 text-sm font-medium rounded-lg gap-2 shadow-xs"
            >
              <a href={DISCORD_INVITE_URL} target="_blank" rel="noreferrer">
                <span>Join Discord Server</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
