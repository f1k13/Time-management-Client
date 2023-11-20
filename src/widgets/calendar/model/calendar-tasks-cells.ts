import { createStore } from "effector";
import { getTasksCells } from "@/widgets/calendar/lib/get-tasks-cells.ts";
import { Task } from "@/widgets/calendar-tasks-list/model/calendar-tasks.ts";

export const $calendarTasksCell = createStore<Task[]>([]).on(
  getTasksCells.doneData,
  (_, tasks) => tasks,
);
