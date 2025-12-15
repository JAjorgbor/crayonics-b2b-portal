import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  BarChart3,
  Unlock,
  MoreVertical,
  Download,
  Copy,
  Archive,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock Data
  const project = {
    id: id,
    title: "Copilot Gone Rogue",
    description:
      "In this hands-on simulation, students must investigate an AI coding assistant that has begun suggesting insecure and inefficient code patterns. They will need to identify the vulnerabilities, debug the AI's suggestions, and implement safeguards.",
    status: "Active",
    difficulty: "Intermediate",
    time: "4-6 hours",
    objectives: [
      "Identify common security vulnerabilities in AI-generated code",
      "Debug logic errors introduced by LLM hallucinations",
      "Implement robust unit tests to catch regression",
      "Document findings in a technical post-mortem",
    ],
    skills: [
      { name: "Technical Depth", val: 85 },
      { name: "AI Collaboration", val: 90 },
      { name: "Problem Diagnosis", val: 75 },
      { name: "Communication", val: 80 },
      { name: "Ethical Judgment", val: 70 },
    ],
  };

  const students = [
    {
      id: 1,
      name: "Alice Johnson",
      progress: 100,
      score: 92,
      status: "Completed",
      time: "5h 20m",
      lastActive: "1 day ago",
    },
    {
      id: 2,
      name: "Bob Smith",
      progress: 45,
      score: 78,
      status: "In Progress",
      time: "2h 15m",
      lastActive: "2 hours ago",
    },
    {
      id: 3,
      name: "Charlie Brown",
      progress: 10,
      score: 0,
      status: "At Risk",
      time: "30m",
      lastActive: "5 days ago",
    },
    {
      id: 4,
      name: "Diana Prince",
      progress: 80,
      score: 88,
      status: "In Progress",
      time: "4h 45m",
      lastActive: "10 mins ago",
    },
    {
      id: 5,
      name: "Evan Wright",
      progress: 0,
      score: 0,
      status: "Not Started",
      time: "0m",
      lastActive: "Never",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-purple-100 text-purple-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "At Risk":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 animate-in fade-in duration-500">
      <Button
        variant="ghost"
        className="text-muted-foreground pl-0 hover:text-indigo-600 hover:bg-transparent"
        onClick={() => navigate("/projects")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
      </Button>

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between border-b pb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {project.title}
            </h1>
            <Badge className="bg-green-500 hover:bg-green-600">
              {project.status}
            </Badge>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <BarChart3 className="h-4 w-4" /> {project.difficulty}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {project.time}
            </span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2 mr-4">
            <input
              type="checkbox"
              id="lock-mode"
              className="accent-indigo-600 h-4 w-4"
            />
            <label
              htmlFor="lock-mode"
              className="text-sm font-medium text-slate-700 cursor-pointer flex items-center gap-1"
            >
              <Unlock className="h-3 w-3" /> Unlock for Cohort
            </label>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            Assign to Cohort
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Overview & Stats */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview Card */}
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-600 leading-relaxed">
                {project.description}
              </p>

              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wide text-slate-500 mb-3">
                  Learning Objectives
                </h4>
                <ul className="grid gap-2">
                  {project.objectives.map((obj, i) => (
                    <li
                      key={i}
                      className="flex gap-2 items-start text-slate-700"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Student Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Student Progress</CardTitle>
              <CardDescription>Real-time cohort tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>ARS Score</TableHead>
                    <TableHead>Time Spent</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Last Active</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs">
                              {student.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          {student.name}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 w-24">
                          <Progress value={student.progress} className="h-2" />
                          <span className="text-xs text-muted-foreground">
                            {student.progress}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="font-bold text-slate-700">
                        {student.score > 0 ? student.score : "-"}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {student.time}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={getStatusColor(student.status)}
                        >
                          {student.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right text-muted-foreground text-sm">
                        {student.lastActive}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Skills, Analytics, Admin */}
        <div className="space-y-8">
          {/* Skills Assessed */}
          <Card>
            <CardHeader>
              <CardTitle>Skills Assessed</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {project.skills.map((skill, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground">
                      {skill.val}% Impact
                    </span>
                  </div>
                  <Progress value={skill.val} className="h-1.5" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Analytics Placeholders */}
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-center">
                <span className="block text-2xl font-bold text-indigo-600">
                  68%
                </span>
                <span className="text-xs text-muted-foreground">
                  Cohort Completion Rate
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-center">
                <span className="block text-2xl font-bold text-indigo-600">
                  82/100
                </span>
                <span className="text-xs text-muted-foreground">
                  Average ARS Score
                </span>
              </div>
              <div className="h-32 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 border-dashed">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <BarChart3 className="h-3 w-3" /> Distribution Chart
                  Placeholder
                </span>
              </div>
            </CardContent>
          </Card>

          {/* AI Feedback Snippets */}
          <Card className="bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-800">
                <Brain className="h-5 w-5" /> AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/60 p-3 rounded-md border border-indigo-100">
                <p className="text-xs text-indigo-600 font-bold mb-1 uppercase">
                  Common Mistake
                </p>
                <p className="text-sm text-slate-700">
                  30% of students missed the race condition in the `App.tsx`
                  useEffect hook.
                </p>
              </div>
              <div className="bg-white/60 p-3 rounded-md border border-indigo-100">
                <p className="text-xs text-green-600 font-bold mb-1 uppercase">
                  Strength Pattern
                </p>
                <p className="text-sm text-slate-700">
                  Excellent handling of input sanitization across the cohort.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Admin Controls */}
          <Card>
            <CardHeader>
              <CardTitle>Admin Controls</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Button variant="outline" className="justify-start gap-2">
                <MoreVertical className="h-4 w-4" /> Edit Metadata
              </Button>
              <Button variant="outline" className="justify-start gap-2">
                <Copy className="h-4 w-4" /> Duplicate Project
              </Button>
              <Button variant="outline" className="justify-start gap-2">
                <Download className="h-4 w-4" /> Export Data (CSV)
              </Button>
              <Button
                variant="outline"
                className="justify-start gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <Archive className="h-4 w-4" /> Archive Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
