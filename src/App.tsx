import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "@/pages/Dashboard";
import PortalLayout from "@/components/layouts/PortalLayout";
import StudentsPage from "@/pages/Students";
import StudentDetail from "@/pages/StudentDetail";
import AnalyticsPage from "@/pages/Analytics";
import ReportsPage from "@/pages/Reports";
import IntegrationPage from "@/pages/Integration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route element={<PortalLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/integration" element={<IntegrationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
