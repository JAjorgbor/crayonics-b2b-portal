import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Clock, ExternalLink, Mail } from "lucide-react";

interface StudentDetailSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  student: any;
}

export function StudentDetailSheet({
  open,
  onOpenChange,
  student,
}: StudentDetailSheetProps) {
  if (!student) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto p-5">
        <SheetHeader className="mb-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src={`https://api.dicebear.com/7.x/notionists/svg?seed=${student.name}`}
              />
              <AvatarFallback>
                {student.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <SheetTitle className="text-xl">{student.name}</SheetTitle>
              <SheetDescription className="text-base flex items-center gap-2">
                Program: AI Resilience Cohort 3
                <Badge
                  variant={
                    student.status === "Active" ? "default" : "secondary"
                  }
                  className="ml-2"
                >
                  {student.status}
                </Badge>
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <div className="flex gap-2 mb-6">
          <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">
            <Mail className="mr-2 h-4 w-4" /> Send Reminder
          </Button>
          <Button variant="outline" className="flex-1">
            View Full Profile
          </Button>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                ARS Score Breakdown
              </h3>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Technical Depth</span>
                    <span>85/100</span>
                  </div>
                  <Progress
                    value={85}
                    className="h-2 "
                    indicatorClass="bg-indigo-500"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">AI Collaboration</span>
                    <span>92/100</span>
                  </div>
                  <Progress
                    value={92}
                    className="h-2 bg-indigo-100 "
                    indicatorClass="bg-indigo-500"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Problem Diagnosis</span>
                    <span>78/100</span>
                  </div>
                  <Progress
                    value={78}
                    className="h-2 "
                    indicatorClass="bg-indigo-500"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Communication</span>
                    <span>88/100</span>
                  </div>
                  <Progress
                    value={88}
                    className="h-2 "
                    indicatorClass="bg-indigo-500"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Ethical Judgment</span>
                    <span>74/100</span>
                  </div>
                  <Progress
                    value={74}
                    className="h-2 "
                    indicatorClass="bg-indigo-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Time Spent
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-2xl font-bold flex items-center">
                    12.5h <Clock className="ml-2 h-4 w-4 text-indigo-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Tasks Completed
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-2xl font-bold flex items-center">
                    14/20{" "}
                    <CheckCircle2 className="ml-2 h-4 w-4 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-slate-50">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">AI Ethics Paper</h4>
                    <p className="text-sm text-muted-foreground">
                      Due: Dec 15, 2025
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-yellow-100 text-yellow-800 border-yellow-200"
                  >
                    In Progress
                  </Badge>
                </div>
                <Progress value={45} className="h-1.5 mb-2" />
                <div className="flex justify-end">
                  <Button
                    variant="link"
                    size="sm"
                    className="h-auto p-0 text-indigo-600"
                  >
                    View Draft <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      React Portfolio
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Completed: Nov 20, 2025
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800 border-green-200"
                  >
                    Completed
                  </Badge>
                </div>
                <Progress value={100} className="h-1.5 mb-2 bg-green-100" />
                <div className="flex justify-end">
                  <Button
                    variant="link"
                    size="sm"
                    className="h-auto p-0 text-indigo-600"
                  >
                    View Submission <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg p-4 opacity-75">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-slate-700">
                      Capstone Project
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Starts: Jan 10, 2026
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-slate-100 text-slate-600"
                  >
                    Locked
                  </Badge>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-4">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="mt-1">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-indigo-600">
                      AI
                    </span>
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg flex-1">
                  <p className="text-sm font-medium text-slate-900 mb-1">
                    Feedback on "Ethics Paper"
                  </p>
                  <p className="text-sm text-slate-600">
                    Student demonstrates strong understanding of bias in
                    datasets but needs to elaborate more on mitigation
                    strategies.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    2 days ago
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-indigo-600">
                      AI
                    </span>
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg flex-1">
                  <p className="text-sm font-medium text-slate-900 mb-1">
                    Code Review: React Hooks
                  </p>
                  <p className="text-sm text-slate-600">
                    Excellent use of useMemo. Logic is clean and efficient.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    5 days ago
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
