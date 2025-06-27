import { ProtectedRoute } from "../../components/ProtectedRoute/ProtectedRoute";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { ELayout } from "../types/layout";
import { UserRole } from "../types/user";
import { ReactElement, useCallback } from "react";

export function WrapElement(
  element: ReactElement,
  authenticator?: boolean,
  role?: UserRole[],
  layout?: ELayout
) {
  const renderWithLayout = useCallback(() => {
    switch (layout) {
      case ELayout.MAIN_LAYOUT: {
        return <MainLayout>{element}</MainLayout>;
      }
      default: {
        return element;
      }
    }
  }, [element, layout]);
  return (
    <ProtectedRoute authenticator={authenticator} role={role}>
      {renderWithLayout()}
    </ProtectedRoute>
  );
}
