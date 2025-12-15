import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Clock, Users, ArrowRight } from "lucide-react";

// Mock Data
const PROJECTS = [
  {
    id: 1,
    title: "Copilot Gone Rogue",
    description:
      "Investigate and debug an AI pair-programmer that suggests insecure code patterns.",
    type: "Debugging",
    difficulty: "Intermediate",
    time: "4-6 hours",
    enrolled: 24,
    status: "Active",
  },
  {
    id: 2,
    title: "Code Audit for Bias",
    description:
      "Audit a hiring algorithm for potential gender and racial biases in data selection.",
    type: "Ethics Audit",
    difficulty: "Advanced",
    time: "8-10 hours",
    enrolled: 18,
    status: "Active",
  },
  {
    id: 3,
    title: "Refactor AI-Spaghetti",
    description:
      "Clean up and optimize a codebase generated entirely by an LLM with poor structure.",
    type: "Refactoring",
    difficulty: "Beginner",
    time: "2-4 hours",
    enrolled: 45,
    status: "Active",
  },
  {
    id: 4,
    title: "Prompt Injection Defense",
    description:
      "Secure a customer service chatbot against various prompt injection attacks.",
    type: "Security",
    difficulty: "Intermediate",
    time: "5-7 hours",
    enrolled: 30,
    status: "Locked",
  },
  {
    id: 5,
    title: "LLM Fine-tuning Basics",
    description:
      "Prepare a dataset and fine-tune a small language model for specific tasks.",
    type: "Data Science",
    difficulty: "Advanced",
    time: "10-12 hours",
    enrolled: 5,
    status: "Archived",
  },
];

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredProjects = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (filterType === "all" ||
        p.type.toLowerCase() === filterType.toLowerCase())
  );

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Beginner":
        return "bg-green-100 text-green-700 hover:bg-green-200 border-green-200";
      case "Intermediate":
        return "bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200";
      case "Advanced":
        return "bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
        );
      case "Locked":
        return <Badge variant="secondary">Locked</Badge>;
      case "Archived":
        return <Badge variant="outline">Archived</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Projects
          </h1>
          <p className="text-muted-foreground mt-1">
            AI-Resilience Program Projects
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              className="pl-8 bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full sm:w-[180px] bg-white">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <SelectValue placeholder="Filter by Type" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="debugging">Debugging</SelectItem>
              <SelectItem value="ethics audit">Ethics Audit</SelectItem>
              <SelectItem value="refactoring">Refactoring</SelectItem>
              <SelectItem value="security">Security</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col h-full hover:shadow-md transition-all border-slate-200"
          >
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge
                  variant="outline"
                  className="text-xs font-normal text-muted-foreground"
                >
                  {project.type}
                </Badge>
                {getStatusBadge(project.status)}
              </div>
              <CardTitle className="text-xl text-indigo-900">
                {project.title}
              </CardTitle>
              <CardDescription className="line-clamp-2 mt-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="grow space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge
                  className={getDifficultyColor(project.difficulty)}
                  variant="outline"
                >
                  {project.difficulty}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {project.time}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {project.enrolled} enrolled
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <Button
                className="w-full bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 justify-between group"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                View Project
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
