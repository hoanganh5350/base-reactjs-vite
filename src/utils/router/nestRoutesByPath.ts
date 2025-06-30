// utils/router/nestRoutesByPath.ts
import type { RouteObject } from "react-router-dom";
import type { RouteItem } from "../../router/constants";
import { WrapElement } from "./wrapElement";
import { createElement } from "react";

export const nestRoutesByPath = (flatRoutes: RouteItem[]): RouteObject[] =>
  flatRoutes.map((page: RouteItem) => {
    const { path, ...props } = page;
    return {
      path,
      element: createElement(WrapElement, props),
    };
  });
