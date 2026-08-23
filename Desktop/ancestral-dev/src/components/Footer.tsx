import { DISCORD_INVITE_URL, GITHUB_URL, PORTFOLIO_URL } from "@/config";

const LINKS = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Standards", href: "#standards" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-white text-zinc-600">
      <div className="container mx-auto max-w-5xl px-6 py-12 md:py-16">

        {/* Main Brand & Navigation Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-100">
          <a href="#top" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Ancestral Development"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </a>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-zinc-950 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              Discord
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              GitHub
            </a>
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              Portfolio
            </a>
          </div>
        </div>

        {/* Copyright & Sub-Metadata Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          <p>© {new Date().getFullYear()} Ancestral Development. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
