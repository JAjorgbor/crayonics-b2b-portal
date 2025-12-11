import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  Github,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

export default function StudentDetail() {
  const navigate = useNavigate();

  // Mock student data - in a real app fetch by ID
  const student = {
    name: "Alice Johnson",
    status: "Active",
    cohort: "Cohort 3",
    avatarSeed: "Alice Johnson",
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 animate-in fade-in duration-500">
      <Button
        variant="ghost"
        className="text-muted-foreground pl-0 hover:text-indigo-600 hover:bg-transparent"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Students
      </Button>

      {/* Header Profile Section */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between border-b pb-8">
        <div className="flex items-center gap-6">
          <Avatar className="h-24 w-24 border-4 border-white shadow-sm">
            <AvatarImage
              src={`https://api.dicebear.com/7.x/notionists/svg?seed=${student.avatarSeed}`}
            />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-3">
              {student.name}
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-green-200">
                {student.status}
              </Badge>
            </h1>
            <p className="text-lg text-muted-foreground mt-1">
              AI Resilience Program • {student.cohort}
            </p>
            <div className="flex gap-4 mt-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 12.5 hrs active
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" /> 14/20 modules
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">View Portfolio</Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            Message Student
          </Button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Sidebar / Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Overall Performance</CardTitle>
              <CardDescription>ARS Score Breakdown</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="text-center py-4">
                <span className="text-6xl font-bold text-indigo-600">88</span>
                <span className="text-muted-foreground text-sm uppercase tracking-wide block mt-2">
                  Total Score
                </span>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Technical Depth</span>
                    <span>85/100</span>
                  </div>
                  <Progress value={85} className="h-2 fill-indigo-600" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">AI Collaboration</span>
                    <span>92/100</span>
                  </div>
                  <Progress value={92} className="h-2 fill-indigo-600" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Problem Diagnosis</span>
                    <span>78/100</span>
                  </div>
                  <Progress value={78} className="h-2 fill-indigo-600" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Communication</span>
                    <span>88/100</span>
                  </div>
                  <Progress value={88} className="h-2 fill-indigo-600" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Ethical Judgment</span>
                    <span>74/100</span>
                  </div>
                  <Progress value={74} className="h-2 fill-indigo-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="#"
                className="flex items-center justify-between p-3 rounded-md hover:bg-slate-50 border transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-slate-700" />
                  <span className="font-medium text-sm">GitHub Profile</span>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-indigo-600" />
              </a>
              <a
                href="#"
                className="flex items-center justify-between p-3 rounded-md hover:bg-slate-50 border transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-700">
                    P
                  </div>
                  <span className="font-medium text-sm">Personal Website</span>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-indigo-600" />
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-2">
          <Tabs defaultValue="timeline" className="w-full">
            <TabsList className="w-full justify-start mb-6 border-b rounded-none h-auto p-0 bg-transparent gap-6">
              <TabsTrigger
                value="timeline"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3 font-medium"
              >
                Project Timeline
              </TabsTrigger>
              <TabsTrigger
                value="feedback"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3 font-medium"
              >
                AI Feedback History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="timeline" className="space-y-6">
              <div className="relative pl-8 border-l border-slate-200 space-y-8">
                {/* Timeline Item 1 */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-1">
                    <div className="h-4 w-4 rounded-full bg-yellow-100 border-2 border-yellow-500"></div>
                  </div>
                  <div className="bg-white border rounded-lg p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">
                          AI Ethics Paper
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Module 3 • Research & Analysis
                        </p>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                        In Progress
                      </Badge>
                    </div>
                    <p className="text-slate-600 mb-4 line-clamp-2">
                      Exploring algorithmic bias in healthcare recruiting
                      systems.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> Started 2 days ago
                      </span>
                      <span className="flex items-center gap-1 font-medium text-indigo-600">
                        Due Dec 15
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-1">
                    <div className="h-4 w-4 rounded-full bg-green-100 border-2 border-green-500"></div>
                  </div>
                  <div className="bg-white border rounded-lg p-5 shadow-sm opacity-90">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">
                          React Portfolio
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Module 2 • Frontend Development
                        </p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-3 p-3 bg-slate-50 rounded-md border border-slate-100">
                      <div className="text-center">
                        <span className="block text-xl font-bold text-slate-900">
                          95
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Score
                        </span>
                      </div>
                      <div className="text-center border-l border-slate-200">
                        <span className="block text-xl font-bold text-slate-900">
                          A
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Grade
                        </span>
                      </div>
                      <div className="text-center border-l border-slate-200">
                        <span className="block text-xl font-bold text-slate-900">
                          4h
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Time
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-1">
                    <div className="h-4 w-4 rounded-full bg-slate-100 border-2 border-slate-300"></div>
                  </div>
                  <div className="bg-white border rounded-lg p-5 shadow-sm opacity-60">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">
                          Capstone Project
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Module 4 • Final Assessment
                        </p>
                      </div>
                      <Badge variant="secondary">Locked</Badge>
                    </div>
                    <p className="text-slate-500 text-sm">
                      Prerequisites not met yet.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="feedback" className="space-y-4">
              {/* Feedback Items */}
              {[1, 2, 3].map((i) => (
                <Card
                  key={i}
                  className="hover:border-indigo-200 transition-colors"
                >
                  <CardContent className="p-5 flex gap-4">
                    <div className="mt-1">
                      <div className="h-10 w-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-indigo-600" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center w-full">
                        <h4 className="font-semibold text-slate-900">
                          Feedback on "Ethics Paper"
                        </h4>
                        <span className="text-xs text-muted-foreground">
                          2 days ago
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        "Looking good overall. I suggest diving deeper into the
                        nuances of data collection methods. Have you considered
                        looking at..."
                      </p>
                      <div className="pt-2">
                        <Badge
                          variant="outline"
                          className="text-indigo-600 border-indigo-200 bg-indigo-50"
                        >
                          AI Critique
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
