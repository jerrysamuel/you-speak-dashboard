import { useEffect, useState } from "react";
import { Bell, Settings, BadgeCheck, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TopNavbarProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export const TopNavbar = ({
  onMenuClick,
  showMenuButton = false,
}: TopNavbarProps) => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  return (
    <header className="h-20 bg-card rounded-2xl border border-border flex items-center px-6 shadow-sm">
      {/* Left + Middle */}
      <div className="flex items-center gap-10 flex-1">
        {/* Left - Logo */}
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

        {/* Middle - Teacher Navigation */}
        {role === "teacher" && (
          <nav className="hidden ml-64  lg:flex items-center gap-6">
            <span className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer">
              Home
            </span>
            <span className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer">
              Analysis
            </span>
            <span className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer">
              Announcements
            </span>
            <span className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer">
              Resources
            </span>
          </nav>
        )}
      </div>

      {/* Right side - Icons and Profile */}
      <div className="flex items-center gap-2">
  {/* Notification Bell */}
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

  {/* Profile container */}
  <div className="flex items-center gap-3 ml-2 px-3 py-2 rounded-xl border border-border bg-card">
    {/* School info ONLY for school management */}
    {role === "school" && (
      <div className="hidden sm:block">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-semibold text-foreground">
            Higher Heights College
          </span>
          <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-100" />
        </div>
        <span className="text-xs text-muted-foreground">#2345354241</span>
      </div>
    )}

    {/* Avatar - shown for everyone */}
    <Avatar className="w-8 h-8 ml-1">
      <AvatarImage
        src="https://img.freepik.com/free-photo/hands-holding-letter_53876-63656.jpg?t=st=1768901096~exp=1768904696~hmac=f0b4c060ff5a8c94aa875a7021aac41029e398c917afd1b66a9705e33b023aa1"
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
    <span className="text-2xl font-bold">
      <span className="text-primary">Y</span>
      <span className="text-foreground">OU</span>
    </span>
    <span className="text-xl font-bold text-foreground">Speak</span>
  </div>
);
