import { MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, DISCORD_INVITE_URL } from "@/config";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="container grid gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <p className="eyebrow mb-4">Get in touch</p>
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Tell us what you're building.
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
            Drop into our Discord and tell us about the project — that's
            where we're most responsive.
          </p>
          <div className="mt-10 space-y-2 font-mono text-sm">
            <p className="text-muted-foreground">Email</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center border border-border p-8 md:p-10">
          <MessageCircle className="h-8 w-8" strokeWidth={1.5} />
          <h3 className="mt-6 font-display text-2xl font-medium">
            Join the Ancestral Development Discord
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Chat directly with the team, share what you're building, and get
            a faster response than email — most questions get answered same-day.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Users className="h-4 w-4" strokeWidth={1.5} />
              Active support channel for existing clients
            </li>
          </ul>
          <a href={DISCORD_INVITE_URL} target="_blank" rel="noreferrer" className="mt-8">
            <Button size="lg" className="w-full sm:w-auto">
              Join Discord
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
