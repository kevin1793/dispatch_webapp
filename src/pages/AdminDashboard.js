import React, { useEffect, useState } from "react";
import { getJobsCountByStatus } from "../utils/firebase";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newJobs, setNewJobs] = useState(0);
  const [activeJobs, setActiveJobs] = useState(0);
  const [assignedJobs, setAssignedJobs] = useState(0);

  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    async function fetchJobCounts() {
      setNewJobs(await getJobsCountByStatus("Created"));
      setActiveJobs(await getJobsCountByStatus("Active"));
      setAssignedJobs(await getJobsCountByStatus("Assigned"));
    }
    fetchJobCounts();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <div className="flex-1 flex flex-col">
        <Navbar onToggleSidebar={toggleSidebar} />

        <main className="flex-1 p-6">
          {/* Job Status Cards */}
          {/* Optional: Quick Create Job Card */}
          <div className="mb-8 bg-white rounded-lg shadow p-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Create a New Job</h2>
              <p className="text-gray-500">Quickly add a new dispatch job.</p>
            </div>
            <button
              onClick={() => navigate("/admin/create-job")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              + Create Job
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div
              className="bg-white rounded-lg shadow p-6 cursor-pointer hover:bg-gray-50 transition"
              onClick={() => navigate("/admin/jobs?status=Created")}
            >
              <h2 className="text-lg font-semibold mb-2">New Jobs</h2>
              <p className="text-2xl font-bold">{newJobs}</p>
            </div>

            <div
              className="bg-white rounded-lg shadow p-6 cursor-pointer hover:bg-gray-50 transition"
              onClick={() => navigate("/admin/jobs?status=Active")}
            >
              <h2 className="text-lg font-semibold mb-2">Active Jobs</h2>
              <p className="text-2xl font-bold">{activeJobs}</p>
            </div>

            <div
              className="bg-white rounded-lg shadow p-6 cursor-pointer hover:bg-gray-50 transition"
              onClick={() => navigate("/admin/jobs?status=Assigned")}
            >
              <h2 className="text-lg font-semibold mb-2">Assigned Jobs</h2>
              <p className="text-2xl font-bold">{assignedJobs}</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
