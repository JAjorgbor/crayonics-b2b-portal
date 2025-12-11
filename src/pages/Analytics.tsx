import {
  Download,
  AlertTriangle,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
} from "recharts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock Data
const completionData = [
  { week: "Week 1", rate: 20 },
  { week: "Week 2", rate: 35 },
  { week: "Week 3", rate: 45 },
  { week: "Week 4", rate: 60 },
  { week: "Week 5", rate: 75 },
  { week: "Week 6", rate: 82 },
];

const arsDistributionData = [
  { range: "0-60", count: 2 },
  { range: "60-70", count: 5 },
  { range: "70-80", count: 12 },
  { range: "80-90", count: 8 },
  { range: "90-100", count: 3 },
];

const projectTypeData = [
  { name: "Frontend", value: 35 },
  { name: "Backend", value: 25 },
  { name: "AI/ML", value: 30 },
  { name: "Design", value: 10 },
];

const topPerformers = [
  { name: "Alice Johnson", score: 95, avatar: "Alice Johnson" },
  { name: "Charlie Brown", score: 92, avatar: "Charlie Brown" },
  { name: "Eve Wilson", score: 89, avatar: "Eve Wilson" },
  { name: "Grace Lee", score: 88, avatar: "Grace Lee" },
  { name: "Ian Clark", score: 86, avatar: "Ian Clark" },
];

export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Cohort Analytics
          </h1>
          <p className="text-muted-foreground mt-1">
            Deep dive into class performance and engagement trends.
          </p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" /> Export Report
        </Button>
      </div>

      {/* High-level KPIs */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg ARS Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.4</div>
            <p className="text-xs text-muted-foreground">+2.1 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Students
            </CardTitle>
            <Users className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28/30</div>
            <p className="text-xs text-muted-foreground">93% engagement rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg Time on Platform
            </CardTitle>
            <Clock className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4h 12m</div>
            <p className="text-xs text-muted-foreground">Per student / week</p>
          </CardContent>
        </Card>
        <Card className="bg-red-50 border-red-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-red-900">
              At Risk
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-700">3</div>
            <p className="text-xs text-red-600 font-medium">
              Haven't logged in for 7+ days
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Completion Rate Over Time */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Completion Rate Over Time</CardTitle>
            <CardDescription>
              Cumulative project submission progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={completionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="week"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#4f46e5"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#4f46e5" }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Performers List */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
            <CardDescription>Students with ARS above 85</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {topPerformers.map((student, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/notionists/svg?seed=${student.avatar}`}
                    />
                    <AvatarFallback>{student.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      {student.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Cohort 3
                    </p>
                  </div>
                </div>
                <div className="font-bold text-indigo-600">{student.score}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* ARS Score Distribution */}
        <Card className="col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>ARS Score Distribution</CardTitle>
            <CardDescription>Class performance bell curve</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={arsDistributionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="range"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{ borderRadius: "8px" }}
                />
                <Bar
                  dataKey="count"
                  fill="#818cf8"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Project Type Breakdown */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Project Type Breakdown</CardTitle>
            <CardDescription>
              Distribution of student specializations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={projectTypeData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={100}
                  tickLine={false}
                  axisLine={false}
                  fontSize={12}
                />
                <Tooltip cursor={{ fill: "#f8fafc" }} />
                <Bar
                  dataKey="value"
                  fill="#4f46e5"
                  radius={[0, 4, 4, 0]}
                  barSize={24}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
