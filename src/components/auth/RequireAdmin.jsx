import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function RequireAdmin({ children }) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
  if (!token) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
}
