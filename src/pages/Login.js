// src/pages/Login.js
import { useState } from "react";
import { login, getUserRole } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Step 1: login
      const user = await login(email, password);

      // Step 2: fetch role from Firestore
      const role = await getUserRole(user.uid);

      if (!role) {
        setError("No role assigned to this user");
        return;
      }

      // Step 3: redirect based on role
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "dispatcher") {
        navigate("/dispatcher-dashboard");
      } else if (role === "contractor") {
        navigate("/contractor-dashboard");
      } else {
        setError("Unauthorized role");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Dispatcher Login</h2>
        <p className="text-slate-500 mb-6">Sign in to continue</p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {error && <p className="text-red-600">{error}</p>}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="dispatcher@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
