import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown, Star, Check } from "lucide-react";

const curriculumItems = [
  {
    id: 1,
    title: "Basic greetings",
    description: "Master greetings, time and correct vocabularies to use",
    features: ["Greetings terminologies.", "Situational greetings."],
    language: "French",
    level: "A1 Intermediate",
    rating: 4.5,
    official: true,
  },
  {
    id: 2,
    title: "Business Negotiation",
    description: "Master the act of deal making with vocabulary focused on",
    features: ["Formal introductions", "Contract terminologies"],
    language: "French",
    level: "A1 Intermediate",
    rating: 4.5,
    official: true,
  },
  {
    id: 3,
    title: "Basic greetings",
    description: "Master greetings, time and correct vocabularies to use",
    features: ["Greetings terminologies.", "Situational greetings."],
    language: "French",
    level: "A1 Intermediate",
    rating: 4.5,
    official: true,
  },
];

const TeacherDashboard = () => {
  return (
    <DashboardLayout role="teacher">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Curriculum manager</h1>
          <p className="text-muted-foreground mt-1">
            Manage your course structure, choose to build from scratch, use our library or merge both.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search by topic or keyword..." 
              className="pl-10 bg-card border-border"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-border">
              Language <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="border-border">
              Class <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="border-border">
              Topic <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
            <Button className="bg-primary text-primary-foreground">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Curriculum Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculumItems.map((item) => (
            <Card key={item.id} className="overflow-hidden border-border">
              {/* Book Image */}
              <div className="relative h-48 bg-gradient-to-br from-amber-100 to-amber-50">
                {item.official && (
                  <span className="absolute top-3 left-3 bg-white text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                    <Check className="w-3 h-3 text-green-500" /> Official
                  </span>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-32 bg-teal-600 rounded shadow-lg flex items-center justify-center">
                    <span className="text-white text-xs text-center px-2">TÔI TỰ HỌC</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                {/* Tags */}
                <div className="flex gap-2">
                  <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                    {item.language}
                  </span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {item.level}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-1">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">({item.rating})</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" className="flex-1 border-border">
                    Preview
                  </Button>
                  <Button className="flex-1 bg-primary text-primary-foreground">
                    Upload
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
