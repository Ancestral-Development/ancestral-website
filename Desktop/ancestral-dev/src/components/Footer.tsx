import { DISCORD_INVITE_URL, GITHUB_URL, TOS_URL, X_URL } from "@/config";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 transition-colors">
      <div className="container mx-auto max-w-5xl px-6 py-12 md:py-16">

        {/* Main Brand & Navigation Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-100 dark:border-zinc-800">
          <a href="#top" className="flex items-center text-zinc-950 dark:text-white hover:opacity-90 transition-opacity">
            <Logo className="h-6 sm:h-9 w-auto" />
          </a>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
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
              className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              Discord
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={X_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              X
            </a>
          </div>
        </div>

        {/* Copyright & Sub-Metadata Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          <p>© {new Date().getFullYear()} Ancestral Development. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
