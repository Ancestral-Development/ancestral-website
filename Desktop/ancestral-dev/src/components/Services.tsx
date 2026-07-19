import { Monitor, Smartphone, Blocks } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const SERVICES = [
  {
    icon: Monitor,
    title: "Desktop & Web Applications",
    description:
      "Native and cross-platform software for Windows, macOS, and Linux. Full-stack applications built to last.",
    points: ["Sleek interfaces", "Blazing performance", "Easy deployment"],
  },
  {
    icon: Smartphone,
    title: "Android Apps",
    description:
      "Leveraging Google's Material Expressive design to create stunning apps that feel smooth on every screen.",
    points: ["Native Kotlin & Java", "API & backend integration", "Ongoing support & updates"],
  },
  {
    icon: Blocks,
    title: "Minecraft Spigot Plugins",
    description:
      "Custom server plugins for Spigot, Paper, and their forks. From small quality-of-life tweaks to entire game modes.",
    points: ["Custom game mechanics", "Maximum performance", "Cross-version compatibility"],
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border py-24 md:py-32">
      <div className="container">
        <div className="mb-16 max-w-xl">
          <p className="eyebrow mb-4">What we build</p>
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Here's what we do best, but we can go beyond
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description, points }) => (
            <Card key={title} className="border-0 bg-background">
              <CardHeader>
                <Icon className="mb-6 h-6 w-6" strokeWidth={1.5} />
                <CardTitle>{title}</CardTitle>
                <CardDescription className="mt-3">{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 border-t border-border pt-4">
                  {points.map((point) => (
                    <li key={point} className="flex items-baseline gap-2 text-sm text-muted-foreground">
                      <span className="font-mono text-xs text-foreground/40">—</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
