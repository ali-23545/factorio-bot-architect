
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, MemoryStick, Cog, Layers, CircuitBoard,
  TrendingUp, AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SystemMetricsProps {
  className?: string;
}

export function SystemMetrics({ className }: SystemMetricsProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">System Metrics</CardTitle>
          <Badge variant="outline" className="text-xs bg-factorio-circuit/10 text-factorio-circuit border-factorio-circuit/20">
            Online
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-muted/50 p-3 rounded-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu size={14} className="text-factorio-accent" />
                  <span className="text-xs">CPU Usage</span>
                </div>
                <span className="text-xs font-medium">42%</span>
              </div>
              <div className="mt-2 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="bg-factorio-accent h-full rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
            
            <div className="bg-muted/50 p-3 rounded-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MemoryStick size={14} className="text-factorio-blue" />
                  <span className="text-xs">Memory</span>
                </div>
                <span className="text-xs font-medium">264MB</span>
              </div>
              <div className="mt-2 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="bg-factorio-blue h-full rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-muted/50 p-3 rounded-md">
            <div className="flex items-center gap-2 mb-2">
              <CircuitBoard size={14} className="text-factorio-light" />
              <span className="text-xs">AI Models Status</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-factorio-circuit"></div>
                  <span>Vision Model</span>
                </div>
                <Badge variant="outline" className="text-[10px] h-5">25MB</Badge>
              </div>
              
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-factorio-blue"></div>
                  <span>Decision Model</span>
                </div>
                <Badge variant="outline" className="text-[10px] h-5">48MB</Badge>
              </div>
              
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-factorio-yellow"></div>
                  <span>Prioritization Model</span>
                </div>
                <Badge variant="outline" className="text-[10px] h-5">32MB</Badge>
              </div>
              
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-factorio-circuit"></div>
                  <span>Movement Model</span>
                </div>
                <Badge variant="outline" className="text-[10px] h-5">45MB</Badge>
              </div>
              
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-factorio-light"></div>
                  <span>Objective Model</span>
                </div>
                <Badge variant="outline" className="text-[10px] h-5">64MB</Badge>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-muted/50 p-3 rounded-md">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={14} className="text-factorio-circuit" />
                <span className="text-xs">Performance</span>
              </div>
              <div className="text-lg font-semibold">92%</div>
              <div className="text-[10px] text-muted-foreground">Optimal range</div>
            </div>
            
            <div className="bg-muted/50 p-3 rounded-md">
              <div className="flex items-center gap-2 mb-1">
                <AlertCircle size={14} className="text-factorio-red" />
                <span className="text-xs">Errors</span>
              </div>
              <div className="text-lg font-semibold">2</div>
              <div className="text-[10px] text-muted-foreground">Last 24 hours</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
