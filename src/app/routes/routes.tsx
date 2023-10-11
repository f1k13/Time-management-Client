import { CalendarPage } from "@/pages/calendar-page";
import { LoginPage } from "@/pages/login-page";
import { RegisterPage } from "@/pages/register-page";
import { ReactNode } from "react";
import { AuthLayout, MainLayout } from "../layouts";
import { CALENDAR_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "./paths";

type RouteType = {
  path: string;
  Component: () => JSX.Element;
  Layout: ({ children }: { children: ReactNode }) => JSX.Element;
};

export const publicRoutes: RouteType[] = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
    Layout: AuthLayout,
  },
  {
    path: REGISTER_ROUTE,
    Component: RegisterPage,
    Layout: AuthLayout,
  },
];

export const authRoutes: RouteType[] = [
  {
    path: CALENDAR_ROUTE,
    Component: CalendarPage,
    Layout: MainLayout,
  },
];
