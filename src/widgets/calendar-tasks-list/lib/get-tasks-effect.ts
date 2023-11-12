import { api } from "@/shared/api/api";
import { AxiosError } from "axios";
import { createEffect } from "effector/compat";
import { Task } from "../model/get-tasks";

export const getTasksFx = createEffect<
  { date: string; userId: number },
  Task[],
  AxiosError
>(async (params: { date: string; userId: number }) => {
  const { data } = await api.get<Task[]>(
    `/calendar/getTasks?date=${params.date}&userId=${params.userId}`
  );
  console.log(data);
  return data;
});
