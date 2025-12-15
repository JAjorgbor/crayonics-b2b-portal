import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Layout,
  Lightbulb,
  Upload,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function StudentDetail() {
  const navigate = useNavigate();

  // Mock student data
  const student = {
    name: "Alex Chen",
    status: "At Risk",
    avatarSeed: "Alex Chen",
    progress: 68,
    arsScore: "71",
    lastActive: "2 Days ago",
    currentProject: "Copilot task",
  };

  const timelineSteps = [
    {
      label: "Research",
      status: "completed",
      icon: CheckCircle2,
      color: "text-green-500",
      barColor: "bg-green-600",
      bgColor: "bg-green-50",
    },
    {
      label: "Ideation",
      status: "in-progress",
      icon: Lightbulb,
      color: "text-orange-500",
      barColor: "bg-orange-400",
      bgColor: "bg-orange-50",
    },
    {
      label: "Wireframing",
      status: "delayed",
      icon: AlertCircle,
      color: "text-red-500",
      barColor: "bg-red-500",
      bgColor: "bg-red-50",
    },
    {
      label: "Prototyping",
      status: "pending",
      icon: Layout,
      color: "text-slate-400",
      barColor: "bg-slate-200",
      bgColor: "bg-slate-50",
    },
    {
      label: "Submission",
      status: "pending",
      icon: Upload,
      color: "text-slate-400",
      barColor: "bg-slate-200",
      bgColor: "bg-slate-50",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 animate-in fade-in duration-500">
      {/* Header Profile Section */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="flex items-center gap-6">
          <Avatar className="h-24 w-24 border-4 border-white shadow-sm">
            <AvatarImage
              src={`https://api.dicebear.com/7.x/notionists/svg?seed=${student.avatarSeed}`}
            />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {student.name}
              </h1>
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 border-none px-3 py-1 text-sm font-medium">
                {student.status}
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="bg-gray-100/50 hover:bg-gray-200/50 border-transparent text-slate-600"
          >
            Send Message
          </Button>
          <Button
            variant="outline"
            className="bg-gray-100/50 hover:bg-gray-200/50 border-transparent text-slate-600 gap-2"
          >
            View Activity Log
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-none shadow-sm bg-white">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-slate-500 mb-2">Progress</p>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-slate-900">
                {student.progress}%
              </span>
              <div className="h-2 flex-1 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-700 w-[68%] rounded-full" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-slate-500 mb-2">ARS Score</p>
            <div className="flex items-end gap-1">
              <span className="text-3xl font-bold text-slate-900">
                {student.arsScore}
              </span>
              <span className="text-xl text-slate-400 mb-1">/100</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-slate-500 mb-2">
              Last active
            </p>
            <span className="text-3xl font-bold text-slate-900">
              {student.lastActive}
            </span>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-slate-500 mb-2">
              Current Project
            </p>
            <span className="text-2xl font-bold text-slate-900">
              {student.currentProject}
            </span>
          </CardContent>
        </Card>
      </div>

      {/* Project Timeline */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-slate-800">
          Project Timeline
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            {timelineSteps.map((step, index) => (
              <div key={index} className="flex-1">
                <div
                  className={`flex items-center gap-2 mb-3 p-3 rounded-lg w-fit ${step.bgColor}`}
                >
                  <step.icon className={`h-5 w-5 ${step.color}`} />
                  <span className="font-medium text-slate-700">
                    {step.label}
                  </span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${step.barColor} ${
                      step.status === "completed"
                        ? "w-full"
                        : step.status === "in-progress"
                        ? "w-1/2"
                        : step.status === "delayed"
                        ? "w-1/3"
                        : "w-0"
                    }`}
                  />
                </div>
                <div className="mt-2">
                  {step.status === "completed" && (
                    <span className="text-xs text-slate-500 font-medium">
                      Completed
                    </span>
                  )}
                  {step.status === "in-progress" && (
                    <span className="text-xs text-orange-500 font-medium">
                      In progress
                    </span>
                  )}
                  {step.status === "delayed" && (
                    <span className="text-xs text-red-500 font-medium">
                      Delayed
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center text-sm text-slate-500 border-t pt-4 mt-4">
            <span>Time spent: 7hrs 45mins</span>
            <span>Needs to spend more time in ideation</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Engagements Stats */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-slate-800">
            Engagements Stats
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-slate-50/50 rounded-lg">
              <p className="text-sm font-medium text-slate-600 mb-2">
                Login Streak
              </p>
              <p className="text-2xl font-bold text-slate-900">
                4
                <span className="text-sm font-normal text-slate-500">Days</span>
              </p>
            </div>
            <div className="text-center p-4 bg-slate-50/50 rounded-lg border-l border-r border-slate-100">
              <p className="text-sm font-medium text-slate-600 mb-2">
                Total Hours
              </p>
              <p className="text-2xl font-bold text-slate-900">
                10
                <span className="text-sm font-normal text-slate-500">
                  hrs
                </span>{" "}
                22
                <span className="text-sm font-normal text-slate-500">mins</span>
              </p>
            </div>
            <div className="text-center p-4 bg-slate-50/50 rounded-lg">
              <p className="text-sm font-medium text-slate-600 mb-2">
                Completion Rate
              </p>
              <p className="text-3xl font-bold text-slate-900">72%</p>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-slate-800">
            Recent Activities
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-50 rounded-full">
                  <Upload className="h-4 w-4 text-indigo-600" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  Uploaded wireframes
                </span>
              </div>
              <span className="text-xs text-slate-400">1 hours ago</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-50 rounded-full">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  Completed onboarding
                </span>
              </div>
              <span className="text-xs text-slate-400">1 hours ago</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 rounded-full">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  Missed daily login
                </span>
              </div>
              <span className="text-xs text-slate-400">3 Days ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex items-center gap-3 text-red-800">
        <AlertCircle className="h-5 w-5 text-red-600" />
        <span className="font-medium">
          Low ARS Score and project delays detected. needs intervention to get
          back on track
        </span>
      </div>
    </div>
  );
}
