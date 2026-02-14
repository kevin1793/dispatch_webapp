// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
// import DispatcherDashboard from "./pages/DispatcherDashboard";
// import ContractorDashboard from "./pages/ContractorDashboard";
import AdminDemoDashboard from "./pages/AdminDemoDashboard";
import DispatcherDemoDashboard from "./pages/DispatcherDemoDashboard";
import FinanceDemoDashboard from "./pages/FinanceDemoDashboard";
import CreateJob from "./pages/CreateJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-demo-dashboard" element={<AdminDemoDashboard />} />
        <Route path="/dispatcher-demo-dashboard" element={<DispatcherDemoDashboard />} />
        <Route path="/finance-demo-dashboard" element={<FinanceDemoDashboard />} />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/create-job"
          element={
            <ProtectedRoute requiredRole="admin">
              <CreateJob />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/dispatcher-dashboard" element={<DispatcherDashboard />} />
        <Route path="/contractor-dashboard" element={<ContractorDashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
