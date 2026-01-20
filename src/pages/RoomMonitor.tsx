import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Languages, Users, Clock, ChevronDown } from "lucide-react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const proficiencyData = [
  { month: "Jan", level: 1 },
  { month: "Feb", level: 1.5 },
  { month: "Mar", level: 2 },
  { month: "Apr", level: 1.8 },
  { month: "May", level: 2.5 },
  { month: "Jun", level: 2.2 },
  { month: "Jul", level: 3 },
  { month: "Aug", level: 2.8 },
  { month: "Sep", level: 3.2 },
  { month: "Oct", level: 3 },
  { month: "Nov", level: 3.5 },
  { month: "Dec", level: 3.8 },
];

const activityItems = [
  { text: "New learning task assigned to Class A", time: "45 mins ago" },
  { text: "24 students completed AI Speax sessions", time: "Today, 9:00am" },
  { text: "Homework reviewed by AI", time: "Yesterday, 4:30 PM" },
];

const classPerformance = [
  { 
    name: "Grade 10 - Spanish", 
    progress: "85% (Mod 12)", 
    score: "88%", 
    time: "12h 30m / student",
    activity: "View Report"
  },
  { 
    name: "Grade 9 - French", 
    progress: "62% (Mod 8)", 
    score: "74%", 
    time: "8h 15m / student",
    activity: "View Report"
  },
];

const RoomMonitor = () => {
  return (
    <DashboardLayout role="school">
      <div className="space-y-6">
        {/* Header with tabs */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-foreground">Room Monitor</h1>
          <div className="flex gap-2">
            <Button variant="outline" className="border-primary text-primary">
              Learning room
            </Button>
            <Button variant="ghost" className="text-muted-foreground">
              Practice room
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-5 border-border">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <Languages className="w-6 h-6 text-primary" />
              </div>
              <Button variant="ghost" size="sm" className="text-muted-foreground text-xs">
                This Week <ChevronDown className="w-3 h-3 ml-1" />
              </Button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">Total Learning Sessions</p>
              <p className="text-3xl font-bold text-foreground">200</p>
            </div>
          </Card>

          <Card className="p-5 border-border">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <Button variant="ghost" size="sm" className="text-muted-foreground text-xs">
                This Week <ChevronDown className="w-3 h-3 ml-1" />
              </Button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">Active Students</p>
              <p className="text-3xl font-bold text-foreground">35</p>
            </div>
          </Card>

          <Card className="p-5 border-border">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <Button variant="ghost" size="sm" className="text-muted-foreground text-xs">
                This Week <ChevronDown className="w-3 h-3 ml-1" />
              </Button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">Avg. Session Duration</p>
              <p className="text-3xl font-bold text-foreground">12 mins</p>
            </div>
          </Card>
        </div>

        {/* Activity Timeline and Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-5 border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity Timeline</h3>
            <div className="space-y-4">
              {activityItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Languages className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground">{item.text}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5 border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Proficiency Growth Curve</h3>
              <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">Current</span>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={proficiencyData}>
                  <defs>
                    <linearGradient id="colorLevel" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 10 }} 
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis 
                    domain={[0, 4]}
                    ticks={[1, 2, 3, 4]}
                    tickFormatter={(value) => ['', 'A1', 'A2', 'B1', 'B2'][value]}
                    tick={{ fontSize: 10 }}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="level" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    fill="url(#colorLevel)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Class Performance Table */}
        <Card className="p-5 border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Class Performance Summary</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Class Name</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Module Progress</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Avg. Quiz Score</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Time Spent</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Last Activity</th>
                </tr>
              </thead>
              <tbody>
                {classPerformance.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="py-3 px-2 text-sm text-foreground">{row.name}</td>
                    <td className="py-3 px-2 text-sm text-foreground">{row.progress}</td>
                    <td className="py-3 px-2 text-sm text-foreground">{row.score}</td>
                    <td className="py-3 px-2 text-sm text-foreground">{row.time}</td>
                    <td className="py-3 px-2">
                      <Button variant="link" className="text-primary p-0 h-auto text-sm">
                        {row.activity} →
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default RoomMonitor;
