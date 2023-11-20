import { createEffect } from "effector";
import { api } from "@/shared/api/api.ts";
import { Task } from "@/widgets/calendar-tasks-list/model/calendar-tasks.ts";

export const getTasksCells = createEffect(async (id: number) => {
  const { data } = await api.get<Task[]>(`/calendar/getAllTasks?userId=${id}`);
  return data;
});
