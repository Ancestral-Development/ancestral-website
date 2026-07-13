import { Monitor, Smartphone, Blocks } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const SERVICES = [
  {
    icon: Monitor,
    title: "Desktop applications",
    description:
      "Native and cross-platform software for Windows, macOS, and Linux, built to run quietly in the background of someone's workday for years.",
    points: ["Internal tools & dashboards", "Cross-platform builds", "Legacy app modernization"],
  },
  {
    icon: Smartphone,
    title: "Android apps",
    description:
      "From first release to Play Store maintenance — apps that stay fast, stay updated, and stay out of your users' way.",
    points: ["Native Kotlin & Java", "API & backend integration", "Ongoing support & updates"],
  },
  {
    icon: Blocks,
    title: "Minecraft Spigot plugins",
    description:
      "Custom server plugins for Spigot, Paper, and their forks — from small quality-of-life tweaks to entire game modes.",
    points: ["Custom game mechanics", "Server performance tuning", "Cross-version compatibility"],
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border py-24 md:py-32">
      <div className="container">
        <div className="mb-16 max-w-xl">
          <p className="eyebrow mb-4">What we build</p>
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Three disciplines, one standard of craft.
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
