
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  variant?: "default" | "active" | "inactive";
  className?: string;
  children: React.ReactNode;
}

export function ModuleCard({
  title,
  description,
  icon,
  variant = "default",
  className,
  children,
}: ModuleCardProps) {
  return (
    <Card 
      className={cn(
        "transition-all duration-200", 
        variant === "active" && "border-factorio-light shadow-md shadow-factorio-light/20",
        variant === "inactive" && "opacity-70",
        className
      )}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            {icon && <span className="text-factorio-light">{icon}</span>}
            {title}
          </CardTitle>
        </div>
        {description && (
          <CardDescription className="text-xs text-muted-foreground">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
