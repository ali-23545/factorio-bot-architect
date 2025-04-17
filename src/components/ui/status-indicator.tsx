
import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "online" | "offline" | "training" | "error";
  label?: string;
  className?: string;
}

export function StatusIndicator({ 
  status, 
  label, 
  className 
}: StatusIndicatorProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn(
        "h-2 w-2 rounded-full",
        status === "online" && "bg-factorio-circuit animate-pulse",
        status === "offline" && "bg-muted-foreground",
        status === "training" && "bg-factorio-accent animate-pulse",
        status === "error" && "bg-factorio-red animate-pulse"
      )} />
      {label && (
        <span className="text-xs text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  );
}
