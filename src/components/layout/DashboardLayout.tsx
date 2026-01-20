import { ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopNavbar } from "./TopNavbar";

interface DashboardLayoutProps {
  children: ReactNode;
  role: "school" | "teacher";
}

export const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
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

  // Default sidebar closed on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar - Always on top */}
      <TopNavbar 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        showMenuButton={true}
      />
      
      {/* Content area below navbar */}
      <div className="flex">
        {/* Sidebar - pushes content, doesn't overlay */}
        <div 
          className={`
            ${sidebarOpen ? 'w-64' : 'w-0'} 
            flex-shrink-0 
            transition-all duration-300 ease-in-out
            overflow-hidden
          `}
        >
          <div className="w-64 h-[calc(100vh-80px)] sticky top-[80px] p-4">
            <Sidebar role={role} />
          </div>
        </div>
        
        {/* Main content area - adjusts width based on sidebar */}
        <main className="flex-1 min-w-0 p-4 lg:p-6 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
};
