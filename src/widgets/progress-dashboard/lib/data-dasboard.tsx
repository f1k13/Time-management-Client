import { DashboardBarChart } from "@/features/dashboard-bar-chart/ui";
import { DashboardLineChart } from "@/features/dashboard-line-chart/ui";
import { DashboardAreaChart } from "@/features/dashboard-area-chart/ui";
export type DashboardType =
  | "simpleLineChart"
  | "simpleBarChart"
  | "simpleCircleChart";

export type Tab = {
  id: DashboardType;
  title: string;
};

export const TabsList: Tab[] = [
  {
    id: "simpleLineChart",
    title: "Line chart",
  },
  {
    id: "simpleBarChart",
    title: "Bar chart",
  },
  {
    id: "simpleCircleChart",
    title: "Area chart",
  },
];

export const dataDashboard = {
  simpleLineChart: [<DashboardLineChart />],
  simpleBarChart: [<DashboardBarChart />],
  simpleCircleChart: [<DashboardAreaChart />],
};
