// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
// import DispatcherDashboard from "./pages/DispatcherDashboard";
// import ContractorDashboard from "./pages/ContractorDashboard";
import CreateJob from "./pages/CreateJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
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
