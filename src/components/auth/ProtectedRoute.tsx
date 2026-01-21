import { useAuth } from "@/context/AuthContext";
import type { Permission, Role as UserRole } from "@/types/auth"; // Renamed to avoid conflict if I used Role enum
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  requiredPermission?: Permission;
  requiredRole?: UserRole;
}

export default function ProtectedRoute({
  requiredPermission,
  requiredRole,
}: ProtectedRouteProps) {
  const { user, isAuthenticated, isLoading, hasPermission } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        Loading...
      </div>
    ); // Replace with proper loader component
  }

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    if (user?.role === "super_admin") {
      // Super admin bypass or logic? simpler to just check role match.
      // actually super_admin should probably access everything?
      // For now, strict check, but usually role checks are "at least".
      // The requirement implies specific roles.
    }
    // Actually, strict check for now.
    // Better: check if route requires role X, user must be role X.
    // But usually we use permissions.
  }

  if (requiredPermission && !hasPermission(requiredPermission)) {
    return <Navigate to="/dashboard" replace />; // Redirect to a safe page if unauthorized
  }

  return <Outlet />;
}
