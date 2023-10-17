import { CALENDAR_ROUTE } from "@/app/routes/paths";
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
};

export const sidebarData: SideBar[] = [
  { id: 1, title: "Calendar", icon: <CalendarIcon />, path: CALENDAR_ROUTE },
  { id: 2, title: "Progress", icon: <ProgressIcon /> },
  { id: 3, title: "Statistics", icon: <StatisticsIcon /> },
  { id: 4, title: "Friend", icon: <FriendIcon /> },
  { id: 5, title: "Notes", icon: <NotesIcon /> },
  { id: 6, title: "Plan", icon: <PlanIcon /> },
];
