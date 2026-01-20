import { Bell, Settings, BadgeCheck, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TopNavbarProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export const TopNavbar = ({ onMenuClick, showMenuButton = false }: TopNavbarProps) => {
  return (
    <header className="h-20 bg-card rounded-2xl border border-border flex items-center justify-between px-6 shadow-sm">
      {/* Left side - Logo */}
      <div className="flex items-center gap-3">
        {showMenuButton && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </Button>
        )}
        <Logo />
      </div>

      {/* Right side - Icons and Profile */}
      <div className="flex items-center gap-2">
        {/* Notification Bell */}
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground rounded-full border border-border">
          <Bell className="w-5 h-5" />
        </Button>

        {/* Settings */}
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground rounded-full border border-border">
          <Settings className="w-5 h-5" />
        </Button>

        {/* User Profile */}
        <div className="flex items-center gap-3 ml-2 px-3 py-2 rounded-xl border border-border bg-card">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-xs">✓</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-foreground">Higher Heights College</span>
              <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-100" />
            </div>
            <span className="text-xs text-muted-foreground">#2345354241</span>
          </div>
          <Avatar className="w-8 h-8 ml-1">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" alt="User" />
            <AvatarFallback>HH</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative">
      <span className="text-2xl font-bold">
        <span className="text-primary">Y</span>
        <span className="text-foreground">OU</span>
      </span>
    </div>
    <div className="flex flex-col -ml-1">
      <span className="text-xl font-bold text-foreground leading-tight">Speak</span>
      <div className="flex items-center gap-0.5">
        <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
          <span className="text-primary-foreground text-[8px]">:)</span>
        </div>
      </div>
    </div>
  </div>
);
