export type Role =
  | "super_admin"
  | "dept_admin"
  | "program_coordinator"
  | "faculty"
  | "career_services"
  | "it_admin"
  | "read_only_admin";

export type Permission =
  | "view:analytics"
  | "view:admin_dashboard"
  | "manage:users"
  | "manage:roles"
  | "manage:system"
  | "view:reports_tier1"
  | "view:reports_tier2"
  | "manage:students"
  | "manage:projects";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
  departmentId?: string; // Scope enforcement
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
