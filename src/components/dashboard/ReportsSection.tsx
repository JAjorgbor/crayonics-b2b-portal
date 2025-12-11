import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileText,
  Download,
  Calendar,
  BarChart,
  FileSpreadsheet,
} from "lucide-react";

export function ReportsSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Reports & Exports</h2>
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          <Download className="mr-2 h-4 w-4" />
          Download All Student Data
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:bg-slate-50 transition-colors cursor-pointer border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <FileText className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="space-y-1">
              <CardTitle className="text-base">Student Progress</CardTitle>
              <CardDescription>PDF Format</CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="hover:bg-slate-50 transition-colors cursor-pointer border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <FileSpreadsheet className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="space-y-1">
              <CardTitle className="text-base">Class Performance</CardTitle>
              <CardDescription>Excel Format</CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="hover:bg-slate-50 transition-colors cursor-pointer border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <BarChart className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="space-y-1">
              <CardTitle className="text-base">ARS Analysis</CardTitle>
              <CardDescription>CSV Export</CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="hover:bg-slate-50 transition-colors cursor-pointer border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Calendar className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="space-y-1">
              <CardTitle className="text-base">Employment Readiness</CardTitle>
              <CardDescription>Detailed Analysis</CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
