import { HomePage } from "@/pages/home-page";
import { HOME_ROUTE, LOGIN_ROUTE } from "./paths";

type RouteType = {
  path: string;
  Component: () => JSX.Element;
};

export const publicRoutes: RouteType[] = [
  {
      path: LOGIN_ROUTE,
      Component: () => <></>,
  }
]

export const authRoutes: RouteType[] = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
];
