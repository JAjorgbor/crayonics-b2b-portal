import { ReportsSection } from "@/components/dashboard/ReportsSection";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Reports & Export Center
        </h1>
        <p className="text-muted-foreground mt-1">
          Download data and schedule automated updates.
        </p>
      </div>

      <ReportsSection />

      <div className="grid gap-8 md:grid-cols-2 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Schedule Automated Reports</CardTitle>
            <CardDescription>
              Receive weekly summaries directly to your inbox.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="report-type">Report Type</Label>
              <Select defaultValue="weekly-summary">
                <SelectTrigger id="report-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily-digest">
                    Daily Activity Digest
                  </SelectItem>
                  <SelectItem value="weekly-summary">
                    Weekly Performance Summary
                  </SelectItem>
                  <SelectItem value="monthly-audit">
                    Monthly Class Audit
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Recipients</Label>
              <Input id="email" placeholder="admin@school.edu" type="email" />
              <p className="text-xs text-muted-foreground">
                Separate multiple emails with commas.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="frequency">Frequency</Label>
              <Select defaultValue="monday">
                <SelectTrigger id="frequency">
                  <SelectValue placeholder="Select day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monday">Every Monday</SelectItem>
                  <SelectItem value="friday">Every Friday</SelectItem>
                  <SelectItem value="first">1st of Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="bg-slate-50 border-t p-4 flex justify-end">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Clock className="mr-2 h-4 w-4" /> Save Schedule
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-indigo-900 text-white border-none">
          <CardHeader>
            <CardTitle className="text-white">Enterprise Data Export</CardTitle>
            <CardDescription className="text-indigo-200">
              Full raw data access for analysis tools.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-indigo-100">
            <p>
              Export every data point collected for your cohort, including
              granular time logs, interaction history, and full ARS component
              breakdowns.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>GDPR Compliant format</li>
              <li>Includes metadata & timestamps</li>
              <li>JSON or CSV format</li>
            </ul>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Button
              variant="secondary"
              className="w-full text-indigo-900 font-semibold"
            >
              Initiate Full Export
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
