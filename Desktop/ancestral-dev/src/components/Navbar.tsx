import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

function DiscordIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Standards", href: "#standards" },
  { label: "Reviews", href: "#reviews" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto flex h-18 sm:h-20 max-w-5xl items-center justify-between px-6">

        {/* Brand Logo */}
        <a href="#top" className="flex items-center">
          <img
            src="/logo.svg"
            alt="Ancestral Development"
            className="h-9 sm:h-9.5 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation Links & Action */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" asChild className="h-10 px-4 text-xs font-medium rounded-lg shadow-xs gap-2">
            <a href="#contact" className="flex items-center gap-2">
              <DiscordIcon className="h-4 w-4" />
              <span>Contact Us</span>
            </a>
          </Button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="p-2 md:hidden text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-950"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-100">
            <Button size="sm" asChild className="w-full justify-center h-10 text-sm font-medium rounded-lg gap-2">
              <a href="#contact" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2">
                <DiscordIcon className="h-4 w-4" />
                <span>Contact Us</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
