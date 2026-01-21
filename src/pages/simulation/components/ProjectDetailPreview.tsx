import type { SimProject } from "@/data/mockSimulationData";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, AlertCircle, Bot } from "lucide-react";

interface ProjectDetailPreviewProps {
  project: SimProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailPreview({
  project,
  isOpen,
  onClose,
}: ProjectDetailPreviewProps) {
  if (!project) return null;

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="overflow-y-auto sm:max-w-md md:max-w-lg">
        <SheetHeader className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="capitalize">
              {project.status.replace("_", " ")}
            </Badge>
            {project.recommended && (
              <Badge
                variant="secondary"
                className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50"
              >
                Recommended
              </Badge>
            )}
          </div>
          <SheetTitle className="text-2xl">{project.title}</SheetTitle>
          <SheetDescription>{project.description}</SheetDescription>
        </SheetHeader>

        <div className="space-y-8 px-5">
          {/* Progress Section */}
          <section className="space-y-3 bg-slate-50 p-4 rounded-lg border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
            <h3 className="font-medium text-slate-900 dark:text-white flex items-center justify-between">
              Your Progress
              <span className="text-sm font-normal text-slate-500">
                {project.progress}%
              </span>
            </h3>
            <Progress value={project.progress} className="h-2" />
            <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
              <ClockIcon className="w-3.5 h-3.5" />
              <span>Last active: 2 days ago</span>
            </div>
          </section>

          {/* What you'll build */}
          <section className="space-y-3">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              What you'll build
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              In this project, you will apply the concepts learned in Module 3.
              You are expected to demonstrate understanding of core principles
              by creating a functional prototype that addresses the problem
              statement.
            </p>
            <div className="space-y-2 mt-2">
              <div className="flex gap-2 items-start text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span>Functional prototype with valid inputs.</span>
              </div>
              <div className="flex gap-2 items-start text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span>Documentation of your design process.</span>
              </div>
              <div className="flex gap-2 items-start text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 shrink-0" />
                <span>Peer review reflection.</span>
              </div>
            </div>
          </section>

          <Separator />

          {/* Actions (Simulated) */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-amber-600 bg-amber-50 p-3 rounded-md text-sm mb-4">
              <AlertCircle className="w-4 h-4" />
              <span>Student View Simulation: Actions are disabled.</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button disabled className="w-full">
                Continue Project
              </Button>
              <Button disabled variant="outline" className="w-full">
                View Feedback
              </Button>
            </div>
          </section>

          {/* AI Feedback Snippet */}
          <section className="bg-indigo-50/50 border border-indigo-100 rounded-lg p-4 space-y-3 dark:bg-indigo-900/20 dark:border-indigo-800">
            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-medium text-sm">
              <Bot className="w-4 h-4" />
              <span>AI Project Coach</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 italic">
              "Great start on the methodology section! Consider expanding on
              your hypothesis variables. The current approach looks solid but
              could use more specific metrics."
            </p>
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
