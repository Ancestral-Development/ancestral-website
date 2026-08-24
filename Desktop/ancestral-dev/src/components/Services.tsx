import { useRef, useState, useEffect } from "react";
import { Monitor, Smartphone, Server, ShieldCheck, Code2, ChevronLeft, ChevronRight, BotIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const SERVICES = [
  {
    icon: Monitor,
    title: "Desktop & Web Applications",
    description:
      "Cross-platform software with modern web frontends. Built using React, Tauri and Java. Focused on rapid startup times, minimal memory consumption, and reliability under intense usage.",
    tech: ["React", "Tauri", "Java", "MongoDB"],
  },
  {
    icon: Smartphone,
    title: "Android Applications",
    description:
      "Native mobile apps written in modern Kotlin and Jetpack Compose. Sleek interfaces, reliable backends, smooth user experience.",
    tech: ["Kotlin", "Jetpack Compose", "Material Expressive"],
  },
  {
    icon: Server,
    title: "Spigot Plugins",
    description:
      "Custom plugins for Spigot, Paper, Purpur, and Velocity network proxies. Engineered with strict asynchronous safety, low tick impact, and multi-version game compatibility.",
    tech: ["Java", "AbyssLib", "Caffeine", "MongoDB"],
  },
  {
    icon: ShieldCheck,
    title: "Licensing & Security Infrastructure",
    description:
      "Automated software licensing systems, hardware ID hashing, IP validation, and various integrations such as BuiltByBit and Discord.",
    tech: ["Scala", "MongoDB", "REST APIs", "CRMs"],
  },
  {
    icon: BotIcon,
    title: "Discord Bots",
    description:
      "Bots with a wide range of capabilities. We can tailor the bot to your needs and build it from scratch, or create it as an addon to your existing infrastructure.",
    tech: ["Discord4J", "Database Integration", "Web Panel"],
  },
];

// Duplicate list 3 times for seamless circular infinite scrolling
const SERVICES_LIST = [...SERVICES, ...SERVICES, ...SERVICES];

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Mouse Drag State
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartLeft, setScrollStartLeft] = useState(0);

  const isPausedRef = useRef(isPaused);
  const isDraggingRef = useRef(isDragging);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  // Initialize scroll position in the middle set of cards
  useEffect(() => {
    if (scrollRef.current) {
      const singleSetWidth = scrollRef.current.scrollWidth / 3;
      scrollRef.current.scrollLeft = singleSetWidth;
    }
  }, []);

  // Continuous slow circular animation loop
  useEffect(() => {
    let animationId: number;

    const animate = () => {
      if (scrollRef.current && !isPausedRef.current && !isDraggingRef.current) {
        const el = scrollRef.current;
        const singleSetWidth = el.scrollWidth / 3;

        el.scrollLeft += 0.75;

        if (el.scrollLeft >= singleSetWidth * 2) {
          el.scrollLeft -= singleSetWidth;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += singleSetWidth;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 520;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Mouse Drag Handlers for PC
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsPaused(true);
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStartLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1200);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollStartLeft - walk;
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-zinc-50/40 dark:bg-zinc-900/20 w-full overflow-hidden transition-colors">

      {/* Section Header */}
      <div className="container mx-auto max-w-6xl px-6 sm:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              What We Excel At
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Services
            </h2>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm">
            Custom software engineering for desktop, mobile, and game server infrastructure.
          </p>
        </div>
      </div>

      {/* 100% Edge-to-Edge Carousel Track Box */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={handleMouseLeave}
      >

        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={() => handleScroll("left")}
          className="absolute left-4 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-95 transition-all flex items-center justify-center cursor-pointer text-zinc-950 dark:text-white"
          aria-label="Scroll services left"
        >
          <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={() => handleScroll("right")}
          className="absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-95 transition-all flex items-center justify-center cursor-pointer text-zinc-950 dark:text-white"
          aria-label="Scroll services right"
        >
          <ChevronRight className="h-6 w-6 stroke-[2.5]" />
        </button>

        {/* Left Fog Overlay */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 via-zinc-50/70 dark:via-zinc-950/70 to-transparent z-20" />

        {/* Right Fog Overlay */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 via-zinc-50/70 dark:via-zinc-950/70 to-transparent z-20" />

        {/* Edge-to-Edge Circular Moving Track */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 1200)}
          className={`flex gap-6 overflow-x-auto no-scrollbar py-4 px-6 sm:px-12 lg:px-16 w-full touch-pan-x select-none ${
            isDragging ? "cursor-grabbing scroll-auto" : "cursor-grab scroll-auto"
          }`}
        >
          {SERVICES_LIST.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={`${item.title}-${idx}`}
                className="w-[360px] sm:w-[440px] md:w-[480px] shrink-0 border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all rounded-2xl p-8 sm:p-10 flex flex-col justify-between space-y-8 select-none"
              >
                <div className="space-y-4 pointer-events-none">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white">
                    <Icon className="h-6 w-6 text-zinc-950 dark:text-white stroke-[2]" />
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-950 dark:text-white pt-2">
                    {item.title}
                  </h3>

                  <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Calibrated tech tag with optimal bullet spacing */}
                <div className="pt-2 pointer-events-none flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold text-zinc-900 dark:text-zinc-300">
                  {item.tech.map((techItem, i) => (
                    <span key={i} className="inline-flex items-center gap-2.5">
                      <span>{techItem}</span>
                      {i < item.tech.length - 1 && (
                        <span className="text-zinc-400 dark:text-zinc-500 font-bold select-none text-[9px]">
                          •
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
