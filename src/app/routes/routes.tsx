
import { CalendarPage } from "@/pages/calendar-page";
import { CALENDAR_ROUTE,  LOGIN_ROUTE, REGISTER_ROUTE } from "./paths";
import { LoginPage } from "@/pages/login-page";
import { RegisterPage } from "@/pages/register-page";


type RouteType = {
  path: string;
  Component: () => JSX.Element;
};

export const publicRoutes: RouteType[] = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: REGISTER_ROUTE,
    Component: RegisterPage,
  },
];

export const authRoutes: RouteType[] = [
  {
    path: CALENDAR_ROUTE,
    Component: CalendarPage,
  },
];
