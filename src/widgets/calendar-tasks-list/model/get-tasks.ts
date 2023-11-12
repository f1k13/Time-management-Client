import { createStore } from "effector/effector.umd";
import { getTasksFx } from "../lib/get-tasks-effect";

export type Task = {
  id: number;
  title: string;
  description: string;
  calendarDate: string;
  type: string;
  userId: number;
};

export const $tasksCalendar = createStore<Task[]>([])
  .on(getTasksFx.doneData, (_, tasks: Task[]) => {
    return tasks;
  })
  .on(getTasksFx.failData, () => {
    return [];
  });
