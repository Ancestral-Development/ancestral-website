import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AVALEX_URL, DISCORD_INVITE_URL } from "@/config";

const PRODUCTS = [
  {
    name: "Avalex Licensing",
    category: "Licensing Platform",
    description:
      "A commercial licensing platform and customer management system. Automated hardware ID hashing, IP validation, staff permissions, and real-time telemetry.",
    price: "$8.79",
    priceLabel: "Lifetime access",
    actionLabel: "Visit Avalex",
    href: AVALEX_URL,
    external: true,
  },
  {
    name: "Recon Commons",
    category: "Developer Library",
    description:
      "A lightweight library for Minecraft server plugin development. Engineered for rapid performance and zero bloat. Available to everyone.",
    price: "Free",
    priceLabel: "Open access",
    actionLabel: "Get Library",
    href: DISCORD_INVITE_URL,
    external: true,
  },
  {
    name: "Mithril Series",
    category: "Spigot Plugins",
    description:
      "A series of high-performance Spigot plugins made to suit all server types. With our newest library, you can customize every message, material or sound to your liking.",
    price: "~$10",
    priceLabel: "Variable pricing",
    actionLabel: "Contact Us",
    href: "#contact",
    external: false,
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 md:py-28 border-t border-zinc-100 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Releases & Software
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Products
            </h2>
          </div>
          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-md font-normal leading-relaxed">
            Standalone tools, open-source libraries, and miscellaneous projects.
          </p>
        </div>

        {/* 3 Wide Cards with Balanced Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((item) => (
            <Card
              key={item.name}
              className="flex flex-col justify-between border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm transition-all rounded-2xl p-7 sm:p-8 space-y-6"
            >
              {/* Card Body */}
              <div className="space-y-4">
                {/* Top Row: Name on Left, Smaller Category Pill on Right */}
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                    {item.name}
                  </h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 shrink-0">
                    {item.category}
                  </span>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Row: Price on Left, Action Button on Right */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-zinc-100/80 dark:border-zinc-800">
                <div>
                  <span className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white block leading-tight">
                    {item.price}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium block mt-0.5">
                    {item.priceLabel}
                  </span>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="h-9 px-4 text-xs font-medium border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700/80 text-zinc-900 dark:text-zinc-100 rounded-lg gap-1.5 shadow-xs shrink-0"
                >
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                  >
                    <span>{item.actionLabel}</span>
                    {item.external && <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />}
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
