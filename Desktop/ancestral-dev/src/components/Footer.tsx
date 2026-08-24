import { ArrowUp, ArrowUpRight } from "lucide-react";
import { DISCORD_INVITE_URL, GITHUB_URL, TOS_URL, X_URL } from "@/config";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 transition-colors">
      <div className="container mx-auto max-w-5xl px-6 py-10 sm:py-14">

        {/* Main Brand & Navigation Row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-8 border-b border-zinc-100 dark:border-zinc-800/80">

          {/* Brand Column */}
          <div className="space-y-3 max-w-xs">
            <a
              href="#top"
              className="inline-flex items-center text-zinc-950 dark:text-white hover:opacity-90 transition-opacity"
            >
              <Logo className="h-7 sm:h-8 w-auto" />
            </a>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
              Custom software engineering for desktop, mobile, and secure infrastructure.
            </p>
          </div>

          {/* Links - 2-Column Mobile Grid, Horizontal Row on Desktop */}
          <div className="w-full md:w-auto">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-3 md:hidden">
              Navigation & Socials
            </span>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-8 gap-y-3.5 text-sm font-medium">
              <a
                href="#contact"
                className="hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
              <a
                href={TOS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <span>Terms of Service</span>

              </a>
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <span>Discord</span>

              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <span>GitHub</span>

              </a>
              <a
                href={X_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <span>X</span>

              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          <p>© {new Date().getFullYear()} Ancestral Development. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
