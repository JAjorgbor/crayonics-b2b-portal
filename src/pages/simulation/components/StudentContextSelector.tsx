import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MOCK_STUDENTS } from "@/data/mockSimulationData";

interface StudentContextSelectorProps {
  selectedStudentId: string;
  onStudentChange: (id: string) => void;
}

export default function StudentContextSelector({
  selectedStudentId,
  onStudentChange,
}: StudentContextSelectorProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 flex flex-col md:flex-row gap-4 md:items-center justify-between">
      <div className="flex justify-start items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs ring-2 ring-white shadow-sm">
          {MOCK_STUDENTS.find((s) => s.id === selectedStudentId)
            ?.avatarInitials || "ST"}
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
            Viewing as Project Student
          </span>
          <div className="font-medium text-slate-900 dark:text-white text-sm">
            Simulating experience for student...
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-start">
        <div className="w-full ">
          <Select value={selectedStudentId} onValueChange={onStudentChange}>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Select Student" />
            </SelectTrigger>
            <SelectContent>
              {MOCK_STUDENTS.map((student) => (
                <SelectItem key={student.id} value={student.id}>
                  {student.name} - {student.cohort}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
