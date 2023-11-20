import { api } from "@/shared/api/api";
import { AxiosError } from "axios";
import { createEffect } from "effector";
import { Task } from "@/widgets/calendar-tasks-list/model/calendar-tasks.ts";

export type CreateTask = {
  title: string;
  description: string;
  calendarDate: string;
  type: string;
  userId: number;
};

export const createTaskFx = createEffect<CreateTask, Task, AxiosError>(
  async (params: CreateTask) => {
    const { data } = await api.post<Task>("/calendar/createTask", {
      ...params,
    });
    return data;
  },
);
