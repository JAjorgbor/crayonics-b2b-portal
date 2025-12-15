import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import {
  Search,
  Filter,
  Download,
  MoreVertical,
  Bell,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data matching the screenshot
const STUDENTS = [
  {
    id: 1,
    name: "Alex Chen",
    email: "alex.chen@school.edu",
    project: "Copilot Gone Rogue",
    progress: 30,
    ars: "71/100",
    lastActive: "2 hours ago",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Miller",
    email: "sarah.m@school.edu",
    project: "React Fundamentals",
    progress: 100,
    ars: "95/100",
    lastActive: "1 day ago",
    status: "Completed",
  },
  {
    id: 3,
    name: "James Wilson",
    email: "j.wilson@school.edu",
    project: "AI Ethics Module",
    progress: 15,
    ars: "45/100",
    lastActive: "5 days ago",
    status: "At Risk",
  },
  {
    id: 4,
    name: "Maria Rodriguez",
    email: "maria.r@school.edu",
    project: "Advanced State Management",
    progress: 60,
    ars: "82/100",
    lastActive: "3 hours ago",
    status: "Active",
  },
  {
    id: 5,
    name: "David Kim",
    email: "d.kim@school.edu",
    project: "Copilot Gone Rogue",
    progress: 90,
    ars: "88/100",
    lastActive: "4 hours ago",
    status: "Active",
  },
  {
    id: 6,
    name: "Emily White",
    email: "emily.w@school.edu",
    project: "Intro to Algorithms",
    progress: 5,
    ars: "0/100",
    lastActive: "1 week ago",
    status: "At Risk",
  },
  {
    id: 7,
    name: "Michael Brown",
    email: "m.brown@school.edu",
    project: "React Fundamentals",
    progress: 100,
    ars: "92/100",
    lastActive: "2 days ago",
    status: "Completed",
  },
  {
    id: 8,
    name: "Lisa Garcia",
    email: "l.garcia@school.edu",
    project: "Data Structures",
    progress: 45,
    ars: "78/100",
    lastActive: "1 day ago",
    status: "Active",
  },
  {
    id: 9,
    name: "Robert Taylor",
    email: "r.taylor@school.edu",
    project: "System Design Capstone",
    progress: 85,
    ars: "89/100",
    lastActive: "30 mins ago",
    status: "Active",
  },
  {
    id: 10,
    name: "Jennifer Lee",
    email: "jen.lee@school.edu",
    project: "Copilot Gone Rogue",
    progress: 100,
    ars: "98/100",
    lastActive: "3 days ago",
    status: "Completed",
  },
];

const TABS = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
  { label: "At Risk", value: "at risk" },
];

export function StudentRoster() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();
  const location = useLocation();

  const filteredStudents = STUDENTS.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || s.status.toLowerCase() === filter;
    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedStudents = filteredStudents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm font-medium">
            Active
          </span>
        );
      case "Completed":
        return (
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-md text-sm font-medium">
            Completed
          </span>
        );
      case "At Risk":
        return (
          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-md text-sm font-medium">
            At Risk
          </span>
        );
      default:
        return (
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm font-medium">
            {status}
          </span>
        );
    }
  };

  const getProgressBarColor = (progress: number) => {
    if (progress === 100) return "bg-indigo-500";
    if (progress >= 50) return "bg-indigo-500";
    if (progress <= 25) return "bg-orange-400";
    if (progress <= 40) return "bg-green-600";
    return "bg-indigo-500";
  };

  return (
    <div className="space-y-6">
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1
          className={cn(
            "text-2xl font-bold",
            location.pathname == "/students" && "text-indigo-600"
          )}
        >
          Students
        </h1>

        <div className="flex flex-1 md:justify-end gap-3">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for students..."
              className="pl-10 bg-white border-gray-200"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1); // Reset to page 1 on search
              }}
            />
          </div>
          <Button
            variant="outline"
            className="text-gray-600 gap-2 font-normal items-center"
          >
            <Filter className="h-4 w-4" /> Filter
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2">
            <Download className="h-4 w-4" />
            Export as CSV
          </Button>
        </div>
      </div>

      {/* Tabs and Reminder Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex gap-1 bg-gray-100/50 p-1 rounded-lg">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setFilter(tab.value);
                setCurrentPage(1); // Reset to page 1 on filter
              }}
              className={cn(
                "px-4 py-1.5 rounded-md text-sm font-medium transition-all",
                filter === tab.value
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/50"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <Button className="bg-orange-400 hover:bg-orange-500 text-white gap-2">
          <Bell className="h-4 w-4" />
          Send reminder to in active students
        </Button>
      </div>

      {/* Table Section */}
      <div className="rounded-lg border border-blue-200 bg-white shadow-sm overflow-x-auto ring-4 ring-blue-50/50 min-w-full max-w-0">
        <Table>
          <TableHeader className="bg-indigo-50/50">
            <TableRow className="hover:bg-indigo-50/50 border-b border-indigo-100">
              <TableHead className="font-semibold text-slate-700">
                Students Name
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Current Projects
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Progress
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                ARS Score
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Last Active
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Status
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedStudents.length > 0 ? (
              paginatedStudents.map((student) => (
                <TableRow
                  key={student.id}
                  className="cursor-pointer hover:bg-slate-50 transition-colors border-b border-gray-100 last:border-0"
                  onClick={() => navigate(`/students/${student.id}`)}
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="font-medium text-slate-800">
                        {student.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-600 font-medium">
                    {student.project}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3 w-[140px]">
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full",
                            getProgressBarColor(student.progress)
                          )}
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                      <div
                        className={cn(
                          "text-xs px-1.5 py-0.5 rounded text-white font-medium min-w-[35px] text-center",
                          getProgressBarColor(student.progress)
                        )}
                      >
                        {student.progress}%
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-600 font-medium">
                    {student.ars}
                  </TableCell>
                  <TableCell className="text-slate-600">
                    {student.lastActive}
                  </TableCell>
                  <TableCell>{getStatusBadge(student.status)}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4 text-slate-400" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No students found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-2">
        <p className="text-sm text-slate-600 font-medium">
          Showing {filteredStudents.length > 0 ? startIndex + 1 : 0} to{" "}
          {Math.min(startIndex + itemsPerPage, filteredStudents.length)} of{" "}
          {filteredStudents.length} entries
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 text-slate-600 disabled:opacity-50"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              onClick={() => handlePageChange(page)}
              className={cn(
                "h-8 w-8 p-0",
                currentPage === page
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              )}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 text-slate-600 disabled:opacity-50"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
