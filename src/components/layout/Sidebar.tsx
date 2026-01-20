import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  Monitor,
  FileText,
  Trophy,
  DollarSign,
  LogOut,
  GraduationCap,
  ClipboardList,
  Gamepad2,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Dumbbell,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

// School Management navigation items
const schoolNavItems = [
  { title: "General Overview", path: "/school/dashboard", icon: LayoutGrid },
  { title: "Manage", path: "/school/manage", icon: Users },
  { title: "Room Monitor", path: "/school/room-monitor", icon: Monitor },
  { title: "Curriculum", path: "/school/curriculum", icon: FileText },
  { title: "Leaderboards", path: "/school/leaderboards", icon: Trophy },
  { title: "Billing", path: "/school/billing", icon: DollarSign },
];

// Teacher navigation items
const teacherNavItems = [
  { title: "Class management", path: "/teacher/class-management", icon: GraduationCap },
  { title: "Curriculum", path: "/teacher/dashboard", icon: FileText },
  { title: "Assessment management", path: "/teacher/assessment", icon: ClipboardList },
  { 
    title: "Arena management", 
    path: "/teacher/arena", 
    icon: Gamepad2,
    subItems: [
      { title: "Challenge pool", path: "/teacher/arena/challenge-pool" },
      { title: "Learning room", path: "/teacher/arena/learning-room" },
      { title: "Practice room", path: "/teacher/arena/practice-room" },
    ]
  },
  { title: "Leaderboards", path: "/teacher/leaderboards", icon: Trophy },
];

interface NavItemProps {
  item: {
    title: string;
    path: string;
    icon: any;
    subItems?: { title: string; path: string }[];
  };
  onClick?: () => void;
}

const NavItem = ({ item, onClick }: NavItemProps) => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(
    item.subItems?.some(sub => location.pathname.startsWith(sub.path)) || false
  );
  
  const isActive = item.subItems 
    ? item.subItems.some(sub => location.pathname === sub.path) || location.pathname === item.path
    : location.pathname === item.path;

  const hasSubItems = item.subItems && item.subItems.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    if (hasSubItems) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    } else {
      onClick?.();
    }
  };

  return (
    <div>
      <NavLink
        to={hasSubItems ? "#" : item.path}
        onClick={handleClick}
        className={cn(
          "flex items-center justify-between gap-3 px-4 py-3 mx-2 rounded-lg text-sm font-medium transition-all duration-200",
          isActive
            ? "bg-accent text-primary border-l-4 border-primary ml-0 pl-3"
            : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
        )}
      >
        <div className="flex items-center gap-3">
          <item.icon className="w-5 h-5" />
          <span>{item.title}</span>
        </div>
        {hasSubItems && (
          isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
        )}
      </NavLink>
      
      {/* Sub-items */}
      {hasSubItems && isExpanded && (
        <div className="ml-6 mt-1 space-y-1 border-l-2 border-border">
          {item.subItems?.map((subItem) => (
            <NavLink
              key={subItem.path}
              to={subItem.path}
              onClick={onClick}
              className={cn(
                "flex items-center gap-2 px-4 py-2 ml-2 text-sm transition-all duration-200",
                location.pathname === subItem.path
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="text-muted-foreground">↳</span>
              <span>{subItem.title}</span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

interface SidebarProps {
  role: "school" | "teacher";
  onItemClick?: () => void;
}

export const Sidebar = ({ role, onItemClick }: SidebarProps) => {
  const navigate = useNavigate();
  const navItems = role === "school" ? schoolNavItems : teacherNavItems;

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <aside className="bg-card rounded-2xl border border-border h-full flex flex-col shadow-sm">
      <nav className="flex-1 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem key={item.path} item={item} onClick={onItemClick} />
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-sm font-medium text-muted-foreground hover:text-destructive transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};
