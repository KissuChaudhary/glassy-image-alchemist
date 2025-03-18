import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import ImageEditor from "@/components/ImageEditor";
import { ChevronLeft, Home, Settings, History, LogOut, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const Dashboard: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-emerald-950/30">
      {/* Dashboard Layout */}
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div 
          className={cn(
            "fixed md:relative h-full z-50 transition-all duration-300 ease-in-out",
            isCollapsed ? "w-[60px]" : "w-[256px]"
          )}
        >
          <div className="h-full bg-black/40 backdrop-blur-xl border-r border-white/10 shadow-2xl">
            <div className="flex h-full flex-col">
              {/* Logo Area */}
              <div className={cn("flex items-center", isCollapsed ? "p-3" : "p-6")}>
                <Sparkles className="h-5 w-5 text-emerald-400" />
                {!isCollapsed && (
                  <h2 className="ml-2 text-lg font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Image Alchemist
                  </h2>
                )}
              </div>
              <Separator className="opacity-20" />

              {/* Toggle Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute -right-3 top-6 h-6 w-6 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl hover:bg-black/60 shadow-lg"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <ChevronLeft
                  className={cn(
                    "h-4 w-4 transition-transform",
                    isCollapsed && "rotate-180"
                  )}
                />
              </Button>

              {/* Navigation */}
              <ScrollArea className="flex-1 px-2 py-4">
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full hover:bg-emerald-500/10",
                      isCollapsed ? "justify-center" : "justify-start",
                      activeItem === "dashboard" && "bg-emerald-500/10 rounded-lg"
                    )}
                    size="lg"
                    onClick={() => setActiveItem("dashboard")}
                  >
                    <Home className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                    {!isCollapsed && "Dashboard"}
                  </Button>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full hover:bg-emerald-500/10",
                      isCollapsed ? "justify-center" : "justify-start",
                      activeItem === "history" && "bg-emerald-500/10 rounded-lg"
                    )}
                    size="lg"
                    onClick={() => setActiveItem("history")}
                  >
                    <History className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                    {!isCollapsed && "History"}
                  </Button>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full hover:bg-emerald-500/10",
                      isCollapsed ? "justify-center" : "justify-start",
                      activeItem === "settings" && "bg-emerald-500/10 rounded-lg"
                    )}
                    size="lg"
                    onClick={() => setActiveItem("settings")}
                  >
                    <Settings className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                    {!isCollapsed && "Settings"}
                  </Button>
                </div>
              </ScrollArea>

              {/* User Area */}
              <div className="p-2 mt-auto border-t border-white/10">
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full text-red-400 hover:bg-red-500/10",
                    isCollapsed ? "justify-center" : "justify-start",
                    activeItem === "logout" && "bg-red-500/10 rounded-lg"
                  )}
                  size="lg"
                  onClick={() => setActiveItem("logout")}
                >
                  <LogOut className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                  {!isCollapsed && "Logout"}
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 w-full overflow-auto">
          {/* Header */}
          <header className="sticky top-0 z-10 backdrop-blur-xl bg-black/40 border-b border-white/10 px-4 md:px-8 py-4 shadow-lg">
            <h1 className="text-xl font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Image Editor</h1>
          </header>
          
          {/* Content Area */}
          <main className="p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
              <ImageEditor />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;