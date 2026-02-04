import { useEffect, useState } from "react";
import { auth, getUserRole } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requiredRole }) {
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const role = await getUserRole(user.uid);
        setHasAccess(role === requiredRole);
      } else {
        setHasAccess(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [requiredRole]);

  if (loading) return <p className="p-8 text-center">Loading...</p>;

  if (!hasAccess) return <Navigate to="/login" replace />;

  return children;
}
