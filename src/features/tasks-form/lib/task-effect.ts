import { api } from "@/shared/api/api";
import { AxiosError } from "axios";
import { createEffect } from "effector";

export type CreateTask = {
  title: string;
  description: string;
  calendarDate: string;
  type: string;
  userId: number;
};

export const createTaskFx = createEffect<
  {
    title: string;
    description: string;
    calendarDate: string;
    type: string;
    userId: number;
  },
  CreateTask,
  AxiosError
>(async (params: CreateTask) => {
  const { data } = await api.post("/calendar/createTask", {
    ...params,
  });
  return data;
});
