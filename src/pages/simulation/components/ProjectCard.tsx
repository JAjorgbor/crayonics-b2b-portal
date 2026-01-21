import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { SimProject } from "@/data/mockSimulationData";
import { Calendar, CheckCircle2, Circle, Clock, FileText } from "lucide-react";

interface ProjectCardProps {
  project: SimProject;
  onClick: (project: SimProject) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500 hover:bg-emerald-600";
      case "submitted":
        return "bg-blue-500 hover:bg-blue-600";
      case "in_progress":
        return "bg-amber-500 hover:bg-amber-600";
      default:
        return "bg-slate-500 hover:bg-slate-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-3 h-3 mr-1" />;
      case "submitted":
        return <FileText className="w-3 h-3 mr-1" />;
      case "in_progress":
        return <Clock className="w-3 h-3 mr-1" />;
      default:
        return <Circle className="w-3 h-3 mr-1" />;
    }
  };

  return (
    <Card
      className="flex flex-col h-full hover:shadow-md transition-shadow cursor-pointer border-slate-200 dark:border-slate-800"
      onClick={() => onClick(project)}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between flex-wrap items-start gap-2">
          <div className="space-y-1">
            {project.recommended && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full mb-1 inline-block">
                Recommended
              </span>
            )}
            <CardTitle className="text-lg leading-tight">
              {project.title}
            </CardTitle>
          </div>
          <Badge
            className={`${getStatusColor(project.status)} text-white border-0 flex items-center whitespace-nowrap `}
          >
            {getStatusIcon(project.status)}
            <span className="capitalize">
              {project.status.replace("_", " ")}
            </span>
          </Badge>
        </div>
        <CardDescription className="line-clamp-2 mt-1">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-3 grow">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md dark:bg-slate-800 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-slate-500">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-1.5" />
        </div>
      </CardContent>
      <CardFooter className="pt-0 text-xs text-slate-500 flex items-center gap-1.5">
        <Calendar className="w-3.5 h-3.5" />
        <span>Due {new Date(project.dueDate).toLocaleDateString()}</span>
      </CardFooter>
    </Card>
  );
}
