import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const announcements = [
  {
    id: 1,
    title: "AI pronunciation tools upgraded",
    description: "New accent recognition feature now available for Spanish and French courses.",
    timestamp: "Today, 10:00am",
  },
  {
    id: 2,
    title: "Intermediate Kanji deck now available",
    description: "500 new characters added to the Japanese curriculum for intermediate learners.",
    timestamp: "Yesterday, 3:00pm",
  },
  {
    id: 3,
    title: "Holiday schedule update",
    description: "Classes will resume on January 3rd. Happy holidays to all!",
    timestamp: "Dec 20, 9:00am",
  },
];

export const RecentAnnouncements = () => {
  return (
    <Card className="bg-card border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-foreground">
          Recent Announcements
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="border-l-4 border-primary pl-4 py-2"
          >
            <h4 className="text-sm font-semibold text-foreground">
              {announcement.title}
            </h4>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {announcement.description}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              {announcement.timestamp}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
