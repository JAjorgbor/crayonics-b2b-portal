import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AlertCircle, Trophy } from "lucide-react";
// Recharts removed for simplification

export function AnalyticsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight">Program Insights</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Simplified Metric 1 */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Active</div>
            <p className="text-xs text-muted-foreground">
              High engagement this week
            </p>
          </CardContent>
        </Card>

        {/* Simplified Metric 2 */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">On Track</div>
            <p className="text-xs text-muted-foreground">
              Most students meeting deadlines
            </p>
          </CardContent>
        </Card>

        {/* Action Needed Card */}
        <Card className="bg-red-50 border-red-100 shadow-sm">
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
              <AlertCircle className="h-5 w-5 text-red-600" />
            </div>
            <CardTitle className="text-red-900 text-base">
              Attention Needed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-sm text-red-800">
              <li>3 students inactive (7+ days)</li>
              <li>2 projects overdue</li>
            </ul>
          </CardContent>
        </Card>

        {/* Top Performers Card */}
        <Card className="bg-indigo-50 border-indigo-100 shadow-sm">
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
              <Trophy className="h-5 w-5 text-indigo-600" />
            </div>
            <CardTitle className="text-indigo-900 text-base">
              Top Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-sm text-indigo-800">
              <li>5 students &gt; 85 ARS</li>
              <li>Class avg +20%</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
