
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Database, Zap, BarChart2, Loader2 } from "lucide-react";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { cn } from "@/lib/utils";

interface BotSimulationProps {
  className?: string;
}

export function BotSimulation({ className }: BotSimulationProps) {
  // This would be connected to the actual simulation state in a real app
  const isRunning = true;
  
  return (
    <Card className={cn("col-span-full", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Bot Simulation</CardTitle>
          <StatusIndicator 
            status={isRunning ? "online" : "offline"} 
            label={isRunning ? "Simulation running" : "Simulation paused"} 
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[240px] bg-muted/50 rounded-md relative overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 grid grid-cols-[repeat(16,1fr)] grid-rows-[repeat(12,1fr)] opacity-10">
            {Array(192).fill(0).map((_, i) => (
              <div key={i} className="border-[0.5px] border-factorio-light/20"></div>
            ))}
          </div>
          
          {/* Factory area */}
          <div className="absolute top-1/4 left-1/4 w-16 h-10 border border-factorio-yellow/70 rounded-sm bg-factorio-dark/50"></div>
          
          {/* Resources */}
          <div className="absolute top-[15%] right-[35%] w-4 h-4 rounded-full border border-factorio-circuit/70 bg-factorio-circuit/30"></div>
          <div className="absolute bottom-[25%] right-[15%] w-6 h-4 rounded-sm border border-factorio-blue/70 bg-factorio-blue/30"></div>
          
          {/* Bot representation */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-10 h-10 rounded-full bg-factorio-light/10 border-2 border-factorio-light flex items-center justify-center animate-pulse">
              <div className="w-6 h-6 rounded-full bg-factorio-light/30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-factorio-light"></div>
              </div>
            </div>
            {/* Vision cone */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-factorio-light/20 pointer-events-none"></div>
          </div>
          
          {/* Information overlays */}
          <div className="absolute top-3 left-3 text-xs flex items-center gap-2 text-muted-foreground">
            <Badge variant="outline" className="h-5 bg-background/80 text-[10px]">
              <Cpu size={10} className="mr-1" /> Vision: Online
            </Badge>
          </div>
          <div className="absolute top-3 right-3 text-xs flex items-center gap-2 text-muted-foreground">
            <Badge variant="outline" className="h-5 bg-background/80 text-[10px]">
              <Database size={10} className="mr-1" /> Resources: 240
            </Badge>
          </div>
          <div className="absolute bottom-3 left-3 text-xs flex items-center gap-2 text-muted-foreground">
            <Badge variant="outline" className="h-5 bg-background/80 text-[10px]">
              <Zap size={10} className="mr-1" /> Energy: 78%
            </Badge>
          </div>
          <div className="absolute bottom-3 right-3 text-xs flex items-center gap-2 text-muted-foreground">
            <Badge variant="outline" className="h-5 bg-background/80 text-[10px]">
              <BarChart2 size={10} className="mr-1" /> Efficiency: 65%
            </Badge>
          </div>
          
          {/* Processing indicator */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 text-xs flex flex-col items-center gap-1">
            <Loader2 size={16} className="animate-spin text-factorio-accent" />
            <div className="text-[10px] text-muted-foreground">PROCESSING</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
