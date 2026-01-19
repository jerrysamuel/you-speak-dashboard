import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const arenaData = [
  {
    rank: 1,
    medal: "🥇",
    class: "Grade 10 - Spanish",
    points: "2,450 SPK",
    topPerformer: "Maria Santos",
  },
  {
    rank: 2,
    medal: "🥈",
    class: "Grade 9 - French",
    points: "2,120 SPK",
    topPerformer: "Jean Dupont",
  },
  {
    rank: 3,
    medal: "🥉",
    class: "Grade 11 - Korean",
    points: "1,890 SPK",
    topPerformer: "Kim Min-ji",
  },
];

export const ArenaParticipation = () => {
  return (
    <Card className="bg-card border-none shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-foreground">
          Arena participation summary
        </CardTitle>
        <button className="text-sm text-primary hover:underline font-medium">
          see all
        </button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="text-muted-foreground font-medium">Rank</TableHead>
              <TableHead className="text-muted-foreground font-medium">Class</TableHead>
              <TableHead className="text-muted-foreground font-medium">Points Earned</TableHead>
              <TableHead className="text-muted-foreground font-medium">Top Performer</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {arenaData.map((item) => (
              <TableRow key={item.rank} className="border-border">
                <TableCell className="font-medium">
                  <span className="text-xl">{item.medal}</span>
                </TableCell>
                <TableCell className="text-foreground font-medium">{item.class}</TableCell>
                <TableCell className="text-foreground">{item.points}</TableCell>
                <TableCell className="text-foreground">{item.topPerformer}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
