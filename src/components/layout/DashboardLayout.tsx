import { ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopNavbar } from "./TopNavbar";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface DashboardLayoutProps {
  children: ReactNode;
  role: "school" | "teacher";
}

export const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in with correct role
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (!storedRole) {
      navigate("/");
    } else if (storedRole !== role) {
      navigate(storedRole === "school" ? "/school/dashboard" : "/teacher/dashboard");
    }
  }, [role, navigate]);

  return (
    <div className="min-h-screen bg-background p-4 lg:p-6">
      {/* Top Navbar */}
      <TopNavbar 
        onMenuClick={() => setSidebarOpen(true)} 
        showMenuButton={true}
      />
      
      {/* Mobile Sidebar Sheet */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-72 p-4 bg-background">
          <Sidebar role={role} onItemClick={() => setSidebarOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Main layout with sidebar and content */}
      <div className="flex gap-4 lg:gap-6 mt-4 lg:mt-6">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-6">
            <Sidebar role={role} />
          </div>
        </div>
        
        {/* Main content area */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
};
