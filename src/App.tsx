import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SchoolDashboard from "./pages/SchoolDashboard";
import RoomMonitor from "./pages/RoomMonitor";
import TeacherDashboard from "./pages/TeacherDashboard";
import LearningRoomReport from "./pages/LearningRoomReport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Login */}
          <Route path="/" element={<Login />} />
          
          {/* School Management Routes */}
          <Route path="/school/dashboard" element={<SchoolDashboard />} />
          <Route path="/school/room-monitor" element={<RoomMonitor />} />
          <Route path="/school/manage" element={<SchoolDashboard />} />
          <Route path="/school/curriculum" element={<SchoolDashboard />} />
          <Route path="/school/leaderboards" element={<SchoolDashboard />} />
          <Route path="/school/billing" element={<SchoolDashboard />} />
          
          {/* Teacher Routes */}
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/class-management" element={<TeacherDashboard />} />
          <Route path="/teacher/assessment" element={<TeacherDashboard />} />
          <Route path="/teacher/arena" element={<TeacherDashboard />} />
          <Route path="/teacher/arena/challenge-pool" element={<TeacherDashboard />} />
          <Route path="/teacher/arena/learning-room" element={<LearningRoomReport />} />
          <Route path="/teacher/arena/practice-room" element={<TeacherDashboard />} />
          <Route path="/teacher/leaderboards" element={<TeacherDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
