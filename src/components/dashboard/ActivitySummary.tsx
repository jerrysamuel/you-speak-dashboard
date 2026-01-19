import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";

const activities = [
  {
    id: 1,
    message: "Class 5B finished 'French: Greetings basics' with avg score 88%",
    timestamp: "09-12-25, 9:30am",
  },
  {
    id: 2,
    message: "New Milestone: 10,000 words learned across all classes",
    timestamp: "09-12-25, 8:00am",
  },
  {
    id: 3,
    message: "Grade 10 Spanish completed weekly quiz with 92% avg",
    timestamp: "08-12-25, 4:15pm",
  },
  {
    id: 4,
    message: "Teacher Mrs. Johnson added new vocabulary deck",
    timestamp: "08-12-25, 2:30pm",
  },
];

export const ActivitySummary = () => {
  return (
    <Card className="bg-card border-none shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-foreground">
          Activity Summary
        </CardTitle>
        <button className="text-sm text-primary hover:underline font-medium">
          see more
        </button>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <Bell className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground font-medium leading-snug">
                {activity.message}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {activity.timestamp}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
