// utils/router/nestRoutesByPath.ts
import type { RouteObject } from "react-router-dom";
import type { RouteItem } from "../../router/constants";
import { WrapElement } from "./wrapElement";

export function nestRoutesByPath(flatRoutes: RouteItem[]): RouteObject[] {
  const root: RouteObject[] = [];

  function insertRoute(
    segments: string[],
    fullPath: string,
    route: RouteObject,
    currentLevel: RouteObject[]
  ) {
    const [current, ...rest] = segments;
    const isLast = segments.length === 1;

    let existing = currentLevel.find(r => r.path === current);

    if (!existing) {
      existing = { path: current };
      currentLevel.push(existing);
    }

    if (isLast) {
      existing.element = route.element;
    } else {
      if (!existing.children) existing.children = [];
      insertRoute(rest, fullPath, route, existing.children);
    }
  }

  for (const r of flatRoutes) {
    const segments = r.path === "/" ? [] : r.path.split("/").filter(Boolean);
    const route: RouteObject = {
      element: WrapElement(r.element, r.authenticator, r.role, r.layout),
    };

    if (segments.length === 0) {
      root.push({ path: "/", ...route });
    } else {
      insertRoute(segments, r.path, route, root);
    }
  }

  return root;
}