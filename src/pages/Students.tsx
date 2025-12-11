import { StudentRoster } from "@/components/dashboard/StudentRoster";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export default function StudentsPage() {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Student Overview
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage and monitor student progress across all projects.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" /> Send Reminder
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Download className="mr-2 h-4 w-4" /> Export CSV
          </Button>
        </div>
      </div>

      <StudentRoster />
    </div>
  );
}
