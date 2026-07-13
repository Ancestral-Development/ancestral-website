import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Monitor, Smartphone, Blocks, MessageCircleQuestionIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const PRODUCTS = [
  {
    icon: Monitor,
    category: "Desktop App",
    name: "Avalex CRM",
    description: "Business-grade CRM for various uses with numerous features and hooks.",
    price: "$74.99",
    href: "#",
  },
  {
    icon: MessageCircleQuestionIcon,
    category: "Coming Soon",
    name: "TBD",
    description: "",
    price: "N/A",
    href: "#",
  },
  {
    icon: MessageCircleQuestionIcon,
    category: "Coming Soon",
    name: "TBD",
    description: "",
    price: "N/A",
    href: "#",
  },
];

export function Products() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="products" className="border-t border-border py-24 md:py-32">
      <div className="container">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Off the shelf</p>
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Premade products, ready to deploy.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Already-built plugins and apps you can license today — no
              custom timeline required.
            </p>
          </div>


          {(canScrollLeft || canScrollRight) && (
                      <div className="flex gap-3">
                        {canScrollLeft && (
                          <button
                            onClick={() => scrollByAmount("left")}
                            aria-label="Scroll left"
                            className="flex h-11 w-11 items-center justify-center rounded-btn border border-foreground text-foreground transition-colors hover:bg-foreground hover:text-background"
                          >
                            <ArrowLeft className="h-4 w-4" />
                          </button>
                        )}
                        {canScrollRight && (
                          <button
                            onClick={() => scrollByAmount("right")}
                            aria-label="Scroll right"
                            className="flex h-11 w-11 items-center justify-center rounded-btn border border-foreground text-foreground transition-colors hover:bg-foreground hover:text-background"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    )}
        </div>

      </div>

      <div
        ref={scrollerRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:px-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))]"
      >
        {PRODUCTS.map(({ icon: Icon, category, name, description, price, href }) => (
          <Card
            key={name}
            className="w-[280px] shrink-0 snap-start md:w-[320px]"
          >
            <CardContent className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
                <Badge variant="muted">{category}</Badge>
              </div>
              <h3 className="mt-6 font-display text-xl font-medium">{name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="font-mono text-sm">{price}</span>
                <a href={href}>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Spacer so the last card isn't flush against the edge */}
        <div className="w-px shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
