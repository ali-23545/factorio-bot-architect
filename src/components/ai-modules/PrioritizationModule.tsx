
import { ModuleCard } from "@/components/ui/module-card";
import { ParameterSlider } from "@/components/ui/parameter-slider";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { ListFilter, BarChart2 } from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export function PrioritizationModule() {
  const [active, setActive] = useState(true);
  const [resourceWeight, setResourceWeight] = useState([60]);
  const [safetyWeight, setSafetyWeight] = useState([80]);
  const [efficiencyWeight, setEfficiencyWeight] = useState([40]);
  
  return (
    <ModuleCard 
      title="Prioritization Module" 
      description="Determines importance of competing objectives"
      icon={<ListFilter size={18} />}
      variant={active ? "active" : "inactive"}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Switch id="prioritization-active" checked={active} onCheckedChange={setActive} />
            <Label htmlFor="prioritization-active" className="text-xs">Active</Label>
          </div>
          <StatusIndicator status={active ? "online" : "offline"} label={active ? "Prioritizing" : "Inactive"} />
        </div>
        
        <div className="p-3 bg-muted/50 rounded-md relative overflow-hidden">
          <div className="absolute top-2 right-2">
            <BarChart2 size={14} className="text-factorio-yellow" />
          </div>
          <div className="h-24 flex flex-col items-center justify-center space-y-1">
            {active ? (
              <>
                <div className="text-xs font-medium mb-1">Current Priorities</div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-[10px] bg-factorio-red/10 border-factorio-red/20">
                    Safety: {safetyWeight[0]}%
                  </Badge>
                  <Badge variant="outline" className="text-[10px] bg-factorio-yellow/10 border-factorio-yellow/20">
                    Resources: {resourceWeight[0]}%
                  </Badge>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="text-[10px] bg-factorio-blue/10 border-factorio-blue/20">
                    Efficiency: {efficiencyWeight[0]}%
                  </Badge>
                </div>
              </>
            ) : (
              <div className="text-xs text-muted-foreground">Prioritization offline</div>
            )}
          </div>
        </div>
        
        <div className="space-y-3">
          <ParameterSlider 
            label="Resource Acquisition Weight" 
            value={resourceWeight} 
            onValueChange={setResourceWeight} 
          />
          <ParameterSlider 
            label="Safety Priority" 
            value={safetyWeight} 
            onValueChange={setSafetyWeight} 
          />
          <ParameterSlider 
            label="Efficiency Importance" 
            value={efficiencyWeight} 
            onValueChange={setEfficiencyWeight} 
          />
        </div>
      </div>
    </ModuleCard>
  );
}
