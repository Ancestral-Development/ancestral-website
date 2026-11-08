import { ArrowUpRight, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TRUSTPILOT_URL } from "@/config";

function TrustpilotIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M12 1.5L15.24 8.07L22.5 9.13L17.25 14.25L18.49 21.48L12 18.07L5.51 21.48L6.75 14.25L1.5 9.13L8.76 8.07L12 1.5Z"
        fill="#00B67A"
      />
      <path
        d="M18.49 21.48L12 18.07V1.5L15.24 8.07L22.5 9.13L17.25 14.25L18.49 21.48Z"
        fill="#005128"
        opacity="0.25"
      />
    </svg>
  );
}

interface TrustpilotCardProps {
  score?: string;
  ratingLabel?: string;
  reviewCountText?: string;
  className?: string;
}

export function TrustpilotCard({
  score = "5.0",
  ratingLabel = "Excellent",
  reviewCountText = "Based on client reviews",
  className = "",
}: TrustpilotCardProps) {
  return (
    <Card
      className={`group relative border border-zinc-200/90 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-xs p-7 sm:p-8 md:p-9 pb-10 sm:pb-12 md:pb-14 rounded-3xl shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg transition-all ${className}`}
    >
      <a
        href={TRUSTPILOT_URL}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col justify-between space-y-7 sm:space-y-8 cursor-pointer"
        aria-label="View Ancestral Development reviews on Trustpilot"
      >
        {/* Top Header: Trustpilot Brand & External Link Arrow */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <TrustpilotIcon className="h-7 w-7" />
            <span className="font-bold text-lg tracking-tight text-zinc-950 dark:text-white">
              Trustpilot
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
            <span>See reviews</span>
            <ArrowUpRight className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
          </span>
        </div>

        {/* 5 Iconic Green Star Blocks */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-md bg-[#00B67A] text-white shadow-xs"
              >
                <Star className="h-5 w-5 sm:h-5.5 sm:w-5.5 fill-white text-white" strokeWidth={0} />
              </div>
            ))}
          </div>

          <div className="flex items-baseline gap-3 pt-1">
            <span className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white">
              {ratingLabel}
            </span>
            <span className="text-sm sm:text-base font-semibold text-zinc-500 dark:text-zinc-400">
              {score} out of 5
            </span>
          </div>
        </div>

        {/* Footnote / Review count */}
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium border-t border-zinc-100 dark:border-zinc-800/80 pt-5 sm:pt-6 flex items-center justify-between">
          <span>{reviewCountText}</span>
          <span className="text-xs sm:text-sm text-[#00B67A] font-semibold">Trusted Company</span>
        </p>
      </a>
    </Card>
  );
}
