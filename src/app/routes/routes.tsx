import { ReactNode } from "react";
import { AuthLayout, MainLayout } from "../layouts";
import {
  CALENDAR_ROUTE,
  FRIENDS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PLAN_ROUTE,
  REGISTER_ROUTE,
} from "./paths";
import { CalendarDay } from "@/pages/calendar-page/calendar-day";
import { LoginPage } from "@/pages/login-page";
import { RegisterPage } from "@/pages/register-page";
import { CalendarPage } from "@/pages/calendar-page";
import { FriendsPage } from "@/pages/friends-page";
import { HomePage } from "@/pages/home-page";
import { PlanPage } from "@/pages/plan-page";

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
    path: HOME_ROUTE,
    Component: HomePage,
    Layout: MainLayout,
  },
  {
    path: CALENDAR_ROUTE,
    Component: CalendarPage,
    Layout: MainLayout,
  },
  {
    path: CALENDAR_ROUTE + "/:id",
    Component: CalendarDay,
    Layout: MainLayout,
  },
  {
    path: FRIENDS_ROUTE,
    Component: FriendsPage,
    Layout: MainLayout,
  },
  {
    path: PLAN_ROUTE,
    Component: PlanPage,
    Layout: MainLayout,
  },
];
