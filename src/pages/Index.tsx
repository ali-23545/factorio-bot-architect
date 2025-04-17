
import { Header } from "@/components/Header";
import { VisionModule } from "@/components/ai-modules/VisionModule";
import { DecisionModule } from "@/components/ai-modules/DecisionModule";
import { PrioritizationModule } from "@/components/ai-modules/PrioritizationModule";
import { MovementModule } from "@/components/ai-modules/MovementModule";
import { ObjectiveModule } from "@/components/ai-modules/ObjectiveModule";
import { BotSimulation } from "@/components/BotSimulation";
import { SystemMetrics } from "@/components/SystemMetrics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircuitBoard, Code, FileCode, Settings, Bot } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-6 max-w-7xl">
        <Tabs defaultValue="design" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="design" className="flex items-center gap-1">
                <CircuitBoard size={16} />
                <span>AI Design</span>
              </TabsTrigger>
              <TabsTrigger value="code" className="flex items-center gap-1">
                <Code size={16} />
                <span>Code View</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-1">
                <Settings size={16} />
                <span>Settings</span>
              </TabsTrigger>
              <TabsTrigger value="deploy" className="flex items-center gap-1">
                <Bot size={16} />
                <span>Deployment</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="design" className="space-y-6">
            <BotSimulation />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VisionModule />
              <DecisionModule />
              <PrioritizationModule />
              <MovementModule />
              <SystemMetrics className="h-full" />
            </div>
            
            <ObjectiveModule />
          </TabsContent>
          
          <TabsContent value="code">
            <div className="p-6 bg-muted rounded-lg h-[600px] overflow-hidden flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileCode size={18} className="text-factorio-light" />
                  <h3 className="font-medium">Factorio Bot API Code</h3>
                </div>
              </div>
              <div className="bg-factorio-darker text-foreground rounded-md p-4 font-mono text-sm flex-1 overflow-auto">
                <pre className="text-xs">
{`-- Factorio Bot AI Implementation
-- Version 0.1.0

local BotAI = {}

-- Vision Model for Object Detection
BotAI.VisionModule = {
  active = true,
  range = 25,
  precision = 80,
  processing_speed = 60,
  
  detect_objects = function(self, position)
    -- Object detection logic
    local objects = {}
    -- Scan surroundings based on range and precision
    return objects
  end
}

-- Decision Making Module
BotAI.DecisionModule = {
  active = true,
  confidence_threshold = 70,
  decision_complexity = 50,
  model_type = "balanced",
  
  make_decision = function(self, inputs)
    -- Decision making logic based on inputs and model type
    local decision = {
      action = "move", 
      target = {x = 100, y = 150},
      confidence = 85
    }
    return decision
  end
}

-- Decision Prioritization Module
BotAI.PrioritizationModule = {
  active = true,
  resource_weight = 60,
  safety_weight = 80,
  efficiency_weight = 40,
  
  prioritize = function(self, decisions)
    -- Sort and weight decisions
    -- Return prioritized list
    return sorted_decisions
  end
}

-- Movement Control Module
BotAI.MovementModule = {
  active = true,
  speed = 65,
  pathfinding_complexity = 50,
  pattern = "optimal",
  
  calculate_path = function(self, current, target)
    -- Pathfinding algorithm
    return path
  end,
  
  move = function(self, path)
    -- Execute movement along path
  end
}

-- Long-term Objective Module
BotAI.ObjectiveModule = {
  active = true,
  autonomy = 40,
  revision_rate = 25,
  current_objective = "Gather resources and expand factory infrastructure",
  
  revise_objective = function(self, environment_data)
    -- Analyze and potentially adjust current objective
    return adjusted_objective
  end,
  
  plan_actions = function(self)
    -- Create action plan to achieve current objective
    return action_plan
  end
}

-- Main bot processing loop
function BotAI:process()
  if not self.initialized then
    self:initialize()
  end
  
  -- 1. Get environmental data through vision
  local visual_data = self.VisionModule:detect_objects(self.position)
  
  -- 2. Generate possible decisions
  local decisions = self.DecisionModule:make_decision(visual_data)
  
  -- 3. Prioritize decisions
  local prioritized_actions = self.PrioritizationModule:prioritize(decisions)
  
  -- 4. Review long-term objectives
  self.ObjectiveModule:revise_objective(visual_data)
  
  -- 5. Plan actions based on objectives
  local action_plan = self.ObjectiveModule:plan_actions()
  
  -- 6. Execute movement
  if prioritized_actions[1].action == "move" then
    local path = self.MovementModule:calculate_path(self.position, prioritized_actions[1].target)
    self.MovementModule:move(path)
  end
  
  return true
end

function BotAI:initialize()
  self.position = {x = 0, y = 0}
  self.initialized = true
  -- Additional initialization
end

return BotAI`}
                </pre>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="settings">
            <div className="bg-card rounded-lg p-6 text-center py-12">
              <h3 className="text-lg font-medium mb-2">Settings Panel</h3>
              <p className="text-muted-foreground">Configure global bot settings and system parameters</p>
              <p className="mt-6 text-sm text-muted-foreground">This feature will be available in the next version.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="deploy">
            <div className="bg-card rounded-lg p-6 text-center py-12">
              <h3 className="text-lg font-medium mb-2">Deployment Manager</h3>
              <p className="text-muted-foreground">Deploy AI bots to your Factorio game instance</p>
              <p className="mt-6 text-sm text-muted-foreground">This feature will be available in the next version.</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="border-t border-border py-4 px-6">
        <div className="container flex items-center justify-between max-w-7xl">
          <div className="text-xs text-muted-foreground">
            Factorio AI Bot Architect © 2025
          </div>
          <div className="text-xs text-muted-foreground">
            Not affiliated with Wube Software
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
