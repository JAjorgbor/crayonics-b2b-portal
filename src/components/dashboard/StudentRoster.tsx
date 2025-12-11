import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Download } from "lucide-react";

// Mock Data
const STUDENTS = [
  {
    id: 1,
    name: "Alice Johnson",
    project: "AI Ethics Paper",
    progress: 85,
    ars: 88,
    lastActive: "2 min ago",
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Smith",
    project: "Neural Networks 101",
    progress: 45,
    ars: 72,
    lastActive: "1 day ago",
    status: "At Risk",
  },
  {
    id: 3,
    name: "Charlie Brown",
    project: "React Portfolio",
    progress: 100,
    ars: 95,
    lastActive: "5 hours ago",
    status: "Completed",
  },
  {
    id: 4,
    name: "Diana Prince",
    project: "AI Ethics Paper",
    progress: 30,
    ars: 65,
    lastActive: "3 days ago",
    status: "Active",
  },
  {
    id: 5,
    name: "Evan Wright",
    project: "Capstone",
    progress: 10,
    ars: 60,
    lastActive: "7 days ago",
    status: "At Risk",
  },
];

export function StudentRoster() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredStudents = STUDENTS.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || s.status.toLowerCase() === filter;
    return matchesSearch && matchesFilter;
  });

  const navigate = useNavigate();

  const handleRowClick = (student: any) => {
    navigate(`/students/${student.id}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700 hover:bg-green-200 border-green-200";
      case "Completed":
        return "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-indigo-200";
      case "At Risk":
        return "bg-red-100 text-red-700 hover:bg-red-200 border-red-200";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Student Roster</h2>
        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              className="pl-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[140px]">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <SelectValue placeholder="Filter" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="at risk">At Risk</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="rounded-md border border-slate-200 bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="font-semibold text-slate-600">
                Student Name
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Current Project
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Progress
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                ARS Score
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Last Active
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <TableRow
                  key={student.id}
                  className="cursor-pointer hover:bg-slate-50 transition-colors"
                  onClick={() => handleRowClick(student)}
                >
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.project}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden max-w-[80px]">
                        <div
                          className="h-full bg-indigo-500"
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {student.progress}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold text-slate-700">
                      {student.ars}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {student.lastActive}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={getStatusColor(student.status)}
                    >
                      {student.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
