
import { ModuleCard } from "@/components/ui/module-card";
import { ParameterSlider } from "@/components/ui/parameter-slider";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { Move, Footprints } from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function MovementModule() {
  const [active, setActive] = useState(true);
  const [speed, setSpeed] = useState([65]);
  const [pathfinding, setPathfinding] = useState([50]);
  const [movementPattern, setMovementPattern] = useState("optimal");

  return (
    <ModuleCard 
      title="Movement Module" 
      description="Controls path finding and physical movement"
      icon={<Move size={18} />}
      variant={active ? "active" : "inactive"}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Switch id="movement-active" checked={active} onCheckedChange={setActive} />
            <Label htmlFor="movement-active" className="text-xs">Active</Label>
          </div>
          <StatusIndicator status={active ? "online" : "offline"} label={active ? "Mobile" : "Stationary"} />
        </div>
        
        <div className="p-3 bg-muted/50 rounded-md relative overflow-hidden">
          <div className="absolute top-2 right-2">
            <Footprints size={14} className="text-factorio-circuit" />
          </div>
          <div className="h-24 flex flex-col items-center justify-center">
            {active ? (
              <div className="flex flex-col items-center">
                <div className="text-xs text-factorio-circuit mb-2 font-medium capitalize">
                  {movementPattern} pathfinding
                </div>
                <div className="relative w-24 h-16">
                  <div className="absolute w-3 h-3 rounded-full bg-factorio-circuit left-2 top-8"></div>
                  <div className="absolute right-2 top-5 w-4 h-4 rounded-sm border-2 border-dashed border-factorio-light/40"></div>
                  
                  {/* Path visualization based on movement pattern */}
                  {movementPattern === "optimal" && (
                    <svg className="absolute inset-0" viewBox="0 0 96 64">
                      <path 
                        d="M14,32 Q42,42 80,24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                        className="text-factorio-circuit/60" 
                        strokeDasharray="3 2"
                      />
                    </svg>
                  )}
                  
                  {movementPattern === "cautious" && (
                    <svg className="absolute inset-0" viewBox="0 0 96 64">
                      <path 
                        d="M14,32 L42,32 L80,24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                        className="text-factorio-circuit/60" 
                        strokeDasharray="3 2"
                      />
                    </svg>
                  )}
                  
                  {movementPattern === "aggressive" && (
                    <svg className="absolute inset-0" viewBox="0 0 96 64">
                      <path 
                        d="M14,32 L80,24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                        className="text-factorio-circuit/60" 
                        strokeDasharray="3 2"
                      />
                    </svg>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-xs text-muted-foreground">Movement system offline</div>
            )}
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="movement-pattern" className="text-xs">Movement Pattern</Label>
            <Select 
              value={movementPattern} 
              onValueChange={setMovementPattern}
              disabled={!active}
            >
              <SelectTrigger id="movement-pattern" className="w-full text-xs h-8">
                <SelectValue placeholder="Select pattern" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="optimal">Optimal</SelectItem>
                <SelectItem value="cautious">Cautious</SelectItem>
                <SelectItem value="aggressive">Aggressive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <ParameterSlider 
            label="Movement Speed" 
            value={speed} 
            onValueChange={setSpeed} 
          />
          <ParameterSlider 
            label="Pathfinding Complexity" 
            value={pathfinding} 
            onValueChange={setPathfinding} 
          />
        </div>
      </div>
    </ModuleCard>
  );
}
