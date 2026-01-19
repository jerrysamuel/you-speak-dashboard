import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  Monitor,
  FileText,
  Trophy,
  DollarSign,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { title: "General Overview", path: "/", icon: LayoutGrid },
  { title: "Manage", path: "/manage", icon: Users },
  { title: "Room Monitor", path: "/room-monitor", icon: Monitor },
  { title: "Curriculum", path: "/curriculum", icon: FileText },
  { title: "Leaderboards", path: "/leaderboards", icon: Trophy },
  { title: "Billing", path: "/billing", icon: DollarSign },
];

const Logo = () => (
  <div className="flex items-center gap-2 px-4 py-6">
    <div className="relative w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
      <div className="w-6 h-6 bg-primary-foreground rounded-full flex items-center justify-center">
        <span className="text-primary text-xs font-bold">:)</span>
      </div>
      {/* Speech bubble tail */}
      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-br-lg" />
    </div>
    <span className="text-xl font-bold text-foreground">YOU Speak</span>
  </div>
);

const NavItem = ({ item, onClick }: { item: typeof navItems[0]; onClick?: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  return (
    <NavLink
      to={item.path}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-3 mx-2 rounded-lg text-sm font-medium transition-all duration-200",
        isActive
          ? "bg-accent text-accent-foreground border-l-4 border-primary ml-0 pl-3"
          : "text-sidebar-foreground hover:bg-accent/50 hover:text-accent-foreground"
      )}
    >
      <item.icon className="w-5 h-5" />
      <span>{item.title}</span>
    </NavLink>
  );
};

const SidebarContent = ({ onItemClick }: { onItemClick?: () => void }) => (
  <div className="flex flex-col h-full">
    <Logo />
    
    <nav className="flex-1 py-4 space-y-1">
      {navItems.map((item) => (
        <NavItem key={item.path} item={item} onClick={onItemClick} />
      ))}
    </nav>

    <div className="p-4 border-t border-border">
      <button className="flex items-center gap-3 px-4 py-3 w-full text-sm font-medium text-muted-foreground hover:text-destructive transition-colors">
        <LogOut className="w-5 h-5" />
        <span>Log Out</span>
      </button>
    </div>
  </div>
);

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-4 left-4 z-50 lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0 bg-card">
          <SidebarContent onItemClick={() => setOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-card border-r border-border">
        <SidebarContent />
      </aside>
    </>
  );
};
