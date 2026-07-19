import { Button } from "@/components/ui/button";
import { PORTFOLIO_URL, HERO_IMAGE_SRC, HERO_IMAGE_OPACITY } from "@/config";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
      <img
        src={HERO_IMAGE_SRC}
        alt=""
        style={{ opacity: HERO_IMAGE_OPACITY }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="container relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow mb-6">Ancestral Development</p>
          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            Building the <span className="italic underline">Future</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Small software studio building next-generation tools for businesses and individuals. Providing custom solutions and premade products.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact">
              <Button size="lg">Contact us</Button>
            </a>
            <a href={PORTFOLIO_URL} target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg">
                View portfolio
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
