
import { Button } from "@/components/ui/button";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { Factory, Save, Upload, Download, RefreshCw, Server } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between py-4 border-b border-border px-4">
      <div className="flex items-center gap-3">
        <Factory size={24} className="text-factorio-light" />
        <div>
          <h1 className="text-xl font-bold">Factorio AI Bot Architect</h1>
          <p className="text-xs text-muted-foreground">v0.1.0 - AI Bot Design Module</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 mr-4">
          <StatusIndicator status="online" />
          <div className="text-xs">
            <span className="text-muted-foreground">Bot Status: </span>
            <span className="font-medium">Ready for deployment</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Save size={14} />
            <span className="hidden sm:inline">Save</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Upload size={14} />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Download size={14} />
            <span className="hidden sm:inline">Import</span>
          </Button>
          <Button variant="default" size="sm" className="h-8 gap-1">
            <Server size={14} />
            <span>Deploy Bot</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
