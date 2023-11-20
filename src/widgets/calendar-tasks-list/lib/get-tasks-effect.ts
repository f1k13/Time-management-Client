import { api } from "@/shared/api/api";
import { AxiosError } from "axios";
import { createEffect } from "effector/compat";
import { Task } from "@/widgets/calendar-tasks-list/model/calendar-tasks.ts";

export const getTasksFx = createEffect<
  { date: string; userId: number },
  Task[],
  AxiosError
>(async (params: { date: string; userId: number }) => {
  const { data } = await api.get<Task[]>(
    `/calendar/getTasks?date=${params.date}&userId=${params.userId}`,
  );
  return data;
});
