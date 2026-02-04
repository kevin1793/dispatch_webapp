import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { createJob } from "../utils/firebase";

export default function CreateJob() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Call the firebase util
      var jobObj = {
        description,
        pickupLocation,
        deliveryLocation,
        role: "Admin", // use dynamic role later
      };
      await createJob(jobObj);

      alert("Job created successfully!");
      navigate("/admin-dashboard");
    } catch (error) {
      console.error(error);
      alert("Error creating job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Navbar onToggleSidebar={toggleSidebar} />

        <main className="flex-1 p-6">
          <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-6">Create New Job</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="Pickup Location"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="Delivery Location"
                value={deliveryLocation}
                onChange={(e) => setDeliveryLocation(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Job"}
              </button>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
