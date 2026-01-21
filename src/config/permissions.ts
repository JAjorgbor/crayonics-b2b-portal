import type { Role, Permission } from "@/types/auth";

export const PERMISSIONS: Record<Role, Permission[]> = {
  super_admin: [
    "view:analytics",
    "view:admin_dashboard",
    "manage:users",
    "manage:roles",
    "manage:system",
    "view:reports_tier1",
    "view:reports_tier2",
    "manage:students",
    "manage:projects",
  ],
  dept_admin: [
    "view:analytics",
    "view:admin_dashboard",
    "manage:users", // Scoped to dept
    "view:reports_tier1",
    "view:reports_tier2",
    "manage:students",
    "manage:projects",
  ],
  program_coordinator: [
    "view:analytics",
    "manage:students",
    "manage:projects",
    "view:reports_tier1",
  ],
  faculty: [
    "manage:students", // Scoped to courses
    "manage:projects",
    "view:reports_tier1", // limited
  ],
  career_services: [
    "view:analytics",
    "view:reports_tier1",
    "view:reports_tier2",
  ],
  it_admin: ["view:admin_dashboard", "manage:system", "manage:users"],
  read_only_admin: [
    "view:analytics",
    "view:admin_dashboard",
    "view:reports_tier1",
  ],
};

export const hasPermission = (
  userRole: Role,
  permission: Permission,
): boolean => {
  const userPermissions = PERMISSIONS[userRole];
  return userPermissions?.includes(permission) || false;
};
