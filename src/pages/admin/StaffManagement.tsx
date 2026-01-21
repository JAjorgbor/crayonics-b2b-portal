import PermissionGate from "@/components/auth/PermissionGate";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Role } from "@/types/auth";
import { Filter, MoreHorizontal, Search, UserPlus } from "lucide-react";
import { useState } from "react";

// Mock Data
interface StaffData {
  id: string;
  name: string;
  email: string;
  role: Role;
  department: string;
  status: "active" | "inactive";
  lastActive: string;
}

const MOCK_STAFF_DATA: StaffData[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@school.edu",
    role: "dept_admin",
    department: "Engineering",
    status: "active",
    lastActive: "Today",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@school.edu",
    role: "faculty",
    department: "Engineering",
    status: "active",
    lastActive: "Yesterday",
  },
  {
    id: "4",
    name: "Diana Prince",
    email: "diana@school.edu",
    role: "program_coordinator",
    department: "Arts",
    status: "inactive",
    lastActive: "1 week ago",
  },
  {
    id: "5",
    name: "Evan Wright",
    email: "evan@school.edu",
    role: "faculty",
    department: "Arts",
    status: "active",
    lastActive: "Today",
  },
  {
    id: "6",
    name: "Frank Castle",
    email: "frank@school.edu",
    role: "it_admin",
    department: "IT Services",
    status: "active",
    lastActive: "Now",
  },
  {
    id: "7",
    name: "Grace Ho",
    email: "grace@school.edu",
    role: "career_services",
    department: "Career Center",
    status: "active",
    lastActive: "2 days ago",
  },
];

export default function StaffManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [staff] = useState(MOCK_STAFF_DATA);
  const [activeTab, setActiveTab] = useState("all");
  const [isAddOpen, setIsAddOpen] = useState(false);

  const filteredStaff = staff.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (activeTab === "all") return true;
    if (activeTab === "faculty") return user.role === "faculty";
    if (activeTab === "admins")
      return ["super_admin", "dept_admin", "program_coordinator"].includes(
        user.role,
      );
    if (activeTab === "support")
      return ["it_admin", "career_services", "read_only_admin"].includes(
        user.role,
      );

    return true;
  });

  return (
    <div className="space-y-6 pt-6 px-6 pb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Staff Management
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Manage faculty, administrators, and support staff access and roles.
          </p>
        </div>
        <PermissionGate permission="manage:users">
          <Button
            className="bg-indigo-600 hover:bg-indigo-700"
            onClick={() => setIsAddOpen(true)}
          >
            <UserPlus className="mr-2 h-4 w-4" /> Add Staff Member
          </Button>
        </PermissionGate>
      </div>

      <Tabs
        defaultValue="all"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList>
          <TabsTrigger value="all">All Staff</TabsTrigger>
          <TabsTrigger value="faculty">Faculty</TabsTrigger>
          <TabsTrigger value="admins">Administrators</TabsTrigger>
          <TabsTrigger value="support">Support & IT</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Staff Directory</CardTitle>
              <CardDescription>
                View and manage staff accounts across departments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4 gap-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                  <Input
                    placeholder="Search by name or email..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" /> Filter
                  </Button>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Last Active
                      </TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredStaff.length > 0 ? (
                      filteredStaff.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">
                            <div className="flex flex-col">
                              <span>{user.name}</span>
                              <span className="text-xs text-slate-500">
                                {user.email}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="capitalize">
                              {user.role.replace("_", " ")}
                            </Badge>
                          </TableCell>
                          <TableCell>{user.department}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                user.status === "active"
                                  ? "default"
                                  : "destructive"
                              }
                              className={cn(
                                "capitalize",
                                user.status === "active"
                                  ? "bg-emerald-500 hover:bg-emerald-600"
                                  : "",
                              )}
                            >
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell text-slate-500 text-sm">
                            {user.lastActive}
                          </TableCell>
                          <TableCell className="text-right">
                            <PermissionGate permission="manage:users">
                              <StaffActionMenu user={user} />
                            </PermissionGate>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="h-24 text-center">
                          No staff found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <AddStaffModal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} />
    </div>
  );
}

// ----------------------------------------------------------------------
// Sub-components for Modals and Actions
// ----------------------------------------------------------------------

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

function StaffActionMenu({ user }: { user: StaffData }) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDeactivate, setOpenDeactivate] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setOpenEdit(true)}>
            Edit Details
          </DropdownMenuItem>
          <DropdownMenuItem>Change Role</DropdownMenuItem>
          <DropdownMenuItem>Reset Password</DropdownMenuItem>
          <DropdownMenuItem
            className="text-red-600 focus:text-red-600 focus:bg-red-50"
            onClick={() => setOpenDeactivate(true)}
          >
            Deactivate Account
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditStaffModal
        user={user}
        isOpen={openEdit}
        onClose={() => setOpenEdit(false)}
      />
      <DeactivateStaffModal
        user={user}
        isOpen={openDeactivate}
        onClose={() => setOpenDeactivate(false)}
      />
    </>
  );
}

function AddStaffModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Staff Member</DialogTitle>
          <DialogDescription>
            Create a new account for faculty or administration.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="e.g. Sarah Connor" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="sarah@university.edu"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="faculty">Faculty</SelectItem>
                    <SelectItem value="dept_admin">Dept Admin</SelectItem>
                    <SelectItem value="program_coordinator">
                      Prog. Coordinator
                    </SelectItem>
                    <SelectItem value="it_admin">IT Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="department">Department</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Dept" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="arts">Arts & Design</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Account
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function EditStaffModal({
  user,
  isOpen,
  onClose,
}: {
  user: StaffData;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Staff Details</DialogTitle>
          <DialogDescription>
            Update information for {user.name}.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-name">Full Name</Label>
              <Input id="edit-name" defaultValue={user.name} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-email">Email Address</Label>
              <Input
                id="edit-email"
                type="email"
                defaultValue={user.email}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-department">Department</Label>
              <Input
                id="edit-department"
                defaultValue={user.department}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function DeactivateStaffModal({
  user,
  isOpen,
  onClose,
}: {
  user: StaffData;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeactivate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-red-600">Deactivate Account</DialogTitle>
          <DialogDescription>
            Are you sure you want to deactivate <strong>{user.name}</strong>?
            They will no longer be able to access the portal.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className=" sm:gap-0">
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={handleDeactivate}
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Deactivate
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
