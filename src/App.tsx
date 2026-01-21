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
import StaffManagement from "@/pages/admin/StaffManagement";
import SystemConfig from "@/pages/admin/SystemConfig";
import ReportsPage from "@/pages/admin/Reports";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import StudentProjectsGallery from "@/pages/simulation/StudentProjectsGallery";

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
          <Route path="/admin/staff" element={<StaffManagement />} />
        </Route>
        <Route element={<ProtectedRoute requiredPermission="manage:system" />}>
          <Route path="/admin/system" element={<SystemConfig />} />
        </Route>
        <Route
          element={<ProtectedRoute requiredPermission="view:reports_tier1" />}
        >
          <Route path="/reports" element={<ReportsPage />} />
        </Route>

        <Route
          element={
            <ProtectedRoute requiredPermission="simulate:student_view" />
          }
        >
          <Route
            path="/simulate/projects"
            element={<StudentProjectsGallery />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
