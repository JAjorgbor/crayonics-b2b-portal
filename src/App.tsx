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
      </Route>
    </Routes>
  );
}

export default App;
