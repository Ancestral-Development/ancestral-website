import { CONTACT_EMAIL, PORTFOLIO_URL } from "@/config";

const SERVICE_LINKS = [
  { label: "Desktop Applications", href: "#services" },
  { label: "Android Apps", href: "#services" },
  { label: "Minecraft Spigot Plugins", href: "#services" },
];

const SITE_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center">
              <img src="/logo.svg" alt="Ancestral Development" className="h-8 w-auto" />
            </a>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A small software studio building desktop applications, Android
              apps, and Minecraft Spigot plugins meant to outlast their first
              release.
            </p>
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noreferrer"
              className="eyebrow mt-6 inline-block hover:text-foreground"
            >
              View portfolio →
            </a>
          </div>

          <div>
            <p className="eyebrow mb-5">Site</p>
            <ul className="space-y-3">
              {SITE_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Services</p>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>Response time: within 1 day</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 font-mono text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ancestral Development. All rights reserved.</p>
          <p>ancestraldev.com</p>
        </div>
      </div>
    </footer>
  );
}
