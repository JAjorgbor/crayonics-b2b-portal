import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FolderOpen, CheckCircle, Star } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center">
            <span className="text-indigo-600 font-bold text-xs">SC</span>
          </div>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Your School Name Here
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          AI-Resilience Program Dashboard
        </h1>
        <p className="text-muted-foreground text-lg">
          Partner School Admin Dashboard
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="rounded-xl shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Total Enrolled Students
            </CardTitle>
            <Users className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">50</div>
            <p className="text-xs text-muted-foreground pt-1">
              +5% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-xl shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Active Projects
            </CardTitle>
            <FolderOpen className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">3</div>
            <p className="text-xs text-muted-foreground pt-1">
              All on schedule
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-xl shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Avg. Completion Rate
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">87%</div>
            <p className="text-xs text-muted-foreground pt-1">
              +2% from last week
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-xl shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Avg. ARS Score
            </CardTitle>
            <Star className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">73/100</div>
            <p className="text-xs text-muted-foreground pt-1">
              Top 10% of schools
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
