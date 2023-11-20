import { createStore } from "effector/effector.umd";
import { getTasksFx } from "../lib/get-tasks-effect";
import { createTaskFx } from "@/features/tasks-form/lib/send-task-effect.ts";

export type Task = {
  id: number;
  title: string;
  description: string;
  calendarDate: string;
  type: string;
  userId: number;
};

export const $calendarTasks = createStore<Task[]>([])
  .on(createTaskFx.doneData, (state, tasks: Task) => {
    return [...state, tasks];
  })
  .on(getTasksFx.doneData, (_, tasks: Task[]) => {
    console.log(tasks);
    return tasks;
  })
  .on(createTaskFx.failData, () => {
    return [];
  });
