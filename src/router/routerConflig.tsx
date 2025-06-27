import { Dashboard } from "../pages/Dashboard/Dashboard";
import { DashboardView } from "../pages/DashboardView/DashboardView";
import { nestRoutesByPath } from "../utils/router/nestRoutesByPath";
import { ELayout } from "../utils/types/layout";
import { UserRole } from "../utils/types/user";
import { ROUTES, type RouteItem } from "./constants";
// import { Navigate } from "react-router-dom";

const flatRoutes: RouteItem[] = [
  {
    path: "/",
    element: <DashboardView />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Dashboard />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: <Dashboard />,
    layout: ELayout.MAIN_LAYOUT,
    authenticator: true,
    role: [UserRole.ADMIN, UserRole.EDITOR],
  },
  {
    path: ROUTES.DASHBOARD_VIEW,
    element: <>DashboardView</>,
    layout: ELayout.MAIN_LAYOUT,
    authenticator: true,
    role: [UserRole.ADMIN, UserRole.VIEWER],
  },
  {
    path: ROUTES.DASHBOARD_VIEW_MODEL,
    element: <>DashboardViewModel</>,
    layout: ELayout.MAIN_LAYOUT,
    authenticator: true,
    role: [UserRole.ADMIN],
  },
  {
    path: ROUTES.DASHBOARD_VIEW_MODEL_CONTROLLER,
    element: <>DashboardViewModelController</>,
    layout: ELayout.MAIN_LAYOUT,
    authenticator: true,
    role: [UserRole.ADMIN, UserRole.VIEWER],
  },
];

console.log(nestRoutesByPath(flatRoutes));

export const nestedRoutes = nestRoutesByPath(flatRoutes);
