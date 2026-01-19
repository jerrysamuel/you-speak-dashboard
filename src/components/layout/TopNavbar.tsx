import { Bell, Settings, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const TopNavbar = () => {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-end px-6 gap-4">
      {/* Notification Bell */}
      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
        <Bell className="w-5 h-5" />
      </Button>

      {/* Settings */}
      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
        <Settings className="w-5 h-5" />
      </Button>

      {/* User Profile */}
      <div className="flex items-center gap-3 pl-4 border-l border-border">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" alt="User" />
          <AvatarFallback>HH</AvatarFallback>
        </Avatar>
        <div className="hidden sm:block">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-foreground">Higher Heights College</span>
            <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500" />
          </div>
          <span className="text-xs text-muted-foreground">#2345354241</span>
        </div>
      </div>
    </header>
  );
};
