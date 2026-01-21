import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "@/pages/Dashboard";
import PortalLayout from "@/components/layouts/PortalLayout";
import StudentsPage from "@/pages/Students";
import StudentDetail from "@/pages/StudentDetail";
import ProjectsPage from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import AnalyticsPage from "@/pages/Analytics";
import SettingsPage from "@/pages/Settings";
import HelpSupportPage from "@/pages/HelpSupport";
import UserManagement from "@/pages/admin/UserManagement";
import SystemConfig from "@/pages/admin/SystemConfig";
import ReportsPage from "@/pages/admin/Reports";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route element={<PortalLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/help" element={<HelpSupportPage />} />

        {/* Administration Section */}
        <Route
          element={<ProtectedRoute requiredPermission="view:admin_dashboard" />}
        >
          <Route path="/admin/users" element={<UserManagement />} />
        </Route>
        <Route element={<ProtectedRoute requiredPermission="manage:system" />}>
          <Route path="/admin/system" element={<SystemConfig />} />
        </Route>
        <Route
          element={<ProtectedRoute requiredPermission="view:reports_tier1" />}
        >
          <Route path="/reports" element={<ReportsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
