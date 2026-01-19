import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const classes = [
  { name: "Beginner French", progress: 70, color: "bg-teal" },
  { name: "Intermediate English", progress: 64, color: "bg-primary" },
  { name: "Spanish A1", progress: 46, color: "bg-rose" },
  { name: "Korean Intermediate", progress: 42, color: "bg-emerald" },
];

export const ActiveClassesCard = () => {
  return (
    <Card className="bg-card border-none shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-foreground">Active Classes</CardTitle>
        <button className="text-sm text-primary hover:underline font-medium">
          see more
        </button>
      </CardHeader>
      <CardContent className="space-y-4">
        {classes.map((cls) => (
          <div key={cls.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 ${cls.color} rotate-45`} />
                <span className="text-sm font-medium text-foreground">{cls.name}</span>
              </div>
              <span className="text-sm font-semibold text-foreground">{cls.progress}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className={`h-full ${cls.color} rounded-full transition-all duration-500`}
                style={{ width: `${cls.progress}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
