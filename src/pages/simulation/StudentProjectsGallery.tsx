import { useState } from "react";
import { MOCK_PROJECTS, MOCK_STUDENTS } from "@/data/mockSimulationData";
import type { SimProject } from "@/data/mockSimulationData";
import ProjectCard from "./components/ProjectCard";
import StudentContextSelector from "./components/StudentContextSelector";
import ProjectDetailPreview from "./components/ProjectDetailPreview";
import { Input } from "@/components/ui/input";
import { Search, ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function StudentProjectsGallery() {
  const [selectedStudentId, setSelectedStudentId] = useState(
    MOCK_STUDENTS[0].id,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<SimProject | null>(
    null,
  );

  // Filter Logic
  const filteredProjects = MOCK_PROJECTS.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesStatus =
      statusFilter === "all" || project.status === statusFilter;

    // In a real app, projects would be fetched per student.
    // Here we just use the static list for all, but status might vary if we had deep mock data.
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 pt-6 px-4 md:px-8 pb-12 max-w-7xl mx-auto">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Student View Link
          </h1>
          <Badge
            variant="secondary"
            className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200"
          >
            Preview Mode
          </Badge>
        </div>
        <p className="text-slate-500 dark:text-slate-400">
          See exactly what students see in their project gallery.
        </p>
      </div>

      {/* Context Selector */}
      <StudentContextSelector
        selectedStudentId={selectedStudentId}
        onStudentChange={setSelectedStudentId}
      />

      {/* Gallery Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input
            placeholder="Search projects by title or skill..."
            className="pl-9 h-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-10 w-[160px]">
              <div className="flex items-center gap-2">
                <ListFilter className="w-4 h-4" />
                <SelectValue placeholder="Status" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="assigned">Assigned</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="submitted">Submitted</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-lg border border-dashed border-slate-200">
          <p className="text-slate-500">
            No projects found matching your filters.
          </p>
          <Button
            variant="link"
            onClick={() => {
              setSearchQuery("");
              setStatusFilter("all");
            }}
          >
            Clear filters
          </Button>
        </div>
      )}

      {/* Detail Preview Sheet */}
      <ProjectDetailPreview
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
