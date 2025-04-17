
import { ModuleCard } from "@/components/ui/module-card";
import { ParameterSlider } from "@/components/ui/parameter-slider";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { Target, Infinity, RefreshCw } from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ObjectiveModule() {
  const [active, setActive] = useState(true);
  const [autonomy, setAutonomy] = useState([40]);
  const [revisionRate, setRevisionRate] = useState([25]);
  const [objective, setObjective] = useState("Gather resources and expand factory infrastructure");
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <ModuleCard 
      title="Long-term Objective Module" 
      description="Goal-oriented action planning and revision"
      icon={<Target size={18} />}
      variant={active ? "active" : "inactive"}
      className="col-span-full"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Switch id="objective-active" checked={active} onCheckedChange={setActive} />
            <Label htmlFor="objective-active" className="text-xs">Active</Label>
          </div>
          <StatusIndicator status={active ? "online" : "offline"} label={active ? "Planning" : "Inactive"} />
        </div>
        
        <div className="p-3 bg-muted/50 rounded-md relative overflow-hidden">
          <div className="absolute top-2 right-2">
            <Infinity size={14} className="text-factorio-light" />
          </div>
          <div className="flex flex-col items-start min-h-24 py-2">
            <Label className="text-xs mb-2 font-medium">Current Objective:</Label>
            
            {isEditing ? (
              <div className="w-full space-y-2">
                <Textarea 
                  value={objective} 
                  onChange={(e) => setObjective(e.target.value)}
                  className="w-full text-xs h-20 resize-none"
                  placeholder="Enter bot objective..."
                />
                <div className="flex items-center gap-2 justify-end">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-7 text-xs"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="h-7 text-xs"
                    onClick={() => setIsEditing(false)}
                  >
                    Set Objective
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-full">
                <div className="text-sm font-medium text-foreground min-h-[40px]">
                  {active ? objective : "No active objective"}
                </div>
                {active && (
                  <div className="flex items-center mt-2 justify-between">
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <RefreshCw size={10} className="text-factorio-accent" />
                      Last revised: 2 minutes ago
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-7 text-xs"
                      onClick={() => setIsEditing(true)}
                    >
                      Modify
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <ParameterSlider 
              label="Autonomy Level" 
              value={autonomy} 
              onValueChange={setAutonomy} 
            />
          </div>
          <div className="space-y-3">
            <ParameterSlider 
              label="Objective Revision Rate" 
              value={revisionRate} 
              onValueChange={setRevisionRate} 
              valueLabel="/h"
            />
          </div>
        </div>
      </div>
    </ModuleCard>
  );
}
