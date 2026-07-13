import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItem: string | null;
  setOpenItem: (id: string | null) => void;
}
const AccordionContext = React.createContext<AccordionContextValue | null>(null);

export function Accordion({ children, className }: { children: React.ReactNode; className?: string }) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);
  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border-b border-border", className)} data-value={value}>
      {children}
    </div>
  );
}

export function AccordionTrigger({
  children,
  value,
  className,
}: {
  children: React.ReactNode;
  value: string;
  className?: string;
}) {
  const ctx = React.useContext(AccordionContext)!;
  const isOpen = ctx.openItem === value;
  return (
    <button
      onClick={() => ctx.setOpenItem(isOpen ? null : value)}
      className={cn(
        "flex w-full items-center justify-between py-5 text-left font-display text-lg font-medium",
        className
      )}
      aria-expanded={isOpen}
    >
      {children}
      <ChevronDown
        className={cn("h-4 w-4 shrink-0 transition-transform duration-300", isOpen && "rotate-180")}
      />
    </button>
  );
}

export function AccordionContent({
  children,
  value,
  className,
}: {
  children: React.ReactNode;
  value: string;
  className?: string;
}) {
  const ctx = React.useContext(AccordionContext)!;
  const isOpen = ctx.openItem === value;
  return (
    <div
      className={cn(
        "grid overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
      )}
    >
      <div className={cn("min-h-0 text-sm text-muted-foreground leading-relaxed", className)}>
        {children}
      </div>
    </div>
  );
}
