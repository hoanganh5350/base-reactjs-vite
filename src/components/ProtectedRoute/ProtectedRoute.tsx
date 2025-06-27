import { Navigate } from "react-router-dom";
import type { ReactElement } from "react";
import { UserRole } from "../../utils/types/user";

// const getCurrentUserRole = (): UserRole => {
//   return (localStorage.getItem("role") as UserRole) ?? "guest";
// };

type ProtectedRouteProps = {
  children: ReactElement;
  authenticator?: boolean;
  role?: UserRole[];
};

export const ProtectedRoute = ({ children, authenticator, role }: ProtectedRouteProps) => {
  const isAuth = true;

  if (authenticator && !isAuth) {
    return <Navigate to="/login" replace />;
  }

  if (authenticator && isAuth && role && !role.includes(UserRole.ADMIN)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}