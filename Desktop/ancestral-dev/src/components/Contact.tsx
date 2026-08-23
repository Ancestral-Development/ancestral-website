import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DISCORD_INVITE_URL } from "@/config";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-zinc-100">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="max-w-2xl space-y-6">
          
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              Start a Project
            </h2>
          </div>

          <p className="text-base text-zinc-600 leading-relaxed font-normal">
            Direct developer communication, from ticket creation to delivery. Join our Discord to open a private project ticket, view our latest portfolio showcases, or chat with our team.
          </p>

          <div className="pt-2">
            <Button
              size="lg"
              asChild
              className="h-11 px-6 text-sm font-medium rounded-lg gap-2 shadow-xs"
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
