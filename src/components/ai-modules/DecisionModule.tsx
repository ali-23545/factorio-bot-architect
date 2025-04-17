
import { ModuleCard } from "@/components/ui/module-card";
import { ParameterSlider } from "@/components/ui/parameter-slider";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { Brain, ActivitySquare } from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function DecisionModule() {
  const [active, setActive] = useState(true);
  const [confidence, setConfidence] = useState([70]);
  const [complexity, setComplexity] = useState([50]);
  const [decisionType, setDecisionType] = useState("balanced");

  return (
    <ModuleCard 
      title="Decision Module" 
      description="Decision making based on environmental input"
      icon={<Brain size={18} />}
      variant={active ? "active" : "inactive"}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Switch id="decision-active" checked={active} onCheckedChange={setActive} />
            <Label htmlFor="decision-active" className="text-xs">Active</Label>
          </div>
          <StatusIndicator status={active ? "online" : "offline"} label={active ? "Decision making" : "Inactive"} />
        </div>
        
        <div className="p-3 bg-muted/50 rounded-md relative overflow-hidden">
          <div className="absolute top-2 right-2">
            <ActivitySquare size={14} className="text-factorio-blue" />
          </div>
          <div className="h-24 flex flex-col items-center justify-center space-y-2 text-center">
            {active ? (
              <>
                <div className="text-xs text-factorio-blue">
                  Decision model: <span className="font-semibold capitalize">{decisionType}</span>
                </div>
                <div className="text-[10px] text-muted-foreground max-w-[200px]">
                  {decisionType === "balanced" && "Weighing options with balanced consideration of risks and rewards"}
                  {decisionType === "cautious" && "Prioritizing safety and known patterns over potential gain"}
                  {decisionType === "aggressive" && "Optimizing for maximum resource acquisition and efficiency"}
                  {decisionType === "adaptive" && "Learning from outcomes to improve future decision making"}
                </div>
              </>
            ) : (
              <div className="text-xs text-muted-foreground">Decision engine offline</div>
            )}
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="decision-type" className="text-xs">Decision Model</Label>
            <Select 
              value={decisionType} 
              onValueChange={setDecisionType} 
              disabled={!active}
            >
              <SelectTrigger id="decision-type" className="w-full text-xs h-8">
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="balanced">Balanced</SelectItem>
                <SelectItem value="cautious">Cautious</SelectItem>
                <SelectItem value="aggressive">Aggressive</SelectItem>
                <SelectItem value="adaptive">Adaptive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <ParameterSlider 
            label="Confidence Threshold" 
            value={confidence} 
            onValueChange={setConfidence} 
          />
          <ParameterSlider 
            label="Decision Complexity" 
            value={complexity} 
            onValueChange={setComplexity} 
          />
        </div>
      </div>
    </ModuleCard>
  );
}
