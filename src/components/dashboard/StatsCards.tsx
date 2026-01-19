import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap } from "lucide-react";

export const StatsCards = () => {
  return (
    <div className="space-y-4">
      {/* Active Students */}
      <Card className="bg-card border-none shadow-sm">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-light flex items-center justify-center">
            <Users className="w-6 h-6 text-orange" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Active Students</p>
            <p className="text-3xl font-bold text-foreground">200</p>
          </div>
        </CardContent>
      </Card>

      {/* Active Teachers */}
      <Card className="bg-card border-none shadow-sm">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-teal" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Active Teachers</p>
            <p className="text-3xl font-bold text-foreground">35</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
