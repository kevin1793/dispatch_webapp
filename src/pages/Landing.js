import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-4">
        DispatchPro
      </h1>

      <p className="text-slate-300 mb-8 text-center max-w-md">
        Manage loads, drivers, and routes all in one place.
      </p>

      <Link
        to="/login"
        className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
      >
        Go to Login
      </Link>
    </div>
  );
}
