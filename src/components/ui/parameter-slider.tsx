
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface ParameterSliderProps {
  label: string;
  value: number[];
  min?: number;
  max?: number;
  step?: number;
  onValueChange: (value: number[]) => void;
  className?: string;
  valueLabel?: string;
}

export function ParameterSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
  className,
  valueLabel = "%",
}: ParameterSliderProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between">
        <Label htmlFor={label.toLowerCase().replace(/\s+/g, '-')} className="text-xs">
          {label}
        </Label>
        <span className="text-xs font-medium">
          {value[0]}{valueLabel}
        </span>
      </div>
      <Slider
        id={label.toLowerCase().replace(/\s+/g, '-')}
        min={min}
        max={max}
        step={step}
        value={value}
        onValueChange={onValueChange}
        className="cursor-pointer"
      />
    </div>
  );
}
