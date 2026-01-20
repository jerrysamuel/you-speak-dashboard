import { useEffect, useState } from "react";
import { Bell, Settings, BadgeCheck, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TopNavbarProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export const TopNavbar = ({ onMenuClick, showMenuButton = false }: TopNavbarProps) => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  return (
    <header className="h-20 bg-card rounded-2xl border border-border flex items-center justify-between px-4 lg:px-6 shadow-sm">
      
      {/* Left - Logo + Hamburger */}
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

      {/* Middle - Teacher navigation (desktop only) */}
      {role === "teacher" && (
        <nav className="hidden lg:flex items-center gap-6 mx-auto">
          <span className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer">Home</span>
          <span className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer">Analysis</span>
          <span className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer">Announcements</span>
          <span className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer">Resources</span>
        </nav>
      )}

      {/* Right - Icons and Profile */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Notification */}
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground rounded-full border border-border"
        >
          <Bell className="w-5 h-5" />
        </Button>

        {/* Settings */}
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground rounded-full border border-border"
        >
          <Settings className="w-5 h-5" />
        </Button>

        {/* Profile */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl border border-border bg-card">
          {/* School info only for school role */}
          {role === "school" && (
            <div className="hidden sm:flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-foreground">
                  Higher Heights College
                </span>
                <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-100" />
              </div>
              <span className="text-xs text-muted-foreground">#2345354241</span>
            </div>
          )}

          {/* Avatar */}
          <Avatar className="w-8 h-8">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
              alt="User"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

const Logo = () => (
  <div className="flex items-center gap-2">
    <span className="font-bold text-xl sm:text-xl">
      <span className="text-primary">Y</span>
      <span className="text-foreground">OU</span>
    </span>
    <span className="font-bold text-lg sm:text-xl text-foreground">Speak</span>
  </div>
);