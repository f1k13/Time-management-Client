import { CALENDAR_ROUTE, FRIENDS_ROUTE, PLAN_ROUTE } from "@/app/routes/paths";
import {
  CalendarIcon,
  FriendIcon,
  NotesIcon,
  PlanIcon,
  ProgressIcon,
  StatisticsIcon,
} from "@/shared/ui/icons";

type SideBar = {
  id: number;
  title: string;
  icon: JSX.Element;
  path?: string;
  active: boolean;
};

export const sidebarData: SideBar[] = [
  {
    id: 1,
    title: "Calendar",
    icon: <CalendarIcon />,
    path: CALENDAR_ROUTE,
    active: false,
  },
  { id: 2, title: "Progress", icon: <ProgressIcon />, active: false },
  { id: 3, title: "Statistics", icon: <StatisticsIcon />, active: false },
  {
    id: 4,
    title: "Friends",
    icon: <FriendIcon />,
    active: false,
    path: FRIENDS_ROUTE,
  },
  {
    id: 5,
    title: "Notes",
    icon: <NotesIcon />,
    active: false,
  },
  { id: 6, title: "Plan", icon: <PlanIcon />, active: false, path: PLAN_ROUTE },
];
