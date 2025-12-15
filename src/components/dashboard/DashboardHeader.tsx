import { Card, CardContent } from "@/components/ui/card";
import { Users, FolderOpen, CheckCircle, Star } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome back to the Crayonics Partner Portal.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Enrolled Students */}
        <Card className="flex flex-col justify-between p-6 shadow-sm border-slate-100">
          <CardContent className="p-0 space-y-4">
            <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                Total Enrolled Students
              </p>
              <div className="text-4xl font-bold text-indigo-600 mt-2">50</div>
            </div>
          </CardContent>
        </Card>

        {/* Active Projects */}
        <Card className="flex flex-col justify-between p-6 shadow-sm border-slate-100">
          <CardContent className="p-0 space-y-4">
            <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
              <FolderOpen className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                Active Projects
              </p>
              <div className="text-4xl font-bold text-indigo-600 mt-2">3</div>
            </div>
          </CardContent>
        </Card>

        {/* Avg Completion Rate */}
        <Card className="flex flex-col justify-between p-6 shadow-sm border-slate-100">
          <CardContent className="p-0 space-y-4">
            <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                Average Completion Rate
              </p>
              <div className="text-4xl font-bold text-indigo-600 mt-2">87%</div>
            </div>
          </CardContent>
        </Card>

        {/* Avg ARS Score */}
        <Card className="flex flex-col justify-between p-6 shadow-sm border-slate-100">
          <CardContent className="p-0 space-y-4">
            <div className="h-10 w-10 bg-cyan-100 rounded-lg flex items-center justify-center">
              <Star className="h-5 w-5 text-cyan-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                Avg. ARS Score
              </p>
              <div className="text-4xl font-bold text-indigo-600 mt-2">
                73/100
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
