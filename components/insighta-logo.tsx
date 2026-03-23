import { cn } from "@/lib/utils";

type InsightaLogoProps = {
  className?: string;
  showText?: boolean;
  textClassName?: string;
};

export function InsightaLogo({
  className,
  showText = true,
  textClassName,
}: InsightaLogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative size-6 flex items-center justify-center">
        <img src="/images/insighta.svg" alt="Insighta Logo" />
      </div>

      {showText && (
        <span
          className={cn(
            "text-xl font-bold text-black in-[.dark]:text-white",
            textClassName,
          )}
        >
          Insighta
        </span>
      )}
    </div>
  );
}
