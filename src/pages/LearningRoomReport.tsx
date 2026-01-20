import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Award, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const resourcesData = [
  { name: "Grammar Guide", progress: 84, color: "bg-blue-500" },
  { name: "Vocabulary Builder", progress: 75, color: "bg-purple-500" },
  { name: "Pronunciation Practice", progress: 92, color: "bg-orange-400" },
  { name: "Arena Challenge Prep", progress: 45, color: "bg-red-500" },
  { name: "Intro to Communication", progress: 42, color: "bg-green-500" },
];

const studentsData = [
  { name: "Abijah", progress: 75, resource: "Intro to communication", time: "3h 45m", color: "bg-blue-500" },
  { name: "Duro", progress: 68, resource: "Grammar Guide", time: "2h 45m", color: "bg-blue-500" },
  { name: "Orji Jane", progress: 25, resource: "Basic Greetings", time: "3h 30m", color: "bg-red-500" },
  { name: "Musa Yusuf", progress: 78, resource: "Pronunciation Practice", time: "4h 45m", color: "bg-purple-500" },
  { name: "Duro", progress: 70, resource: "Vocabulary Builder", time: "3h 45m", color: "bg-blue-500" },
  { name: "Duro", progress: 95, resource: "Arena Challenge Prep", time: "3h 20m", color: "bg-green-500" },
];

const LearningRoomReport = () => {
  return (
    <DashboardLayout role="teacher">
      <div className="space-y-6">
        {/* Header with filters */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-foreground">Learning Room Report</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="border-border">
              Class <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
            <Button className="bg-primary text-primary-foreground rounded-lg">
              <Users className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-5 border-border">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Students</p>
                <p className="text-3xl font-bold text-foreground mt-1">24</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-500" />
              </div>
            </div>
          </Card>

          <Card className="p-5 border-border">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Completion</p>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex-1 h-2 bg-muted rounded-full w-32">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '75%' }} />
                  </div>
                  <span className="text-lg font-semibold">75%</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-teal-500" />
              </div>
            </div>
          </Card>

          <Card className="p-5 border-border">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Top Category</p>
                <p className="text-xl font-bold text-foreground mt-1">Pronunciation practice</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-500" />
              </div>
            </div>
          </Card>
        </div>

        {/* Resources Engagement */}
        <Card className="p-5 border-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Resources engagement</h3>
            <Button variant="ghost" size="sm" className="text-primary text-xs">
              This Week <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
          </div>
          <div className="space-y-4">
            {resourcesData.map((resource, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{resource.name}</span>
                  <span className="text-sm font-medium text-foreground">{resource.progress}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div 
                    className={`h-2 ${resource.color} rounded-full transition-all`}
                    style={{ width: `${resource.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Students Progress Monitoring */}
        <Card className="p-5 border-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Students Progress Monitoring</h3>
            <Button variant="ghost" size="sm" className="text-primary text-xs">
              This Week <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left py-3 px-3 text-sm font-medium text-muted-foreground rounded-l-lg">
                    Student Name ↓
                  </th>
                  <th className="text-left py-3 px-3 text-sm font-medium text-muted-foreground">
                    Room progress ↓
                  </th>
                  <th className="text-left py-3 px-3 text-sm font-medium text-muted-foreground">
                    Last Resource Accessed ↓
                  </th>
                  <th className="text-left py-3 px-3 text-sm font-medium text-muted-foreground rounded-r-lg">
                    Time spent ↓
                  </th>
                </tr>
              </thead>
              <tbody>
                {studentsData.map((student, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="py-4 px-3 text-sm text-foreground">{student.name}</td>
                    <td className="py-4 px-3">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted rounded-full">
                          <div 
                            className={`h-2 ${student.color} rounded-full`}
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-foreground">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-sm text-foreground font-medium">{student.resource}</td>
                    <td className="py-4 px-3 text-sm text-foreground">{student.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">Showing 1-6 of 21 students</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-border">
                Previous
              </Button>
              <Button variant="outline" size="sm" className="border-primary text-primary">
                Next
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default LearningRoomReport;
