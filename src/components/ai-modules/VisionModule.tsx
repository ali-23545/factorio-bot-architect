
import { ModuleCard } from "@/components/ui/module-card";
import { ParameterSlider } from "@/components/ui/parameter-slider";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { Eye, Camera, Zap } from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function VisionModule() {
  const [active, setActive] = useState(true);
  const [range, setRange] = useState([25]);
  const [precision, setPrecision] = useState([80]);
  const [speed, setSpeed] = useState([60]);

  return (
    <ModuleCard 
      title="Vision Module" 
      description="Object detection and environment analysis"
      icon={<Eye size={18} />}
      variant={active ? "active" : "inactive"}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Switch id="vision-active" checked={active} onCheckedChange={setActive} />
            <Label htmlFor="vision-active" className="text-xs">Active</Label>
          </div>
          <StatusIndicator status={active ? "online" : "offline"} label={active ? "Operational" : "Standby"} />
        </div>
        
        <div className="p-3 bg-muted/50 rounded-md relative overflow-hidden">
          <div className="absolute top-2 right-2">
            <Camera size={14} className="text-factorio-accent" />
          </div>
          <div className="h-24 flex items-center justify-center">
            <div className={`text-xs ${active ? "text-factorio-light" : "text-muted-foreground"}`}>
              {active ? "Environment scanning active" : "Vision disabled"}
              {active && (
                <div className="mt-2 flex items-center justify-center gap-1">
                  <Zap size={12} className="text-factorio-accent" />
                  <span className="text-[10px] text-muted-foreground">Processing imagery</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <ParameterSlider 
            label="Detection Range" 
            value={range} 
            onValueChange={setRange} 
            valueLabel=" tiles"
          />
          <ParameterSlider 
            label="Precision" 
            value={precision} 
            onValueChange={setPrecision} 
          />
          <ParameterSlider 
            label="Processing Speed" 
            value={speed} 
            onValueChange={setSpeed} 
          />
        </div>
      </div>
    </ModuleCard>
  );
}
