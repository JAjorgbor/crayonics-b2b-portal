import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AlertCircle, Trophy } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const completionData = [
  { name: "Week 1", rate: 20 },
  { name: "Week 2", rate: 45 },
  { name: "Week 3", rate: 60 },
  { name: "Week 4", rate: 75 },
  { name: "Week 5", rate: 82 },
  { name: "Week 6", rate: 87 },
];

const gradeDistribution = [
  { range: "0-50", count: 2 },
  { range: "51-70", count: 8 },
  { range: "71-85", count: 25 },
  { range: "86-100", count: 15 },
];

export function AnalyticsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">
        Analytics & Insights
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Completion Rate Over Time</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={completionData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E2E8F0"
                />
                <XAxis
                  dataKey="name"
                  stroke="#64748B"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#64748B"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                  }}
                  cursor={{ stroke: "#6366f1", strokeWidth: 1 }}
                />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#4f46e5"
                  strokeWidth={3}
                  activeDot={{ r: 6, fill: "#4338ca" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-3 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>ARS Score Distribution</CardTitle>
            <CardDescription>Student performance ranges</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={gradeDistribution}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E2E8F0"
                />
                <XAxis
                  dataKey="range"
                  stroke="#64748B"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  cursor={{ fill: "#f1f5f9" }}
                  contentStyle={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                  }}
                />
                <Bar
                  dataKey="count"
                  fill="#6366f1"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-red-50 border-red-100 shadow-sm">
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
              <AlertCircle className="h-5 w-5 text-red-600" />
            </div>
            <CardTitle className="text-red-900 text-lg">
              Attention Needed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-red-800">
              <li>3 students haven't logged in for 7+ days</li>
              <li>2 projects overdue in "Introduction to React"</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-indigo-50 border-indigo-100 shadow-sm">
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
              <Trophy className="h-5 w-5 text-indigo-600" />
            </div>
            <CardTitle className="text-indigo-900 text-lg">
              Top Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-indigo-800">
              <li>5 students with ARS above 85</li>
              <li>Class average up by 20% this week</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
